import Hero from "../../components/landingPage/Hero";
import ListProduct from "../../components/landingPage/ListProduct";
import Newsletter from "../../components/landingPage/Newsletter";
import Footer from "../../components/Footer";

import "./landingPage.css";

const LandingPage = () => {
	return (
		<>
			<main>
				<Hero />
				<ListProduct />
				<Newsletter />
			</main>
			<Footer />
		</>
	);
};

export default LandingPage;
