// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
        type: "input"   
    },
    {
        message: "Please give a description of project?",
        name: "description",
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
        

        const template = `# ${answers.title}
 
## Description

 ${answers.description}

##Table of Contents

- Usage
- Installation
- Test
- Contributions
- Questions

## Usage

${answers.repo}

## Installation

${answers.installation}

The project was built with ${answers.licenseBadge} 


##Test 

The URL for the project is ${answers.url}


## Contribution Guidelines

${answers.contributed} contributed to this project`

## Questions 

For questions you may reach me at ${url} and at ${email}.



${instructions}

        console.log(template)
        writeToFile("README.md", template)
    })
}

// Function call to initialize app
init();







//The generated Readme is missing a table of contents, a badge, and an email. 
//It also does not include all the required sections.

//The Readme does not include a link to the walkthrough video. 
//Commit often using descriptive messages of your code. 
//Make sure that node_modules is not included in your repo. 


//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests








