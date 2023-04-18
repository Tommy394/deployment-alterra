const Footer = () => {
	return (
		<footer id="footer">
			<div className="container footer__container">
				<div id="footer__info">
					<div>
						<h3 className="footer__logo">ARSHA</h3>
						<p>A108 Adam Street</p>
						<p>New York, NY 535022</p>
						<p>United States</p>
						<p className="footer__phone">
							<span className="bold">Phone:</span> +1 5589 55488 55
						</p>
						<p>
							<span className="bold">Email:</span> info@example.com
						</p>
					</div>
					<div>
						<h4 className="title">Useful Links</h4>
						<ul>
							<li>
								<a href="">Home</a>
							</li>
							<li>
								<a href="">About Us</a>
							</li>
							<li>
								<a href="">Services</a>
							</li>
							<li>
								<a href="">Terms Of Service</a>
							</li>
							<li>
								<a href="">Privacy Policy</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="title">Our Services</h4>
						<ul>
							<li>
								<a href="">Web Design</a>
							</li>
							<li>
								<a href="">Web Development</a>
							</li>
							<li>
								<a href="">Product Management</a>
							</li>
							<li>
								<a href="">Marketing</a>
							</li>
							<li>
								<a href="">Graphic Design</a>
							</li>
						</ul>
					</div>
					<div className="footer__social">
						<h4 className="title">Our Social Networks</h4>
						<p>
							Cras fermentum odio eu feugiat lide par naso tierra videa magna
							derita valies
						</p>
						<div className="footer__social-icons">
							<div />
							<div />
							<div />
							<div />
						</div>
					</div>
				</div>
			</div>
			<div id="footer__copy">
				<div className="container copy__container">
					<p>
						© Copyright <strong>Arsha.</strong> All Rights Reserved
					</p>
					<p>
						Designed by <a href="https://getbootstrap.com/">BootstrapMade</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
