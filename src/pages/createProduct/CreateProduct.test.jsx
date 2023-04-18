import { describe, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "../../utils/testUtils";

import CreateProduct from "./CreateProduct";

describe("form can works correctly", () => {
	test("Product Name can take input and show it on the screen", () => {
		render(<CreateProduct />);

		const productNameInput = screen.getByRole("textbox", {
			name: /product name/i,
		});
		const valueDisplay = screen.getByTestId("valueDisplay");
		const nameInput = "Laptop";

		fireEvent.change(productNameInput, { target: { value: nameInput } });

		expect(productNameInput).toHaveValue(nameInput);
		expect(valueDisplay).toHaveTextContent(nameInput);
	});

	test("Select can be selected and show the value on the screen", () => {
		render(<CreateProduct />);

		const productCategoryInput = screen.getByLabelText("Product Category");
		const valueDisplay = screen.getByTestId("valueDisplay");
		const categoryInput = "Gadget & Technology";

		fireEvent.change(productCategoryInput, {
			target: { value: categoryInput },
		});

		expect(productCategoryInput).toHaveValue(categoryInput);
	});

	test("show error message if product name input contains symbol", () => {
		render(<CreateProduct />);

		const productNameInput = screen.getByRole("textbox", {
			name: /product name/i,
		});
		const submitButton = screen.getByTestId("submitButton");
		const nameInput = "L@ptop";

		fireEvent.change(productNameInput, { target: { value: nameInput } });
		fireEvent.click(submitButton);

		waitFor(() =>
			expect(
				screen.getByText("Product Name tidak boleh mengandung Simbol")
			).toBeInTheDocument()
		);
	});

	test("show error message if product name input exceed 25 characters", () => {
		render(<CreateProduct />);

		const productNameInput = screen.getByRole("textbox", {
			name: /product name/i,
		});
		const submitButton = screen.getByTestId("submitButton");
		const nameInput = "1234567890123456789012345";

		fireEvent.change(productNameInput, { target: { value: nameInput } });
		fireEvent.click(submitButton);

		waitFor(() =>
			expect(
				screen.getByText("Product Name tidak boleh melibihi 25 karakter")
			).toBeInTheDocument()
		);
	});

	test("show error message if form inputs are empty", () => {
		render(<CreateProduct />);

		const submitButton = screen.getByTestId("submitButton");

		fireEvent.click(submitButton);

		waitFor(() => {
			expect(screen.getByText("Product Name wajib diisi")).toBeInTheDocument();
			expect(
				screen.getByText("Product Category wajib dipilih")
			).toBeInTheDocument();
			expect(
				screen.getByText("Product Image wajib dimasukkan")
			).toBeInTheDocument();
			expect(
				screen.getByText("Product Freshness wajib dipilih")
			).toBeInTheDocument();
			expect(
				screen.getByText("Additional Description wajib diisi")
			).toBeInTheDocument();
			expect(screen.getByText("Product Price wajib diisi")).toBeInTheDocument();
		});
	});
});

// async function convertCurrency(amount, fromCurrency, toCurrency) {
// 	let convertedAmount;
// 	const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
//   const data = await response.json();
//   convertedAmount = amount * data.rates[toCurrency];
//   console.log(convertedAmount);
//   return convertedAmount;
// }

// describe("function convertCurrency", () => {
// 	test("function converts correctly", async () => {
// 		const amount = await convertCurrency(1, "USD", "IDR");

// 		expect(amount).toBe(14987.54);
// 	});
// });
