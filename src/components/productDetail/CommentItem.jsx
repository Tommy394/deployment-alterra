const CommentItem = (props) => {
	return (
		<div className="bg-light border shadow-sm ps-3 pt-3">
			<p>{props.comment}</p>
		</div>
	);
};

export default CommentItem;
