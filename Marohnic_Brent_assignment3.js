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
	
	return {	// Return object containing mutator function.
		"setTirePressure": setTirePressure
	
	};
	
};

var myTires = smartTires();

myTires.setTirePressure("frontLeft", 7);