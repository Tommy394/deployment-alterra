import heroImg from "../../../src/assets/hero-img.png";

const Hero = () => {
	return (
		<section id="hero">
			<div className="container hero__container">
				<div className="hero__text-container">
					<h1 className="hero__title">Better Solutions For Your Business</h1>
					<p className="hero__description">
						We are team of talented designers making websites with Bootstrap
					</p>
					<div className="hero__button-container">
						<button className="button button-primary">Get Started</button>
						<button className="button button-secondary">Watch Video</button>
					</div>
				</div>
				<div className="hero__image-container">
					<img
						src={heroImg}
						className="hero__image"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
