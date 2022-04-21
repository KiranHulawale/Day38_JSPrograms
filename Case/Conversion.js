var readLine=require('readline-sync');
let result = 0;
let val = 0;

console.log("\n1. Feet to Inch \n2. Inch to Feet \n3. Feet to Meter \n4. Meter to Feet");

let userInput = readLine.questionInt("\nSelect any option : ");
let num = readLine.questionInt("\nEnter the value you want to convert : ");

switch (userInput) {
    case 1:
        val = 12; // 1 feet = 12 inches
        result = num * val;
        break;
    case 2:
        val = 12;
        result = num / val;
        break;
    case 3:
        val = 3.28084; // 1 meter = 3.28084 feet
        result = num / val;
        break;
    case 4:
        val = 3.28084;
        result = num * val;
        break;
    default:
        throw("\nInvalid Selection");
}
console.log("\nResult is " + result);

