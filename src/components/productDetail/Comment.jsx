import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useRef } from "react";
import { useMutation, useSubscription } from "@apollo/client";

import CommentItem from "./CommentItem";
import { SubscribeCommentsByProductId } from "../../graphql/query";
import { InsertComment } from "../../graphql/mutation";

const Comment = (props) => {
	const commentRef = useRef(null);
	const { data } = useSubscription(SubscribeCommentsByProductId, {
		variables: { id: props.id },
	});
	const [insertComment] = useMutation(InsertComment, {
		variables: { productId: props.id },
	});

	const handleCommentSend = (event) => {
		event.preventDefault();
		insertComment({ variables: { comment: commentRef.current.value } });
		commentRef.current.value = "";
	};

	return (
		<>
			<Form
				className="w-50 m-auto"
				onSubmit={handleCommentSend}
			>
				<Form.Group
					className="mb-3"
					controlId="comment"
				>
					<Form.Label>Comments</Form.Label>
					<Form.Control
						as="textarea"
						ref={commentRef}
					/>
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
				>
					Send
				</Button>
			</Form>
			<Stack
				gap={4}
				className="mt-4 w-50 m-auto mb-5"
			>
				{data?.comments.map((data) => (
					<CommentItem
						key={data.id}
						comment={data.comment}
					/>
				))}
			</Stack>
		</>
	);
};

export default Comment;
