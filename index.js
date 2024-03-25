#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let guessingNumber = await inquirer.prompt([
    {
        message: "Enter your Number Between 1-10:",
        type: "number",
        name: "YourGuess",
    },
]);
// conditional test
if (guessingNumber.YourGuess === randomNumber) {
    console.log("congratulations! You Guess the Right...........");
}
else {
    console.log("Oops! you guess Wrong Number........");
}
