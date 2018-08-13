import React from "react";
import * as d3 from "d3";
import "../App.css";

export default class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.handleHover1 = this.handleHover1.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.handleMouseIn = this.handleMouseIn.bind(this);
		// this.handleMove = this.handleMove.bind(this);
		this.renderAxis = this.renderAxis.bind(this);
		this.axisRef = React.createRef();
	}

	renderAxis = () => {
		// console.log("RENERING AXIS");
		var cWidth = 100;

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

		const dataAxis = this.props.realData;

		const scaleX = d3
			.scaleLinear()
			.domain([0, dataAxis[0].length - 1])
			.range([2, cWidth - 54]);

		const flattenedData = [].concat(...dataAxis);
		const maxValue = Math.max(...flattenedData);
		const minValue = Math.min(...flattenedData);

		const scaleY = d3
			.scaleLinear()
			.domain([minValue, maxValue])
			.range([300, 0]);

		// // var node = this.refs.axisRef;
		// const node = this.node;
		const xAxis = d3.axisBottom().scale(scaleX);
		const yAxis = d3.axisRight().scale(scaleY);
		// d3.select(node).call(xAxis);
		// d3.select(node).call(xAxis);

		d3.select("#g1").call(xAxis.ticks(5));
		d3.select("#g2").call(yAxis.ticks(5).tickFormat(d3.format("$"+".2s")))
	};

	componentDidMount() {
		this.renderAxis();
		console.log("RENDER AXIS mtehod");
		console.log(this.renderAxis);
	}
	componentDidUpdate() {
		this.renderAxis();
	}

	// handleMove() {
	// 	// const el = d3.select("#dog");
	// 	console.log("insidehanldeMove");
	// 	// console.log(d3.mouse(this)[0]);
	// }

	handleMouseOut(e) {
		const selector = document.querySelectorAll("path");
		console.log(selector);

		if (e.target.hasAttribute("key2")) {
			selector.forEach(d => d.classList.remove("gray"));
		}

		selector.forEach(d => d.classList.remove("highlight"));
	}

	handleMouseIn(e) {
		const chart = document.querySelector("#dog");
		const selector = chart.querySelectorAll("path");
		console.log("GOING IN");

		selector.forEach(d => d.classList.add("gray"));

		// selector.forEach(d => d.classList.remove("highlight"));
	}

	handleHover1(e) {
		// console.log(e.target.current.value);
		// console.log("*****************************HOVERING");
		// console.log(e.relatedTarget.getAttribute("yeers"));
		console.log("getBoundingClientRect");
		e.preventDefault();
		console.log(e.target.getBoundingClientRect());
		console.log(e.target.getBoundingClientRect().x);
		console.log(e.target.getBoundingClientRect().y);
		console.log("cient left");
		console.log(e.target.getBoundingClientRect().left);
		console.log("cient top");
		console.log(e.target.getBoundingClientRect().top);

		// console.log(e.pageX);
		// console.log(e.pageY);

				const chart = document.querySelector("#dog");
		const selector = chart.querySelectorAll("path");


		// const selector = document.querySelectorAll("path");
		console.log(selector);

		if (e.target.hasAttribute("key2")) {
			selector.forEach(d => d.classList.add("gray"));
		}

		const currentIndex = e.target.getAttribute("key2");
		console.log("urrentIndex");
		console.log(currentIndex);

		// const selectorActive = document.querySelector(
		// 	"path[key2 = " + currentIndex + "]"
		// );

		const selectorActive = document.querySelectorAll(
			`path[key2 = "${currentIndex}"]`
		);

		console.log("SELECTOR AACTI");
		console.log(selectorActive);
		selectorActive.forEach(d => d.classList.remove("gray"));
		selectorActive.forEach(d => d.classList.add("highlight"));

		const coords = {
			pageX: e.pageX,
			clientX: e.target.getBoundingClientRect().x,
			clientXm: e.clientX - 300,
			// paged3X: ,
			clientYm: e.clientY,
			// clientY: e.target.getBoundingClientRect().y,
			clientYoffSet: e.pageY - document.getElementById("dog").offsetTop,
			yeers: e.target.getAttribute("yeers")
		};
		//
		// const siblings = document// const displayYears = this.state.

		this.props.lineHover(coords);
		console.log(coords);

		document.getElemetB;

		// return "yo";
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

		// const domy = data[0].length;
		// console.log(domy);
		const scaleX = d3
			.scaleLinear()
			.domain([1, data[0].length])
			.range([2, cWidth - 54]);

		const scaleY = d3
			.scaleLinear()
			.domain([minValue, maxValue])
			.range([260, 0]);

		// console.log("scaleX(20000)");
		// console.log(scaleY(10000));

		const line = d3
			.line()
			.curve(d3.curveMonotoneX)
			// .curve(d3.curveBasis)
			// .curve(d3.curveLinear)
			// .curve(d3.curveStepBefore)
			.x((d, i) => scaleX(i + 1))
			.y((d, i) => scaleY(d));

		console.log("this");
		console.log(this);
		const calculatedYears = this.props.years;
		const lineMapped = data.map(function(j, i) {
			let style1 = "trash";

			if (j[j.length - 1] > j[0]) {
				style1 = "lineStyle";
			} else {
				style1 = "lineStyleMedian";
			}
			return (
				<path
					// onMouseOver={this.handleHover.bind(this)}
					key={i}
					key2={i}
					finalValue={j[j.length-1]}
					yeers={`${1928 + i} to ${1927+
						calculatedYears+i}  `}
					className={style1}
					d={line(j)}
				/>
			);
		});

		//calculated years is the number of years
		//


		// yeers={`${2017 - (90 - calculatedYears) + i} to ${2017 -
		// 				(90 - calculatedYears) +
		// 				i +
		// 				calculatedYears}  `}

		// const xAxis = d3.axisBottom().scale(scaleX);

		// const axisSvg = <g id="axisId"> </g>;

		// const axisSvg1 = d3.select("#axisId").call(xAxis);
		// const axisSvg1 = this.node.call(xAxis);
		// console.log("axisSvg1");
		// console.log(axisSvg1);

		const dataSorted = data.sort(
			(a, b) => b[this.props.years] - a[this.props.years]
		);

		d3.select("#dog").on("mousemove", function() {
			console.log();
		});

		// console.log(dataSorted);

		// const medianData = dataSorted[Math.floor(dataSorted.length / 2)];
		// console.log(medianData);
		// console.log("medianData");
		// const medianGenerated = (
		// 	<path className="lineStyleMedian" d={line(medianData)} />
		// );

		// console.log("lineMapped");
		// console.log(lineMapped);

		// console.log(xAxis);
		// const xAxisCall = xAxis.call();
		return (
			<div>
				<svg
					id="dog"
					ref={this.axisRef}
					className="mainSvg"
					onMouseMove={this.handleMove}
					// onMouseEnter={this.handleHover1}
					onMouseMove={this.handleHover1}
					onMouseOut={this.handleMouseOut}
					onMouseEnter={this.handleMouseIn}
					width={cWidth}
					height={300}
					yeers=""
				>
					{lineMapped}
					<g className="toolTip">
						<text
							x={this.props.xy.clientXm}
							// x={
							// 	this.props.xy.clientX < cWidth / 2
							// 		? this.props.xy.clientX
							// 		: this.props.xy.clientXm -
							// 		  this.props.xy.clientX
							// }
							y={
								this.props.xy.clientYm / 2
								// 10
							}
							className="toolTipText"
						>
							{
								(this.props.xy.yeers = !null
									? this.props.xy.yeers
									: "yo")
							} {this.props.finalValue}
						</text>
					</g>
					<g className="axis axisX" id="g1" />
					<g className="axis axisY" id="g2" />
				</svg>
			</div>
		);
	}
}
