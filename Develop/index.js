// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'project title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'installation instructions',
            name: 'install',
        },
        {
            type: 'input',
            message: 'usage information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'contribution guidelines',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'test instructions',
            name: 'testing',
        },
        // Need to create a license choice option
        {
            type: 'input',
            message: 'github',
            name: 'github',
        },
        {
            type: 'input',
            message: 'email',
            name: 'email',
        },
        
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
