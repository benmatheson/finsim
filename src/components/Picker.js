import React, { Component } from "react";
import { devArrays, compound, masterFunction } from "../helper.js";

class Picker extends React.Component {
	constructor(props) {
		super(props);
	}

	assetRef = React.createRef();

	onYears = e => {
		const val = parseInt(e.target.value);

		const currentYears = e.target.value;
		console.log(currentYears);
		this.props.handleChange(val, "yrs");
	};

	onAsset = e => {
		// const currentAsset = this.assetRef.current.value;
		const val = parseInt(e.target.value);

		console.log(val);
		this.props.handleChange(val, "asset");
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
				<h3> Number of Years Invested </h3>

				<input
					className="center"
					type="range"
					name="points"
					min="1"
					step="1"
					max="90"
					onChange={this.onYears}
				/>

				<div className="sliderFlex center">
					<div className="sliderFlexItem">2 years</div>
					<div className="sliderFlexItem">50 years</div>
					<div className="sliderFlexItem">90 years</div>
				</div>

				<h3> Risk Tolerance </h3>
				<input
					className="center"
					type="range"
					name="points"
					step="1"
					min="1"
					max="100"
					onChange={this.onAsset}
				/>

				<div className="sliderFlex center">
					<div className="sliderFlexItem">Least Risk</div>
					<div className="sliderFlexItem">Moderate</div>
					<div className="sliderFlexItem">Highest Risk</div>
				</div>
			</div>
		);
	}
}

export default Picker;
