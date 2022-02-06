// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { start } = require("repl");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  { name: "description", type: "input", message: "Describe your project." },
  {
    name: "technologyOne",
    type: "input",
    message:
      "Which technologies did you use to build this project (Please enter one only. You will have the opportunity to add more technologies)?",
  },
  {
    name: "technologyTwo",
    type: "input",
    message:
      "Which technologies did you use to build this project (Please enter one only. You will have the opportunity to add more technologies)?",
  },
  {
    name: "technologyThree",
    type: "input",
    message:
      "Which technologies did you use to build this project (Please enter one only. You will have the opportunity to add more technologies)?",
  },
  {
    name: "technologyFour",
    type: "input",
    message:
      "Which technologies did you use to build this project (Please enter one only)?",
  },
  {name: "installation", type: "input", message: "How can the user install and run this project?"},
  {name: "usage", type: "input", message: "Describe the functionality of the project."},
  {
    name: "repository",
    type: "input",
    message: "Please enter a link to your project repository",
  },
  {
    name: "developer",
    type: "input",
    message: "Please enter the developer's full name.",
  },
  {
    name: "contact",
    type: "input",
    message: "Please enter your contact email",
  },
  {
    name: "license",
    type: "list",
    message: "Please select a license for your project",
    choices: ["MIT", "Apache License 2.0", "GNU General Public License v3.0", "none"],
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error
      ? console.error(error)
      : console.log("Success! Your file was created.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    writeToFile("./dist/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
