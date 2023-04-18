import { useSelector, useDispatch } from "react-redux";
import ListItem from "./ListItem";
import { useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";

import { BASE_URL } from "../constant";
import { DeleteProduct } from "../graphql/mutation";
import { SubscribeProduct } from "../graphql/query";

const ListProduct = (props) => {
	const dispatch = useDispatch();
	const searchNameRef = useRef(null);
	const [deleteProducts, { error: errorDelete }] = useMutation(DeleteProduct, {
		refetchQueries: [SubscribeProduct],
	});

	const deleteProductData = (id) => {
		if (confirm("Apakah anda yakin mau menghapus data?")) {
			deleteProducts({ variables: { id } });

			if (!errorDelete) {
				alert(`Sukses! Berhasil menghapus product!`);
			} else {
				alert("Error! Gagal menghapus data product!");
			}
		}
	};

	const onSearch = (event) => {
		event.preventDefault();

		const name = searchNameRef.current.value;

		props.handleSearch(name);
	};

	return (
		<>
			<h3 className="text-center mt-5">List Product</h3>
			<table className="table table-striped mt-3">
				<thead>
					<tr>
						<th scope="col">No</th>
						<th scope="col">Product Name</th>
						<th scope="col">Product Category</th>
						{/* <th scope="col">Product Image</th> */}
						<th scope="col">Product Freshness</th>
						{/* <th scope="col">Additional Description</th> */}
						<th scope="col">Product Price</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{props.loading ? (
						<tr>
							<td className="mt-3 fs-4 text-center">Loading....</td>
						</tr>
					) : (
						props.products.map((data) => (
							<ListItem
								key={data.id}
								data={data}
								deleteProductData={deleteProductData}
							/>
						))
					)}
				</tbody>
			</table>
			<form
				action="#"
				className="form"
				onSubmit={onSearch}
			>
				<div className="my-3 col-3">
					<input
						type="search"
						className="form-control"
						id="searchInput"
						placeholder="Search by product name"
						name="search"
						ref={searchNameRef}
					/>
				</div>
				<div className="row">
					<button
						id="deleteButton"
						type="button"
						className="btn btn-primary col-1"
					>
						Deletion
					</button>
					<button
						id="searchButton"
						type="submit"
						className="btn btn-outline-primary col-1"
					>
						Search
					</button>
				</div>
			</form>
		</>
	);
};

export default ListProduct;
