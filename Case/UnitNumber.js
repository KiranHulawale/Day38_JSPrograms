var max = 10000;
var number = Math.floor(Math.random() * max) + 1;
console.log(number)

switch(number) {
case 1:
    console.log("Units place is: One")
    break;

case 10:
    console.log("Units place is: Ten")
    break;

case 100:
    console.log("Units place is: Hundred")
    break;

case 1000:
    console.log("Units place is: Thousand")
    break;    

default:
    console.log("Invalid!!!")
    break;
}