//1ft = 12 in then 42 in = ? ft

let oneFeetInInch = 12;
let result = 42/oneFeetInInch;

console.log("42 inches in feets = " + result);

//Rectangular Plot of 60 feet x 40 feet in meters

let areaInFeet = 60 * 40;
let areaInMeter = areaInFeet/3.28084;

console.log("60 * 40 ft Area in meter : " + areaInMeter);

//Calculate area of 25 such plots in acres

console.log("Calculate Area of 25 such Plots");
var totalAreaInFeet = areaInFeet * 25;
console.log("Area of 25 Plot in feet: " + totalAreaInFeet + " ft");
var totalAreaInMeters = areaInMeter * 25;
console.log("Area of 25 Plot in meter square: " + totalAreaInMeters + " square meter");