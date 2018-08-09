// function compound(startYear, startAmount, percent, duration) {
// 	const futureValue = (startAmount * (1 + percent)) ^ duration;
// 	return futureValue;
// }

import { returns } from "./data/return_data.js";

// function basicCompound(startAmount, asset, duration) {
// 	//divid

// 	//run fucntion three times, each for asset classes if not 0

// 	const futureValue = (startAmount * (1 + percent)) ^ duration;
// 	console.log(futureValue);
// 	return futureValue;
// }

function devArrays(years) {
	const startYear = 1928;
	const endYear = 2017 - (years + 1); //last year to slice array
	const historicData = returns.filter(
		d => d.year >= startYear && d.year <= 2017
	);

	const historicArray = historicData.map(
		(d, i) => historicData.slice(i, i + years) //end at end
	); //gives array of returhs
	// console.log(historicArray);
	// console.log("historicArray");

	// console.log(years * -1);
	const negativeYears = years * -1 + 1;
	historicArray.splice(negativeYears);

	return historicArray;
}

function compound(historicArrays, amount, asset) {
	// console.log("this is what I'm passing");
	// console.log(historicArrays);

	const compoundedValues = historicArrays.map(function(d, i) {
		const retSequence = []; //the returned compounded values
		// retSequence.unshift(amount);

		d.forEach(function(j, i) {
			if (i === 0) {
				const firstYear = amount * (1 + j[asset]);
				// console.log("is this the rate" + j.sp500);

				retSequence.push(firstYear);
				// console.log(retSequence);
				// retSequence.unshift(amount); //fucked it up

				// console.log("first" + retSequence);
			} else {
				// console.log("theres something in there");
				const starting = retSequence[i - 1]; //fuck Mabye -1
				const currentYear = starting * (1 + j[asset]);
				retSequence.push(currentYear);

				// console.log("AFTER");
				// console.log(retSequence);

				// console.log(this.props.sa);
			}

			// retSequence.unshift(amount);
		});
		retSequence.unshift(amount);

		return retSequence;
	});

	return compoundedValues;
}

function masterFunction(allo, amt, yrs) {
	const historicOutput = devArrays(yrs); //outputs year arrays

	//simple asset allocatoin
	// console.log("FIRING");

	// console.log(historicOutput);
	// console.log("historicOutput");

	var alloSp500, alloTbill3, alloTbond30;

	function setAssetAllocation(allocation) {
		var stx = Math.floor(allocation) / 100;
		var bnds = (100 - allocation) / 2 / 100;
		var bls = (100 - allocation) / 2 / 100;

		console.log("stx        " + stx);
		console.log("nbds       " + bnds);
		console.log("billsx     " + bls);
		return {
			stocks: stx,
			bonds: bnds,
			bills: bls
		};
	}

	const alloOutput = setAssetAllocation(allo);

	const amtSp = amt * alloOutput.stocks;
	const amtTBond = amt * alloOutput.bonds;
	const amtTbill = amt * alloOutput.bills;

	//this works:

	// const amtSp = Math.floor(allo) > 50 ? 0.6 * amt : 0.4 * amt;
	// const amtTbill = Math.floor(allo) > 50 ? 0.2 * amt : 0.3 * amt;
	// const amtTBond = Math.floor(allo) > 50 ? 0.2 * amt : 0.3 * amt;

	// console.log("amtSP");
	// console.log(amtSp);

	const sp500Data = compound(historicOutput, amtSp, "sp500");
	const tbill3Data = compound(historicOutput, amtTbill, "tbill3");
	const tbond10Data = compound(historicOutput, amtTBond, "tbond10");

	// console.log("sp500Data**");
	// console.log(sp500Data);

	///need to add them p here

	const fullData = sp500Data.map(function(d, i) {
		return d.map(function(e, j) {
			return e + tbill3Data[i][j] + tbond10Data[i][j];
		});
	});

	return fullData;
}

function setAssetAllocationBar(allocation) {
	var stx = Math.floor(allocation) / 100;
	var bnds = (100 - allocation) / 2 / 100;
	var bls = (100 - allocation) / 2 / 100;

	console.log("stx        " + stx);
	console.log("nbds       " + bnds);
	console.log("billsx     " + bls);
	return {
		stocks: stx,
		bonds: bnds,
		bills: bls
	};
}

// console.log(masterFunction(100, 1000, 90));

// console.log("deArrays");
// const testDev = devArrays(43);

// const test = compound(testDev, 10000, "tbond10");

// console.log(testDev);
// console.log(test);
// console.table(test);
// console.log(JSON.stringify(testDev));
// console.log(test);
// console.table(devArrays(5));

// function reduceFun(arr, asset) {}

export { devArrays, compound, masterFunction, setAssetAllocationBar };
