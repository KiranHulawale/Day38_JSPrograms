var number = Math.floor(Math.random()*10)%7;

switch(number) {
    case 0:
        console.log("Day is: Sunday")
    break;
    
    case 1:
        console.log("Day is: Monday")
    break;
    
    case 2:
        console.log("Day is: Tuesday")
    break;
    
    case 3:
        console.log("Day is: Wednesday")
    break;

    case 4:
        console.log("Day is: Thrusday")
    break;

    case 5:
        console.log("Day is: Friday")
    break;

    case 6:
        console.log("Day is: Saturday")
    break;

    default:
        console.log("INVALID!!!")
        break;
}