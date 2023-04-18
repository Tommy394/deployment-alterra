import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { setCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = async (event) => {
		event.preventDefault();

		const response = await login(
			emailRef.current.value,
			passwordRef.current.value
		);

		setCookie(response.data.token);
		navigate("/");
	};

	return (
		<section
			className="vh-100"
			style={{ backgroundColor: "#508bfc" }}
		>
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div
							className="card shadow-2-strong"
							style={{ borderRadius: "1rem" }}
						>
							<div className="card-body p-5 text-center">
								<h3 className="mb-5">Sign in</h3>
								<Form onSubmit={handleLogin}>
									<FloatingLabel
										controlId="floatingInput"
										label="Email"
										className="mb-3"
									>
										<Form.Control
											type="text"
											placeholder="Email"
											ref={emailRef}
										/>
									</FloatingLabel>
									<FloatingLabel
										controlId="floatingPassword"
										label="Password"
									>
										<Form.Control
											type="password"
											placeholder="Password"
											ref={passwordRef}
										/>
									</FloatingLabel>
									<Button
										variant="primary"
										size="lg"
										className="mt-5 w-100"
										type="submit"
									>
										Login
									</Button>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
