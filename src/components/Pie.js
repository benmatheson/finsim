import React from "react";
import * as d3 from "d3";
import "../App.css";

export default class Chart extends React.Component {
	render() {
		const data = this.props.realData;

		const flattenedData = [].concat(...data);
		const maxValue = Math.max(...flattenedData);
		const minValue = Math.m