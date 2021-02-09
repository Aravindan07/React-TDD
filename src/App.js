import React, { Component } from "react";

export default class App extends Component {
	state = { name: "Aravindan" };
	render() {
		return (
			<div>
				<div className="hello">Hello {this.state.name}!</div>
			</div>
		);
	}
}
