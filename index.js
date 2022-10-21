// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "name",
        type: "input"   
    },
    {
        message: "Please give a description of project?",
        name: "purpose",
        type: "input"   
    },
    {
        message: "What License(s) is the project associated with?",
        name: "license",
        type: "list",
        choices: ["MIT", "Eclipse"]   
    },
    {
        message: "Install instructions?",
        name: "instructions",
        type: "input"   
    },
    {
        message: "What is your project's Github URL?",
        name: "url",
        type: "input"   
    },
    {
        message: "How is this repo to be used?",
        name: "repo",
        type: "input"   
    },
    {
        message: "Who contributed to the project?",
        name: "contributed",
        type: "input"   
    },
    {
        message: "What is your project URL and Github name?",
        name: "url",
        type: "input"   
    },
    {
        message: "What is your email address?",
        name: "email",
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
        

        const template = `# ${answers.name}
 
## Description

 ${answers.purpose}

##Table of Contents

- Usage
- Installation
- Test
- Contributions
- Questions

## Usage

## Installation

##Test 

## Contribution

## Questions 

For questions you may reach me at ${url} and at ${email}.


## License

The project was built with ${licenseBadge} 

## Installation

${instructions}

The URL for the project is ${answers.url}

${answers.contributed} contributed to this project`

        console.log(template)
        writeToFile("README.md", template)
    })
}

// Function call to initialize app
init();







The generated Readme is missing a table of contents, a badge, and an email. 
It also does not include all the required sections.

The Readme does not include a link to the walkthrough video. 
Commit often using descriptive messages of your code. 
Make sure that node_modules is not included in your repo. 




WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with 
 Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions



WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests








