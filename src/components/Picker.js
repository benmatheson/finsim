import React, { Component } from "react";
import { devArrays, compound, masterFunction } from "../helper.js";
import Bar from "./Bar";
import { setAssetAllocationBar } from "../helper.js";
import Asset from "./Asset.js";

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
			<div><div className="choose">Choose the number of years and asset allocation:
					
		
<div className="bounce" > <svg   xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-down"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg></div>





		</div>

			<div className="center slider">
				<div className="center sliderContainer ">
					<h3>
						{" "}
						Number of Years Invested:{" "}
						<span className="highlightYears">
							{this.props.yrs}
						</span>{" "}
					</h3>

					<div className="sliderFlex center">
						<div className="sliderFlexItem">1 year</div>
						<div className="sliderFlexItem"> 50 years</div>
						<div className="sliderFlexItem">90 years</div>
					</div>

					<input
						className="center"
						type="range"
						name="points"
						min="1"
						defaultValue="10"
						step="1"
						max="90"
						onChange={this.onYears}
					/>
				</div>
				<div className="sliderContainer center">
					<Asset 
years={this.props.years}
          asset={this.props.asset}
   

					 />

					<div className="sliderFlex center">
						<div className="sliderFlexItem">Bonds & Cash</div>
						<div className="sliderFlexItem">Blend</div>
						<div className="sliderFlexItem">All Stocks</div>
					</div>

					<input
						className="center"
						type="range"
						name="points"
						step="1"
						min="1"
						max="100"
						onChange={this.onAsset}
					/>
				</div>{" "}
			</div>
			</div>
		);
	}
}

export default Picker;
