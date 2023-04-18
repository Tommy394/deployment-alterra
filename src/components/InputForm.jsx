import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { addData, updateData } from "../store/productSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useMutation } from "@apollo/client";

import { BASE_URL, PRODUCT_NAME_MAX } from "../constant";
import { InsertProduct, UpdateProduct } from "../graphql/mutation";

const InputForm = (props) => {
	const isEdit = useSelector((state) => state.isEdit.isEdit);
	const imageRef = useRef(null);
	const [insertProduct, { error: errorInsert }] = useMutation(InsertProduct);
	const [updateProduct, { error: errorUpdate }] = useMutation(UpdateProduct);
	if (errorUpdate) {
		console.log(errorUpdate);
	}
	let initialFormValue = {
		productCategory: "",
	};

	if (isEdit) {
		initialFormValue = props.data;
	}

	const {
		register,
		handleSubmit,
		getValues,
		reset,
		formState: { errors },
	} = useForm({
		mode: "all",
		defaultValues: initialFormValue,
	});

	const toBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});

	const createNewProduct = async (formData) => {
		const res = await insertProduct({ variables: { object: formData } });

		localStorage.setItem(
			res.data.insert_products_one.id,
			await toBase64(getValues("productImage")[0])
		);

		if (!errorInsert) {
			alert("Sukses! Data berhasil disimpan!");
		} else {
			alert("Error! Data gagal disimpan!");
		}
	};

	const handleUpdate = async (formData) => {
		const res = await updateProduct({ variables: formData });

		localStorage.setItem(
			res.data.update_products_by_pk.id,
			await toBase64(getValues("productImage")[0])
		);

		if (!errorUpdate) {
			alert("Sukses! Berhasil mengubah product!");
			props.handleClose();
		} else {
			alert("Error! Gagal mengubah product!");
		}
	};

	const onSubmit = async (data) => {
		const formData = data;

		formData.productImage = imageRef.current.src;

		if (isEdit) {
			handleUpdate(formData);
		} else {
			createNewProduct(formData);
		}
	};

	const handleImageInputChange = () => {
		const img = URL.createObjectURL(getValues("productImage")[0]);
		imageRef.current.src = img;
	};

	return (
		<>
			<form
				className="px-3 w-50 mx-auto mt-5 row"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="fs-5">Detail Product</h2>
				<div className="product-name my-3 col-8">
					<label
						htmlFor="product-name"
						className="form-label"
					>
						Product Name
					</label>
					<input
						type="text"
						className={`form-control ${
							errors.productName ? "input-error" : ""
						}`}
						id="product-name"
						autoComplete="off"
						{...register("productName", {
							required: "Product Name wajib diisi",
							pattern: {
								value: /^[^@/#{}]+$/,
								message: "Product Name tidak boleh mengandung Simbol",
							},
							maxLength: {
								value: PRODUCT_NAME_MAX,
								message: `Product Name tidak boleh melibihi ${PRODUCT_NAME_MAX} karakter`,
							},
						})}
					/>
					{errors.productName && (
						<p className="text-danger mt-1">{errors.productName?.message}</p>
					)}
				</div>
				<div className="col-4" />
				<div className="mb-3 col-6 position-relative">
					<label
						htmlFor="category"
						className="form-label"
					>
						Product Category
					</label>
					<select
						className={`form-select ${
							errors.productCategory ? "input-error" : ""
						}`}
						aria-label=".form-select"
						id="category"
						{...register("productCategory", {
							required: "Product Category wajib dipilih",
						})}
					>
						<option
							value=""
							disabled
						>
							Choose...
						</option>
						<option value="Gadget & Technology">Gadget &amp; Technology</option>
						<option value="Fashion">Fashion</option>
						<option value="Home Appliances">Home Appliances</option>
					</select>
					{errors.productCategory && (
						<p className="text-danger mt-1">
							{errors.productCategory?.message}
						</p>
					)}
				</div>
				<div className="col-6" />
				<div className="mb-3 col-6 position-relative">
					<label
						htmlFor="formFile"
						className="form-label"
					>
						Image of Product
					</label>
					<input
						className={`form-control form-control btn btn-outline-primary ${
							errors.productImage ? "input-error" : ""
						}`}
						type="file"
						id="formFile"
						accept="image/*"
						{...register("productImage", {
							required: "Product Image wajib dimasukkan",
							onChange: handleImageInputChange,
							validate: (value) =>
								value[0].type.includes("image/") ||
								"File hanya boleh bertipe gambar",
						})}
					/>
					{errors.productImage && (
						<p className="text-danger mt-1">{errors.productImage?.message}</p>
					)}
					<img
						src=""
						className="mt-2"
						ref={imageRef}
					/>
				</div>
				<div className="col-6" />
				<label
					htmlFor="freshness"
					className="col-12"
				>
					Product Freshness
				</label>
				<div
					id="freshness"
					className="mb-3 col-12 position-relative"
				>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="freshness"
							id="brand-new"
							value="Brand New"
							{...register("productFreshness", {
								required: "Product Freshness wajib dipilih",
							})}
						/>
						<label
							className="form-check-label"
							htmlFor="brand-new"
						>
							{" "}
							Brand New{" "}
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="freshness"
							id="second-hand"
							value="Second Hand"
							{...register("productFreshness", {
								required: "Product Freshness wajib dipilih",
							})}
						/>
						<label
							className="form-check-label"
							htmlFor="second-hand"
						>
							{" "}
							Second Hand{" "}
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="freshness"
							id="refurbished"
							value="Refurbished"
							{...register("productFreshness", {
								required: "Product Freshness wajib dipilih",
							})}
						/>
						<label
							className="form-check-label"
							htmlFor="refurbished"
						>
							{" "}
							Refurbished{" "}
						</label>
					</div>
					{errors.productFreshness && (
						<p className="text-danger mt-1">
							{errors.productFreshness?.message}
						</p>
					)}
				</div>
				<div className="mb-3 col-12 position-relative">
					<label
						htmlFor="description"
						className="form-label"
					>
						Additional Description
					</label>
					<textarea
						className={`form-control ${
							errors.productDescription ? "input-error" : ""
						}`}
						id="description"
						rows={5}
						{...register("productDescription", {
							required: "Additional Description wajib diisi",
						})}
					/>
					{errors.productDescription && (
						<div className="text-danger mt-1">
							{errors.productDescription?.message}
						</div>
					)}
				</div>
				<div className="mb-5 col-12">
					<label
						htmlFor="price"
						className="form-label"
					>
						Product Price
					</label>
					<input
						type="number"
						className={`form-control ${
							errors.productPrice ? "input-error" : ""
						}`}
						id="price"
						placeholder="$ 1"
						min="0"
						{...register("productPrice", {
							required: "Product Price wajib diisi",
						})}
					/>
					{errors.productPrice && (
						<div className="text-danger mt-1">
							{errors.productPrice?.message}
						</div>
					)}
				</div>
				<button
					type="submit"
					className="btn btn-primary col-12"
					data-testid="submitButton"
				>
					{isEdit ? "Update" : "Submit"}
				</button>
			</form>
		</>
	);
};

export default InputForm;
