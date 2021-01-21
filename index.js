// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  { 
    type: "input",
    name: "yourName",
    message: "What is your name?",
  },
  { 
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  { 
    type: "input",
    name: "description",
    message: "How would you describe your project?",
  },
  {
    type: "list",
    name: "licenses",
    message: "What type of licenses are required for your project?",
    choices: ["Driver's", "CDL", "Apache", "None"],
  },
  { 
    type: "input",
    name: "yourEmail",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "installation",
    message: "What command needs to be run to install dependencies?",
    default: "npm i",
  },

];


inquirer.prompt(questions).then(answers => {
  console.log(answers.name)
  console.log(answers.title)
  console.log(answers.description)
  console.log(answers.licenses)
  console.log(answers.yourEmail)
  console.log(answers.github)
  console.log(answers.installation)

  const generatedContent = generateMarkdown(answers);

  writeToFile('./output/README.md', generatedContent);

})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {};


// Function call to initialize app
init();
