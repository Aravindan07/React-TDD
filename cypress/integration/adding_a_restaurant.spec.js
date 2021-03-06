describe("adding a restaurant", () => {
	it("displays the restaurants in the list", () => {
		const restaurantName = "Sushi Place";

		cy.visit("http://localhost:1234");

		cy.get('[data-test="newRestaurantName"]').should("not.exist");

		cy.get('[data-test="addRestaurantButton"]').click();

		cy.get('[data-test="newRestaurantName"]').type(restaurantName);

		cy.get('[data-test="saveRestaurantButton"]').click();

		cy.get('[data-test="newRestaurantName"]').should("not.exist");

		cy.contains(restaurantName);
	});
});
