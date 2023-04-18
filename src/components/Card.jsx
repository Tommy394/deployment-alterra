import Button from "react-bootstrap/Button";
import BsCard from "react-bootstrap/Card";

const Card = (props) => {
	return (
		<BsCard style={{ width: "18rem" }}>
			<BsCard.Img
				variant="top"
				src={localStorage.getItem(props.data.id)}
				width="100%"
				height="300"
				style={{ objectFit: "cover", width: "100%", height: "250px" }}
			/>
			<BsCard.Body>
				<BsCard.Title>{props.data.productName}</BsCard.Title>
				<BsCard.Text>{props.data.productDescription}</BsCard.Text>
				<Button variant="primary">Go somewhere</Button>
			</BsCard.Body>
		</BsCard>
	);
};

export default Card;
