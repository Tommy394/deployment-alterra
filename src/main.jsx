import React from "react";
import ReactDOM from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
	redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import CreateProduct from "./pages/createProduct/CreateProduct";
import RootLayout from "./RootLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductDetail from "./pages/productDetail/ProductDetail";

import { store } from "./store/store";
import Login from "./pages/login/Login";
import { getCookie } from "./utils/cookies";
import client from "./utils/apollo_client";
import Storemanagement from "./pages/storeManagement/StoreManagement";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		loader: () => {
			const token = getCookie();
			if (!token) {
				return redirect("/login");
			}
			return null;
		},
		children: [
			{
				element: <LandingPage />,
				index: true,
			},
			{
				path: "createProduct",
				element: <CreateProduct />,
			},
			{
				path: ":id",
				element: <ProductDetail />,
			},
			{
				path: "/storeManagement",
				element: <Storemanagement />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		loader: () => {
			const token = getCookie();
			if (token) {
				return redirect("/");
			}
			return null;
		},
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ApolloProvider>
	</React.StrictMode>
);
