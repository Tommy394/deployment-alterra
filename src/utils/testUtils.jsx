import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../store/store";

// Melakukan cleanup setelah setiap test case
afterEach(() => {
	cleanup();
});

const customRender = (ui, options = {}) =>
	render(ui, {
		// Membungkus element yang di assign ke parameter ui
		// seperti dibungkus <Provider> dan <BrowserRouter>
		wrapper: ({ children }) => (
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		),
		...options,
	});

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
