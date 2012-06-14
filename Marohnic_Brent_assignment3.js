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
		if (addThisMuchPSI === 0 || (tirePressure[tire.indexOf(whichTire)] < 32 && addThisMuchPSI <= 0)) {
			console.log("You do not appear to know what your are doing. Check your calculations and try again later.");
			return;									
		};
		if (tirePressure[tire.indexOf(whichTire)] > 32 && addThisMuchPSI > 0) {
			addThisMuchPSI = tirePressure[tire.indexOf(whichTire)] - 32;				
			console.log("This tire has already exceeded max psi. " + addThisMuchPSI + " psi will be removed at this time.");
			addThisMuchPSI *= -1;					
			if (tirePressure[tire.indexOf(whichTire)] + addThisMuchPSI > 32) {
				var correctAmount = tirePressure[tire.indexOf(whichTire)] + addThisMuchPSI - 31;
				addThisMuchPSI = correctAmount;
				console.log("That amount will put the tire over the max PSI. I'll adjust the amount to " + correctAmount + " psi.");
			};
		};
		tirePressure[tire.indexOf(whichTire)] += addThisMuchPSI;
	
	};

	
};

var myTires = smartTires();