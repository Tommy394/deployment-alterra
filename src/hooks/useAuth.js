import axios from "axios";
import { removeCookie } from "../utils/cookies";

const useAuth = () => {
	const url = "https://reqres.in/api/login";

	const login = async (email, password) => {
		try {
			const response = await axios.post(url, {
				email,
				password,
			});

			return response;
		} catch (error) {
			alert(`Error! ${error.response.status}: ${error.response.data.error}!`);
		}
	};

	const logout = () => {
		removeCookie();
	};

	return { login, logout };
};

export default useAuth;
