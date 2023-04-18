import { gql } from "@apollo/client";

// PRODUCT
export const SubscribeProduct = gql`
	subscription MySubscription {
		products {
			id
			productCategory
			productDescription
			productFreshness
			productImage
			productName
			productPrice
		}
	}
`;

export const GetProductsByName = gql`
	query getProductByName($name: String) {
		products(where: { productName: { _ilike: $name } }) {
			id
			productCategory
			productDescription
			productFreshness
			productImage
			productName
			productPrice
		}
	}
`;

export const SubscribeProductsByOffsetLimit = gql`
	subscription MySubscription($limit: Int = 10, $offset: Int = 10) {
		products(limit: $limit, offset: $offset) {
			id
			productCategory
			productDescription
			productFreshness
			productImage
			productName
			productPrice
		}
	}
`;

export const SubscribeProductsByLimit = gql`
	subscription MySubscription($limit: Int) {
		products(limit: $limit, order_by: { productPrice: asc }) {
			id
			productDescription
			productName
			productImage
		}
	}
`;

export const SubscribeProductsCount = gql`
	subscription MySubscription {
		products_aggregate {
			aggregate {
				count
			}
		}
	}
`;

// COMMENT
export const SubscribeCommentsByProductId = gql`
	subscription MySubscription($id: uuid = "") {
		comments(where: { productId: { _eq: $id } }, order_by: { id: desc }) {
			comment
			id
		}
	}
`;
