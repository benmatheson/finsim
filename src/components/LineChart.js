import React from "react";
import * as d3 from "d3";
import "../App.css";

export default class Chart extends React.Component {
	render() {
		const data = this.props.realData;

		const flattenedData = [].concat(...data);
		const maxValue = Math.max(...flattenedData);
		const minValue = Math.min(...flattenedData);

		// console.log("maxmin");
		// // console.log(data[0].length);
		// console.log(minValue);

		const domy = data[0].length;
		console.log(domy);
		const scaleX = d3
			.scaleLinear()
			.domain([1, data[0].length])
			.range([0, 500]);

		const scaleY = d3
			.scaleLinear()
			.domain([minValue, maxValue])
			.range([300, 0]);

		// console.log("scaleX(20000)");
		// console.log(scaleY(10000));

		const line = d3
			.line()
			.curve(d3.curveMonotoneX)
			.x((d, i) => scaleX(i + 1))
			.y((d, i) => scaleY(d));

		const lineMapped = data.map(function(j, i) {
			let style1 = "trash";
			console.log(style1);

			if (j[j.length - 1] > j[1]) {
				style1 = "lineStyle";
			} else {
				style1 = "lineStyleMedian";
			}
			return <path key={i} className={style1} d={line(j)} />;
		});

		const dataSorted = data.sort(
			(a, b) => b[this.props.years] - a[this.props.years]
		);

		console.log(dataSorted);

		// const medianData = dataSorted[Math.floor(dataSorted.length / 2)];
		// console.log(medianData);
		// console.log("medianData");
		// const medianGenerated = (
		// 	<path className="lineStyleMedian" d={line(medianData)} />
		// );

		// console.log("lineMapped");
		// console.log(lineMapped);

		const xAxis = d3.axisBottom().scale(scaleX);
		// console.log(xAxis);
		// const xAxisCall = xAxis.call();
		return (
			<div>
				<svg className="mainSvg" width={500} height={300}>
					{lineMapped}
				</svg>
			</div>
		);
	}
}
