// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  { name: "description", type: "input", message: "Describe your project." },
  { name: "technologyOne", type: "input", message: "Which technologies did you use to build this project (Please enter one only. You will have the opportunity to add more technologies)?"},
  { name: "technologyTwo", type: "input", message: "Which technologies did you use to build this project (Please enter one only. You will have the opportunity to add more technologies)?"},
  { name: "technologyThree", type: "input", message: "Which technologies did you use to build this project (Please enter one only. You will have the opportunity to add more technologies)?"},
  { name: "technologyFour", type: "input", message: "Which technologies did you use to build this project (Please enter one only)?"},
  {name: "repository", type: "input", message: "Please enter a link to your project reposistory"}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        error ? console.error(error): console.log("Success! Your file was created.")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers);
        writeToFile("./dist/README.md", generateMarkdown(answers))
    })

}

// Function call to initialize app
init();
