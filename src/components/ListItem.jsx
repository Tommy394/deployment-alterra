import { Link } from "react-router-dom";
import { useState } from "react";
import ModalInputForm from "./ModalInputForm";
import { useDispatch } from "react-redux";
import { setToTrue, setToFalse } from "../store/editSlice";

const ListItem = ({ data, deleteProductData }) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const handleClose = () => {
		dispatch(setToFalse());
		setShow(false);
	};

	const handleShow = () => {
		dispatch(setToTrue());
		setShow(true);
	};
	return (
		<tr>
			<td>
				<Link
					to={`/${data.id}`}
					state={{ data: data }}
				>
					{data.id}
				</Link>
			</td>
			<td>
				<Link
					to={`/${data.id}`}
					state={{ data: data }}
				>
					{data.productName}
				</Link>
			</td>
			<td>
				<Link
					to={`/${data.id}`}
					state={{ data: data }}
				>
					{data.productCategory}
				</Link>
			</td>
			{/* <td>
				<Link
					to={`/${data.id}`}
					state={{ data: data }}
				>
					<img
						style={{ maxWidth: "200px" }}
						src={data.productImage}
						alt="No-Photo"
					/>
				</Link>
			</td> */}
			<td>
				<Link
					to={`/${data.id}`}
					state={{ data: data }}
				>
					{data.productFreshness}
				</Link>
			</td>
			{/* <td>
				<Link
					to={`/${data.id}`}
					state={{ data: data }}
				>
					{data.productDescription}
				</Link>
			</td> */}
			<td>
				<Link
					to={`/${data.id}`}
					state={{ data: data }}
				>
					{data.productPrice}
				</Link>
			</td>
			<td>
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => deleteProductData(data.id)}
				>
					Delete
				</button>
				<button
					type="button"
					className="btn btn-success ms-2"
					onClick={handleShow}
				>
					Edit
				</button>
			</td>
			<ModalInputForm
				show={show}
				handleClose={handleClose}
				data={data}
			/>
		</tr>
	);
};

export default ListItem;
