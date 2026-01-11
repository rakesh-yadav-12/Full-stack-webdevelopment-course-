/*Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {

      num1 = Number(num1);
      num2 = Number(num2);

      let random = Math.random();

      let faultyOperations = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/": "**"
      };

      let result;

      if (random < 0.1) {
        console.log("⚠️ Faulty calculation activated!");
        result = eval(`${num1} ${faultyOperations[operator]} ${num2}`);
      } else {
        console.log("✅ Correct calculation");
        result = eval(`${num1} ${operator} ${num2}`);
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});
