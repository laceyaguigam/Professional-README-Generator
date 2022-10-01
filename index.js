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
        message: "What is the purpose?",
        name: "purpose",
        type: "input"   
    },
    {
        message: "What was your project built with?",
        name: "language",
        type: "input"   
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

        const template = `There was once a dog, who was very dramatic. this dog was feeling
${answers.name.purpose.languge.url.contributions}
        
they were feeling like this because it was ${answers.weather}`

        console.log(template)
        writeToFile("story.txt", template)
    })
}

// Function call to initialize app
init();




















WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


WHEN I enter my project title
THEN this is displayed as the title of the README


WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README