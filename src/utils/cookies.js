import cookies from "js-cookie";
import { AUTH_NAMESPACE } from "../constant";

export const setCookie = (token) => {
	cookies.set(AUTH_NAMESPACE, token, {
		expires: 14,
	});
};

export const getCookie = () => {
	return cookies.get(AUTH_NAMESPACE);
};

export const removeCookie = () => {
	cookies.remove(AUTH_NAMESPACE);
};
