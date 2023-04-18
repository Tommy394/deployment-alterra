import { useLazyQuery, useMutation, useSubscription } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useState } from "react";

import ListProduct from "../../components/ListProduct";
import {
	GetProductsByName,
	SubscribeProductsByOffsetLimit,
	SubscribeProductsCount,
} from "../../graphql/query";
import Pagination from "../../components/Pagination";

const Storemanagement = () => {
	const [products, setProducts] = useState([]);
	const [offset, setOffset] = useState(0);
	const paginationLimit = 5;
	// const { data, loading, error } = useQuery(GetProducts, {
	// 	onCompleted: (data) => setProducts(data.products),
	// });

	const { data, loading, error } = useSubscription(
		SubscribeProductsByOffsetLimit,
		{
			variables: { offset, limit: paginationLimit },
			onData: (data) => setProducts(data.data.data.products),
		}
	);
	const { data: dataCount } = useSubscription(SubscribeProductsCount);
	const [getProductsByName, { data: dataProductsByName }] =
		useLazyQuery(GetProductsByName);

	const handleSearch = async (name) => {
		name += "%";
		const res = await getProductsByName({ variables: { name } });
		setProducts(res.data.products);
	};

	if (error) {
		console.log(error);
	}

	return (
		<>
			<ListProduct
				products={products}
				loading={loading}
				handleSearch={handleSearch}
			/>
			<Pagination
				className={"mt-4"}
				setOffset={setOffset}
				paginationLimit={paginationLimit}
				totalProducts={dataCount?.products_aggregate.aggregate.count}
			/>
		</>
	);
};

export default Storemanagement;
