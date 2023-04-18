import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";

import Card from "../Card";
import { SubscribeProductsByLimit } from "../../graphql/query";

const ListProduct = () => {
	const { data, loading, error } = useSubscription(SubscribeProductsByLimit, {
		variables: { limit: 3 },
	});

	if (error) {
		console.log(error);
	}

	return (
		<section>
			<div className="container list-product__container">
				<h2 className="list-product__title">Product List</h2>
				<CardGroup className="card-wrapper mt-4">
					{data?.products.map((data) => (
						<Card
							key={data.id}
							data={data}
						/>
					))}
				</CardGroup>
				<Link to={"/storeManagement"}>
					<Button
						variant="primary"
						className="d-block mt-4 ms-auto"
					>
						Load More...
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default ListProduct;
