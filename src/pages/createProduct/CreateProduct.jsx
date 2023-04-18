import { useSelector, useDispatch } from "react-redux";
import { useQuery, useSubscription } from "@apollo/client";

import ListProduct from "../../components/ListProduct";
import InputForm from "../../components/InputForm";
import logo from "../../assets/bootstrap_logo.svg";
import article from "../../article";
import { addData } from "../../store/productSlice";
import { SubscribeProduct } from "../../graphql/query";

const CreateProduct = () => {
	const products = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	// const { data, loading, error } = useQuery(GetProducts, {
	// 	onCompleted: (data) => dispatch(addData(data.products)),
	// });

	const { data, loading, error } = useSubscription(SubscribeProduct, {
		onCompleted: (data) => dispatch(addData(data.products)),
	});

	if (error) {
		console.log(error);
	}

	/**
	 * generateRandomNumber
	 *
	 * * function untuk menampilkan angka random 1 - 100 di console
	 */
	const generateRandomNumber = () => {
		console.log(Math.floor(Math.random() * 100) + 1);
	};

	return (
		<main>
			<div className="container mt-5">
				<div className="d-flex justify-content-end">
					<button
						onClick={generateRandomNumber}
						type="button"
						className="btn btn-primary"
					>
						Generate Random Number
					</button>
				</div>
				<img
					className="mt-5 mx-auto d-block"
					src={logo}
					alt="Logo Bootstrap"
					style={{ width: "100px" }}
				/>
				<h1 className="text-center mt-3 fs-2">{article.title.en}</h1>
				<p className="text-center mt-2 w-75 mx-auto mb-3">
					{article.description.en}
				</p>
				<InputForm />
				<ListProduct
					products={data?.products}
					loading={loading}
				/>
			</div>
		</main>
	);
};

export default CreateProduct;
