import { Outlet, useNavigate } from "react-router-dom";

import useAuth from "./hooks/useAuth";

const RootLayout = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<>
			<header>
				<nav className="navbar shadow-sm navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<a
							className="navbar-brand fw-semibold"
							href="#"
						>
							Simple Header
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse justify-content-end"
							id="navbarNav"
						>
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link btn btn-primary link-light active"
										aria-current="page"
										href="#"
									>
										Home
									</a>
								</li>
								<li className="nav-item ms-4">
									<a
										className="nav-link link-primary"
										href="#"
									>
										Features
									</a>
								</li>
								<li className="nav-item ms-4">
									<a
										className="nav-link link-primary"
										href="#"
									>
										Pricing
									</a>
								</li>
								<li className="nav-item ms-4">
									<a
										className="nav-link link-primary"
										href="#"
									>
										FAQs
									</a>
								</li>
								<li className="nav-item ms-4">
									<a
										className="nav-link link-primary"
										href="#"
									>
										About
									</a>
								</li>
								<li className="nav-item ms-3">
									<a
										className="nav-link link-primary"
										href="#"
										onClick={handleLogout}
									>
										Log Out
										<i className="bi bi-box-arrow-right me-1"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default RootLayout;
