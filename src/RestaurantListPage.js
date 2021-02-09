import React, { Component } from "react";
import NewRestaurantForm from "./NewRestaurantForm";

export default class RestaurantListPage extends Component {
	state = { restaurantNames: [] };

	handleAddRestaurant = (newRestaurantName) => {
		this.setState((state) => ({
			restaurantNames: [newRestaurantName, ...state.restaurantNames],
		}));
	};
	render() {
		return (
			<div>
				<button data-test="addRestaurantButton">Add Restaurant</button>
				<NewRestaurantForm onSave={this.handleAddRestaurant} />
			</div>
		);
	}
}
