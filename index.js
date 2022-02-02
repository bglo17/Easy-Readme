// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ("./generateMarkdown");
const path = require ('path');

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'Title',
        message: 'Enter Project Title',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your project?',
    },  {
        type: 'input',
        name: 'Installation',
        message: 'What command will you run to install the dependencies?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How will the user use the Github Repo?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter Directions on how to contribute to the Github Repo',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How do we run Tests?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Which License should this have?',
        choices: ['afl-3.0', 'apache-2.0', 'cc', 'wtfpl','gpl','epl', 'ms-pl','mpl-2.0','none'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Github Username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerAnswers)=> {
        writeToFile('README.md', generateMarkdown({...inquirerAnswers}));
    });
};

// Function call to initialize app
init();
