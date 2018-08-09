import React, { Component } from "react";
import { devArrays, compound, masterFunction } from "../helper.js";

class Picker extends React.Component {
	constructor(props) {
		super(props);
	}

	assetRef = React.createRef();

	onAsset = e => {
		// const currentAsset = this.assetRef.current.value;
		const val = parseInt(e.target.value);

		console.log(val);
		this.props.handleChange(val, "asset");
	};

	onYears = e => {
		const val = parseInt(e.target.value);

		const currentYears = e.target.value;
		console.log(currentYears);
		this.props.handleChange(val, "yrs");
	};

	onAmount = e => {
		const val = parseInt(e.target.value);

		const currentAmount = e.target.value;
		console.log(currentAmount);
		this.props.handleChange(val, "startingAmount");
	};

	render() {
		return (
			<div className="center slider">
				<h2> Risk Tolerance </h2>
				<h3>{}</h3>
				<input
					className="center"
					type="range"
					name="points"
					min="1"
					max="100"
					onChange={this.onAsset}
				/>

				<h2> Number of Years Invested </h2>

				<input
					className="center"
					type="range"
					name="points"
					min="2"
					max="90"
					onChange={this.onYears}
				/>
			</div>
		);
	}
}

export default Picker;
