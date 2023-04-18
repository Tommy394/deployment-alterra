import { gql } from "@apollo/client";

// PRODUCT
export const UpdateProduct = gql`
	mutation updateProduct(
		$productDescription: String!
		$productCategory: String!
		$productFreshness: String!
		$productImage: String!
		$productName: String!
		$productPrice: numeric!
		$id: uuid!
	) {
		update_products_by_pk(
			pk_columns: { id: $id }
			_set: {
				productDescription: $productDescription
				productCategory: $productCategory
				productPrice: $productPrice
				productName: $productName
				productImage: $productImage
				productFreshness: $productFreshness
			}
		) {
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

export const DeleteProduct = gql`
	mutation MyMutation($id: uuid!) {
		delete_products_by_pk(id: $id) {
			id
		}
	}
`;

export const InsertProduct = gql`
	mutation MyMutation(
		$object: products_insert_input = {
			productCategory: ""
			productDescription: ""
			productFreshness: ""
			productImage: ""
			productPrice: ""
			productName: ""
		}
	) {
		insert_products_one(object: $object) {
			id
		}
	}
`;

// COMMENT
export const InsertComment = gql`
	mutation MyMutation($comment: String, $productId: uuid) {
		insert_comments_one(object: { comment: $comment, productId: $productId }) {
			id
		}
	}
`;
