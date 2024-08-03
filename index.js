// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [
//     {
//       type: 'input',
//       name: 'title',
//       message: 'What is the title of your project?'
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Write a short description of your project:'
//     },
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'What are the installation instructions?'
//     },
//     {
//       type: 'input',
//       name: 'usage',
//       message: 'Provide usage instructions:'
//     },
//     {
//       type: 'input',
//       name: 'contributing',
//       message: 'What are the guidelines for contributing?'
//     },
//     {
//       type: 'input',
//       name: 'tests',
//       message: 'Provide test instructions:'
//     },
//     {
//       type: 'list',
//       name: 'license',
//       message: 'Select a license for your project:',
//       choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
//     }
//   ];

// // TODO: Create a function to write README file
// const fs = require('fs');

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//     } else {
//       console.log('README file has been generated!');
//     }
//   });
// }

// // TODO: Create a function to initialize app
// const inquirer = require('inquirer');
// const generateMarkdown = require('./generateMarkdown'); // Adjust the path as necessary

// function init() {
//   inquirer.prompt(questions)
//     .then((answers) => {
//       const markdown = generateMarkdown(answers);
//       writeToFile('README.md', markdown);
//     })
//     .catch((error) => {
//       console.error('Error initializing app:', error);
//     });
// }

// // Function call to initialize app
// init();

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
const generateMarkdown = require('./utils/generateMarkdown'); // Adjust the path as necessary

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('README file has been generated!');
    }
  });
}

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