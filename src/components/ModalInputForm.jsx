import Modal from "react-bootstrap/Modal";
import InputForm from "./InputForm";

const ModalInputForm = ({ show, handleClose, data }) => {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			size="xl"
		>
			<Modal.Header closeButton>
				<Modal.Title>Edit</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<InputForm
					data={data}
					handleClose={handleClose}
				/>
			</Modal.Body>
		</Modal>
	);
};

export default ModalInputForm;
