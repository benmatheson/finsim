import React from "react";
import * as d3 from "d3";
import "../App.css";

export default class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.handleHover = this.handleHover.bind(this);
	}

	handleHover(e) {
		// console.log(e.target.value);
		console.log("hovering");
		e.preventDefault();
		return "yo";
	}

	render() {
		const data = this.props.realData;

		const flattenedData = [].concat(...data);
		const maxValue = Math.max(...flattenedData);
		const minValue = Math.min(...flattenedData);

		// console.log("maxmin");
		// // console.log(data[0].length);
		// console.log(minValue);

		var cWidth = 100;

		function set_vars() {
			//alert('setting vars')
			const current_width = window.innerWidth;
			const current_height = window.innerHeight;

			// current_ratio = current_width / current_height;

			// // Check if height is limiting factor
			// if ( current_ratio > default_ratio ){
			//   h = current_height;
			//   w = h * default_ratio;
			// // Else width is limiting
			// } else {
			//   w = current_width;
			//   h = w / default_ratio;
			// }

			// Set new width and height based on graph dimensions
			// width = w - margin.left - margin.right;
			// height = h - margin.top - margin.bottom;

			if (current_width < 668) {
				cWidth = current_width;
			} else {
				cWidth = 800;
			}
		}

		set_vars();

		console.log("CWIDTH");
		console.log(cWidth);

		// var resizeTimer;
		// window.onresize = function(event) {
		//  clearTimeout(resizeTimer);
		//   resizeTimer = setTimeout(function()
		//   {
		//     // var s = d3.selectAll('svg');
		//     // s = s.remove();

		//     this.node.remove();
		//     set_vars();
		//     // drawGraphic();
		//   }, 100);
		// }

		const domy = data[0].length;
		console.log(domy);
		const scaleX = d3
			.scaleLinear()
			.domain([1, data[0].length])
			.range([0, cWidth]);

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
			return (
				<path
					// onMouseOver={this.handleHover}
					key={i}
					className={style1}
					d={line(j)}
				/>
			);
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
				<svg className="mainSvg" width={cWidth} height={300}>
					{lineMapped}
				</svg>
			</div>
		);
	}
}
