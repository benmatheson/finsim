import React, { Component } from "react";
import "./App.css";
import Picker from "./components/Picker.js";
import { devArrays, compound, masterFunction } from "./helper.js";
import * as d3 from "d3";
import "typeface-roboto";
import "typeface-fira-mono";
import Chart from "./components/LineChart";
import Bar from "./components/Bar";
import Narrative from "./components/Narrative";
import Asset from "./components/Asset";

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
    this.state = { asset: 50, yrs: 5, startingAmount: 10000, xy: {},finalValue:{} };
    // this.setTimeout = this.setTimeout.bind(this);
  }

  // componentdidMount() {
  //   setTimeout(() => {
  //     this.setState({ asset: 99, yrs: 45, startingAmount: 1000 }), 500;
  //   });

  //   setTimeout(() => {
  //     this.setState({ asset: 20, yrs: 45, startingAmount: 1000 }), 1000;
  //   });
  //   setTimeout(() => {
  //     this.setState({ asset: 99, yrs: 1, startingAmount: 1000 }), 1500;
  //   });
  // }

  handleStateChange = (e, st) => {
    const settings = e;
    this.setState({ [st]: settings });
  };

  lineHoverMethod = xy => {
    // const settings = e;
    this.setState({ xy: xy });
    // this.setState({ xy: xy });
  };

  // componentdidMount() {
  //   setInterval(() => {
  //     console.log("moutnigned");
  //     this.setState({ asset: 20, yrs: 5, startingAmount: 1000 });
  //     });
  //   }, 1000);
  // }

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
        <h1>Every Time Horizon</h1>
        <h3 className="center subHeader">
          Our modern financial markets are not very old. <br /><br />Explore 
          how every historical time period since 1928 compares to each other and differs among portfolios of assets. Each line
          represents the <strong>performance of $10,000</strong> over every possible time period
          of <strong>a given length.</strong>
        </h3>

     

        <Chart
          years={this.state.yrs}
          sa={this.state.startingAmount}
          xy={this.state.xy}
          realData={masterFunction(
            this.state.asset,
            this.state.startingAmount,
            this.state.yrs
          )}
          lineHover={this.lineHoverMethod}
        />
        <div />

            <Narrative
          years={this.state.yrs}
          asset={this.state.asset}
          realData={masterFunction(
            this.state.asset,
            this.state.startingAmount,
            this.state.yrs
          )}
        />
        <Picker
          handleChange={this.handleStateChange}
          asset={this.state.asset}
          yrs={this.state.yrs}
          realData={masterFunction(
            this.state.asset,
            this.state.startingAmount,
            this.state.yrs
          )}
        />

       


        <div className="center footer">
          A project by Ben Matheson.
  Historical market data is from Federal Reserve database in St. Louis (FRED) via NYU professor Aswath Damodaran. 1928 to 2017. Stocks represent ths S&P 500 including dividends. Bonds are represented by 10-year treasury bonds. Cash are three-month U.S. treasury bill. Assets are compounded annually. 
        </div>


      </div>
    );
  }
}
