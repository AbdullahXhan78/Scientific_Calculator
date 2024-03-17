import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "num1", },
    { message: "Enter second number", type: "number", name: "num2", },
    {
        message: "Select an operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addtion", "Subtraction", "Multiplication", "Division", "Modulus", "Square", "Cube", "Square Root", "Cube Root", "Sin", "Cosine", "tangent", "log",],
    }
]);
console.log(answers);
if (answers.operator == "Addtion") {
    let a = answers.num1 + answers.num2;
    console.log("After performing addtion your answer is: ", a);
}
else if (answers.operator == "Subtraction") {
    let a = answers.num1 - answers.num2;
    console.log("After performing subtraction your answer is: ", a);
}
else if (answers.operator == "Multiplication") {
    let a = answers.num1 * answers.num2;
    console.log("After performing multiplication your answer is: ", a);
}
else if (answers.operator == "Division") {
    let a = answers.num1 / answers.num2;
    console.log("After performin division your answer is: ", a);
}
else if (answers.operator == "Modulus") {
    let a = answers.num1 % answers.num2;
    console.log("After performing modulus operation your answer is: ", a);
}
else if (answers.operator == "Square") {
    let a = answers.num1 * answers.num1;
    console.log("After performing square operation your answer is: ", a);
}
else if (answers.operator == "Cube") {
    let a = answers.num1 * answers.num1 * answers.num1;
    console.log("After performing cube operation your answer is: ", a);
}
else if (answers.operator == "Square Root") {
    let a = Math.sqrt(answers.num1);
    console.log("After performing square root your answer is: ", a);
}
else if (answers.operator == "Cube Root") {
    let a = Math.cbrt(answers.num1);
    console.log("After performing cube root your answer is: ", a);
}
else if (answers.operator == "Sin") {
    let angleInDegrees = parseFloat(answers.num1);
    let angleInRadians = angleInDegrees * (Math.PI / 180);
    console.log("After performing sin your answer is: ", Math.sin(angleInRadians));
}
else if (answers.operator == "Cosine") {
    let angleInDegrees = parseFloat(answers.num1);
    let angleInRadians = angleInDegrees * (Math.PI / 180);
    console.log("After performing cosine your asnwer is: ", Math.cos(angleInRadians));
}
else if (answers.operator == "tangent") {
    let angleInDegrees = parseFloat(answers.num1);
    let angleInRadians = angleInDegrees * (Math.PI / 180);
    console.log(Math.tan(angleInRadians));
}
else if (answers.operator == "log") {
    console.log("After performing log your answer is: ", Math.log(answers.num1));
}
else {
    console.log("Enter valid operator!");
}
