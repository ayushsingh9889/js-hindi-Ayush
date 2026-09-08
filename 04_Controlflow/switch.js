/*
 switch statement is used to perform different actions based on different conditions. It is a control flow statement that allows you to evaluate an expression and execute code blocks based on the matching case.
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

// BREAK: The break statement is used to exit the switch statement once a matching case is found and executed. If you omit the break statement, the code will continue to execute the subsequent cases until it encounters a break or reaches the end of the switch statement. This behavior is known as "fall-through."
const month = "MARCH";

switch (month) {
    case "JANUARY": console.log("January");
        break;
    case "FEBRUARY": console.log("February");
        break;
        
    case "MARCH": console.log("March");
        break;
    
    case "APRIL": console.log("April");
        break;

    default: console.log("Invalid month");
}
