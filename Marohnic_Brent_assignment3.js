// Name: Brent Marohnic
// Class: Scalable Data Infrastructures
// Term: 1206
// Title: Assignment 3

// JavaScript Document

// Pull in JSON data from Marohnic_Brent_JSON3.js


var retrieveMyCars = function (myRetrievedCars) {
	var myCarsArray = [];
	for (var i = 0, j = myRetrievedCars.cars.length; i < j; i++) {
		myCarsArray.push(myRetrievedCars.cars[i]);
		console.log("vin: " + myCarsArray[i].vin + ", make: " + myCarsArray[i].make + ", model: " + myCarsArray[i].model +
			", year: " + myCarsArray[i].year + ", tirePSI: " + myCarsArray[i].tirePSI + ", oil: " + myCarsArray[i].oil);
	};
};

retrieveMyCars(myCars);


// Create Tire Constructor

var smartTires = function () {
	var tires = ["frontLeft", "frontRight", "backLeft", "backRight"],
		tirePressure = [39, 29, 32, 35]
	;
	// Create function to parse the tire names.
	var parseTireNames = function (whichTire) {
		var firstPart = "",
			lastPart = ""
		;
			
		if (whichTire.substring(0,1) === "f") {
			firstPart = whichTire.substring(0, 5);	// Extracts from indexA to one less than indexB.
			lastPart = whichTire.substring(5);		// Extracts from indexA to the end of the string.
		} else {
			firstPart = whichTire.substring(0, 4);	// Extracts from indexA to one less than indexB.
			lastPart = whichTire.substring(4);		// Extracts from indexA to the end of the string.
			
		};	// Close the if statement.
		
		lastPart = lastPart.toLowerCase();			// The first character of lastPart is upper case due to how the variable name is
													// written (ex: backLeft or frontRight). Convert the entire string to lower case in
													// order to make the console log sentences look uniform.
		return firstPart + " " + lastPart;
	};
	
	var getTirePressure = function (whichTire) {
		// Perform some error handling first
		var stayOrGo = tireNameErrorHandler(whichTire);
		if (!stayOrGo) {return};	// End execution if an invalid entry was made for whichTire.
		// End error handling section
		
		// Call the parseTireNames function to separate the tire names and put the two words into proper case.
		var tireName = parseTireNames(whichTire);
		
		console.log("The " + tireName + " tire has ", tirePressure[tires.indexOf(whichTire)] + " psi.");
	};	// Close getTirePressure accessor.


	// Create an error handler function that can be used in both the set and get functions.
	var tireNameErrorHandler = function (whichTire) {
		var foundMatch = false;						// Initialize the flag to false.
		
		for each (var tireName in tires) {			// Cycle thru the tire names looking for a match.
			if (whichTire === tireName) {
				foundMatch = true;					// Set flag so that we know a match was found.
			};
		};
		
		if (!foundMatch) {
			console.log("Please enter a valid tire name from the following list: " + tires);	
		};
		return foundMatch;
	};	// Close tireNameErrorHandler
	
	// Create an error handler function to determine that a valid number was entered.
	var psiErrorHandler = function (addThisMuchPSI) {
		var badPSI = isNaN(addThisMuchPSI);			// See if the user entered a valid number
		
		if (badPSI) {
			console.log("Please enter a valid number for the amount of psi to add or remove");	
		};
		return badPSI;
	};	// Close psiErrorHandler
	
	
	var setTirePressure = function (whichTire, addThisMuchPSI) {
		// Perform some error handling first
		var stayOrGo = tireNameErrorHandler(whichTire);
		if (!stayOrGo) {return};	// End execution if an invalid entry was made for whichTire.
		var stayOrGo = psiErrorHandler(addThisMuchPSI);	// Reuse stayOrGO because we don't care if it's overwritten if it makes it
														// this far.			
		if (stayOrGo) {return};		// End execution if an invalid number was entered for addThisMuchPSI.
		// End error handling section
		
		// Call the parseTireNames function to separate the tire names and put the two words into proper case.
		var tireName = parseTireNames(whichTire);
		
		var	currentPSI = tirePressure[tires.indexOf(whichTire)],
			tempPSI = currentPSI,
			correctAmount = (currentPSI - 32) * -1,
			correctAmountAbs = Math.abs(correctAmount),
			addOrRemove = "",
			initialLoop = ""
		;
		
		if (correctAmount < 0) {
			addOrRemove = " psi will be removed from the " + tireName + " tire at this time.";
			initialLoop = currentPSI - 1;
		} else if (correctAmount > 0) {
			addOrRemove = " psi will be added to the " + tireName + " tire at this time.";
			initialLoop = currentPSI + 1;
		} else {
			console.log("PSI is already set to specification for the " + tireName + " tire. No action will be taken at this time.");
			return; // Use return to prevent remaining code from executing if psi requires no modification.
		};
		
		if (addThisMuchPSI === correctAmount) {
			console.log("You are a car care aficionado. " + correctAmountAbs + addOrRemove);
		} else {
			console.log("You do not appear to know what you're doing. I'll take over from here. " + correctAmountAbs + addOrRemove);
		};
		
		while (currentPSI !== 32) {
			var psiDifference = Math.abs(currentPSI - 32)
			;
			
			if (tempPSI === currentPSI) {
				console.log("	Commence with tire inflation.");
			} else if ( currentPSI === initialLoop) {
				console.log("	The " + tireName + " tire is 1 pound closer to spot psi. Only " + psiDifference + " psi to go.");
			} else {
				console.log("	The " + tireName + " tire is another pound closer to spot psi. Only " + psiDifference + " psi to go.");
			};
			if (currentPSI > 32) {
				currentPSI--;
			} else {
				currentPSI++;
			};
		};
		tirePressure[tires.indexOf(whichTire)] += correctAmount;
	};	// Close the setTirePressure mutator.
	
	return {	// Return object containing only accessor and mutator functions.
		"getTirePressure": getTirePressure,
		"setTirePressure": setTirePressure
	
	};
};

var myTires = smartTires();

myTires.setTirePressure("middleTire", 5);

myTires.getTirePressure("frontLeft");
myTires.getTirePressure("frontRight");
myTires.getTirePressure("backLeft");
myTires.getTirePressure("backRight");

myTires.setTirePressure("frontLeft", -7);
myTires.setTirePressure("frontRight", 3.5);
myTires.setTirePressure("backLeft", 0);
myTires.setTirePressure("backRight", -3);

myTires.getTirePressure("frontLeft");
myTires.getTirePressure("frontRight");
myTires.getTirePressure("backLeft");
myTires.getTirePressure("backRight");

myTires.getTirePressure("middleTire");

