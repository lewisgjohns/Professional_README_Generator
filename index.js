// This file contains the code to prompt the user with questions and generate a README file based on the user's responses.
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the guidelines for contributing?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); 

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('README file has been generated!');
    }
  });
}

// Function to prompt user with questions and generate README file
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('./utils/README.md', markdown);
    })
    .catch((error) => {
      console.error('Error initializing app:', error);
    });
}

init();