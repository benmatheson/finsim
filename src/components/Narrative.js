import React from "react";
import * as d3 from "d3";
import "../App.css";

export default class Narrative extends React.Component {
	render() {
		function setAssetAllocation(allocation) {
			var stx = Math.floor(allocation) / 100;
			var bnds = ((100 - allocation) * 0.75) / 100;
			var bls = ((100 - allocation) * 0.25) / 100;

			// console.log("stx        " + stx);
			// console.log("nbds       " + bnds);
			// console.log("billsx     " + bls);
			return {
				stocks: (stx * 100).toLocaleString(),
				bonds: (bnds * 100).toLocaleString(),
				bills: (bls * 100).toLocaleString()
			};
		}

		const alloOutN = setAssetAllocation(this.props.asset);

		// console.table(this.props.realData);
		const dataPositive = this.props.realData.filter(
			(d, i) => d[d.length - 1] > d[0]
		);

		// console.table(dataPositive);
		const dataPositiveLength = dataPositive.length;
		const dataNegativeLength =
			this.props.realData.length - dataPositiveLength;

		// console.log("THE LENGTH");
		// console.log(dataPositiveLength);

		// const flattenedData = [].concat(...data);
		// const maxValue = Math.max(...flattenedData);
		// const minValue = Math.m;

		// function allocationName(allocation) {
		// 	switch (true) {
		// 		case allocation < 33:
		// 			const nameA = "conservative";
		// 			break;
		// 		case allocation > 33 && allocation < 66:
		// 			const nameA = "moderage";
		// 			break;

		// 		case allocation > 66:
		// 			const nameA = "aggressive";
		// 			break;
		// 	}

		// 	return nameA;
		// }

		// const allocationDesc = allocationName(this.props.asset);






		// #####Cacluate the average return. 

console.log("this.props.realData");
const averageData= this.props.realData;

	const calculatedReturns=  averageData.map((d,i)=>{

			const exp = 1/this.props.years;
			const final = d[d.length-1]; 
			const cagrCalc = (final/10000)**exp-1;
			// console.log(cagrCalc);
			return cagrCalc

		})

	console.log("calculatedReturns ");
	console.log(calculatedReturns);
	console.log("Returns ");
	const calculatedAverage = ((calculatedReturns.reduce((current,tally)=>current+tally,0))/this.props.realData.length)*100

console.log("calculatedAverage ");
	console.log(calculatedAverage);

		return (
			<p className="center narrative">
				<strong />
	
				There have been
				<span className="uniqueSpan">
				
					{this.props.realData.length}
				</span>
				unique
				<span className="uniqueSpan">
					{this.props.years}-year
				</span>
				periods since 1928.
			
				<span className="uniqueSpan positive">
					{dataPositiveLength} 
				</span>
				have seen positive returns, and 
				<span className="uniqueSpan negative">
					{dataNegativeLength}
				</span>have seen negative returns. The average annualized return has been<span className="uniqueSpan">{calculatedAverage.toFixed(2)}</span>percent.
			</p>
		);
	}
}
