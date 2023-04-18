import { Link } from "react-router-dom";

const Newsletter = () => {
	return (
		<section id="newsletter">
			<div className="container newsletter__container">
				<h2 className="newsletter__title">Join Our Newsletter</h2>
				<p className="newsletter__description">
					Tamen quem nulla quae legam multos aute sint culpa legam noster magna
				</p>
				<form
					action=""
					className="newsletter__form"
				>
					<input
						className="newsletter__textfield"
						type="email"
					/>
					<input
						type="submit"
						defaultValue="Subscribe"
						className="button button-primary"
					/>
				</form>
			</div>
			<Link
				to="/createProduct"
				className="button button-primary"
			>
				Create Product
			</Link>
		</section>
	);
};

export default Newsletter;
