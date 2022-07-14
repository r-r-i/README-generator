// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

fs.readFile('../README.md', 'utf8', (error,data) => 
error ? console.log(error) : console.log(data))

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Add a description to your project",
    "Add Installation Instructions for your project",
    "Add usage information for your project",
    "Add contribution guidelines for your project",
    "Add testing instructions for your project",
    "What license would you like for your Application?",
    "What is your GITHUB username?",
    "What is your email address?",
];

// TODO: Create a function to initialize app
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributions',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testing',
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
        
    ])

}


// TODO: Create a function to write README file

const init = () => {
    promptUser()
    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully created README!'))
    .catch((err) => console.error(err));
};
// Function call to initialize app


init();