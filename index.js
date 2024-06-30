#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.underline("\nQuiz Compition\n"));
const question = await inquirer.prompt([
    {
        name: "answer1",
        type: "list",
        message: "Extension of TypeScript is?",
        choices: [".as", ".ts", ".js"],
    },
    {
        name: "answer2",
        type: "list",
        message: "Which operator is commonnly used for string concatenation in typescript?",
        choices: ["+", "-", "++"],
    },
    {
        name: "answer3",
        type: "list",
        message: "What is the purpose of interfaces in TypeScript?",
        choices: ["To define the behavior of classes", "To declare variable types", "To define the structure of objects"],
    },
    {
        name: "answer4",
        type: "list",
        message: "What does TypeScript compile to?",
        choices: ["Assembly language", "Plain JavaScript", "Machine code"],
    },
    {
        name: "answer5",
        type: "list",
        message: "Which keyword is used to define a function in TypeScript?",
        choices: ["func", "def", "function"],
    }
]);
let number = 0;
if (question.answer1 === ".ts") {
    console.log(chalk.greenBright("Correcr Answer"));
    number++;
}
else {
    console.log(chalk.red("Wrong answer"));
}
if (question.answer2 === "+") {
    console.log(chalk.greenBright("Correcr Answer"));
    number++;
}
else {
    console.log(chalk.red("Wrong answer"));
}
if (question.answer3 === "To define the structure of objects") {
    console.log(chalk.greenBright("Correcr Answer"));
    number++;
}
else {
    console.log(chalk.red("Wrong answer"));
}
if (question.answer4 === "Plain JavaScript") {
    console.log(chalk.greenBright("Correcr Answer"));
    number++;
}
else {
    console.log(chalk.red("Wrong answer"));
}
if (question.answer5 === "function") {
    console.log(chalk.greenBright("Correcr Answer"));
    number++;
}
else {
    console.log(chalk.red("Wrong answer"));
}
;
console.log(chalk.yellow(`Your score is ${number} out of 5`));
