// Name: Brent Marohnic
// Class: Scalable Data Infrastructures
// Term: 1206
// Title: Assignment 3

// JavaScript Document

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
		
		// Call the parseTireNames function to separate the tire names and put the two words into proper case.
		var tireName = parseTireNames(whichTire);
		
		console.log("The " + tireName + " tire has ", tirePressure[tires.indexOf(whichTire)] + " psi.");
	};	// Close getTirePressure accessor.
	
/*	
var setTirePressure = function (whichTire, addThisMuchPSI) {
		if (addThisMuchPSI === 0 || (tirePressure[tires.indexOf(whichTire)] < 32 && addThisMuchPSI <= 0)) {
			console.log("You do not appear to know what your are doing. Check your calculations and try again later.");
			return;									// Use return statement to end processing at this point.
		};
		if (tirePressure[tires.indexOf(whichTire)] > 32 && addThisMuchPSI > 0) {
			addThisMuchPSI = tirePressure[tires.indexOf(whichTire)] - 32;				
			console.log("This tire has already exceeded max psi. " + addThisMuchPSI + " psi will be removed at this time.");
			addThisMuchPSI *= -1;					// Now that the console log has displayed how many psi will be removed, change the
													// amount to a negative so that the psi will be reduced by that amount later.
			if (tirePressure[tires.indexOf(whichTire)] + addThisMuchPSI > 32) {
				var correctAmount = tirePressure[tire.indexOf(whichTire)] + addThisMuchPSI - 31;
				addThisMuchPSI = correctAmount;
				console.log("That amount will put the tire over the max PSI. I'll adjust the amount to " + correctAmount + " psi.");
			};
		};
		tirePressure[tires.indexOf(whichTire)] += addThisMuchPSI;
	
	};	// Close setTirePressure mutator.
*/	

	
	var setTirePressure = function (whichTire, addThisMuchPSI) {
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
