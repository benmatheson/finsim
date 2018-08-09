import React from "react";
import * as d3 from "d3";
import { setAssetAllocationBar } from "../helper.js";

import "../App.css";

export default class Bar extends React.Component {
	render() {
		const alloData = setAssetAllocationBar(this.props.asset);

		console.log(alloData);

		console.log("ALLODTA");

		const { stocks, bonds, bills } = alloData;
		// console.log(stocks + "ROCKS");

		const alloDataArr = [bills, bonds, stocks];
		console.log(alloDataArr);

		const barLength = 300;

		const scaleXBar = d3
			.scaleLinear()
			.domain([0, 1])
			.range([0, barLength]);

		// const scaleXBarPlace = d3
		// 	.scaleLinear()
		// 	.domain([0, 1])
		// 	.range([0, 200]);

		// const scaleColor = d3.scaleOrdinal(d3.schemeBlues[3]);
		const unqColor = d3
			.scaleOrdinal()
			// .interpolate(d3.interpolateHcl)
			// .domain([1, 3])
			.range([d3.rgb("#91bfdb"), d3.rgb("#e0f3f8"), d3.rgb("#fc8d59")]);

		const scaleColor = d3.scaleOrdinal(d3.schemePaired);
		// const line = d3
		// 	.line()
		// 	.curve(d3.curveMonotoneX)
		// 	.x((d, i) => scaleX(i + 1))
		// 	.y((d, i) => scaleY(d));

		function doubleScale(e) {
			return scaleXBar(alloDataArr[0]) + scaleXBar(alloDataArr[1]);
		}

		const barGenerate = alloDataArr.map(function(j, i) {
			return (
				<rect
					key={i}
					width={scaleXBar(j)}
					height={30}
					x={
						i == 2
							? barLength - scaleXBar(j)
							: scaleXBar(alloDataArr[i - 1])
					}
					y={20}
					fill={unqColor(i)}
				/>
			);
		});

		// const dataSorted = data.sort(
		// 	(a, b) => b[this.props.years] - a[this.props.years]
		// );

		// console.log(dataSorted);

		// const medianData = dataSorted[Math.floor(dataSorted.length / 2)];

		// const medianGenerated = (
		// 	<path className="lineStyleMedian" d={line(medianData)} />
		// );

		// console.log("lineMapped");
		// console.log(lineMapped);

		// const xAxis = d3.axisBottom().scale(scaleX);
		// console.log(xAxis);
		// const xAxisCall = xAxis.call();
		return (
			<div>
				<svg
					className="mainSvg center"
					preserveAspectRatio="xMidYMin"
					width={barLength}
					height={40}
				>
					{barGenerate}
				</svg>
			</div>
		);
	}
}
