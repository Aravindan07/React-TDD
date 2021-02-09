import React from "react";
import { mount } from "enzyme";
import NewRestaurantForm from "../../src/NewRestaurantForm";

describe("NewRestaurantForm", () => {
	describe("CLicking the save button", () => {
		it("calls the onSave Handler", () => {
			const saveHandler = jest.fn();

			const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

			wrapper
				.find('[data-test="newRestaurantName"]')
				.simulate("change", { target: { value: "Sushi Place" } });

			wrapper.find('[data-test="saveRestaurantButton"]').simulate("click");

			expect(saveHandler).toHaveBeenCalledWith("Sushi Place");
		});
	});
});
