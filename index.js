// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Project Name?",
        name: "name",
        type: "input"   
    },
    {
        message: "What is the purpose of the project?",
        name: "purpose",
        type: "input"   
    },
    {
        message: "What License is this associated with?",
        name: "license",
        type: "list",
        choices: ["MIT", "Eclipse"]   
    },
    {
        message: "What is your project URL?",
        name: "url",
        type: "input"   
    },
    {
        message: "Who contributed to the project?",
        name: "contributed",
        type: "input"   
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log("file created")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)

        let licenseBadge = ''

        if(answers.license == "MIT") {
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } 
        else(answers.license == "Eclipse") 
            licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        

        const template = `# The title of my project is ${answers.name}
 
## Description

The purpose of this project is ${answers.purpose}

## License

The project was built with ${licenseBadge} 


The URL for the project is ${answers.url}

${answers.contributed} contributed to this project`

        console.log(template)
        writeToFile("README.md", template)
    })
}

// Function call to initialize app
init();
