import React, { Component } from "react";
import RestaurantListPage from "./RestaurantListPage";

export default class App extends Component {
	state = { name: "Aravindan" };
	render() {
		return (
			<div>
				<RestaurantListPage />
			</div>
		);
	}
}
