import { useLocation } from "react-router-dom";

import Comment from "../../components/productDetail/Comment";

const ProductDetail = () => {
	const { state } = useLocation();

	return (
		<>
			<div className="w-50 m-auto mt-5 mb-5">
				<p>id: {state.data.id}</p>
				<p>Product Name: {state.data.productName}</p>
				<p>Product Category: {state.data.productCategory}</p>
				<p>Product Image: </p>
				<img
					src={localStorage.getItem(state.data.id)}
					style={{ maxWidth: "300px" }}
				/>
				<p>Product Freshness: {state.data.productFreshness}</p>
				<p>Additional Description: {state.data.productDescription}</p>
				<p>Product Price: {state.data.productPrice}</p>
			</div>
			<Comment id={state.data.id} />
		</>
	);
};

export default ProductDetail;
