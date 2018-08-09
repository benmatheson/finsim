import React, { Component } from "react";
import "./App.css";
import Picker from "./components/Picker.js";
import { devArrays, compound, masterFunction } from "./helper.js";
import * as d3 from "d3";
import "typeface-roboto";
import Chart from "./components/LineChart";
import Bar from "./components/Bar";
import Narrative from "./components/Narrative";

///functionality

//choose  duration
//choose asset allocation
//choose starting amount

//random selecton 10 year periods or all?
//output linechart grayed out opacity
//show median darker?
//text output that describes

//use HOC

// const test = basicCompound(10000, 0.24, 10);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { asset: 50, yrs: 45, startingAmount: 1000 };
    // this.setTimeout = this.setTimeout.bind(this);
  }

  componentdidMount() {
    setTimeout(() => {
      this.setState({ asset: 99, yrs: 45, startingAmount: 1000 }), 500;
    });

    setTimeout(() => {
      this.setState({ asset: 20, yrs: 45, startingAmount: 1000 }), 1000;
    });
    setTimeout(() => {
      this.setState({ asset: 99, yrs: 1, startingAmount: 1000 }), 1500;
    });
  }

  handleStateChange = (e, st) => {
    const settings = e;
    this.setState({ [st]: settings });
  };

  // componentDidUpdate(prevState) {
  //   // Typical usage (don't forget to compare props):
  //   // if (this.state.startingAmount !== prevState.startingAmount) {
  //   this.setState({
  //     retData: masterFunction(
  //       this.state.asset,
  //       this.state.startingAmount,
  //       this.state.yrs
  //     )
  //   });
  //   // }
  // }

  render() {
    return (
      <div className="App">
        <h1>The Small Sample Size of Market History</h1>

        <Chart
          years={this.state.yrs}
          sa={this.state.startingAmount}
          realData={masterFunction(
            this.state.asset,
            this.state.startingAmount,
            this.state.yrs
          )}
        />
        <Bar asset={this.state.asset} />

        <div />
        <Picker
          handleChange={this.handleStateChange}
          realData={masterFunction(
            this.state.asset,
            this.state.startingAmount,
            this.state.yrs
          )}
        />

        <Narrative
          years={this.state.yrs}
          asset={this.state.asset}
          realData={masterFunction(
            this.state.asset,
            this.state.startingAmount,
            this.state.yrs
          )}
        />
      </div>
    );
  }
}
