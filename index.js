
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
     {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message : 'Instructions for Installing Your Project:'
      },
      {
        type: 'input',
        name: 'used',
        message : 'How is your project supposed to be used?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the Test instructions?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices:[
            'MIT',
            'Apache 2.0',
            'GPL 3.0',
            'GPL 2.0'
        ]
      },
      {
        type: 'input',
        name: 'git',
        message: 'What is your GitHub account?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      },


];


function writeToFile(fileName, data) {
 // console.log("Data to write to file:", data);
    const readmeContent = generateMarkdown(data); 
    fs.writeFile(fileName, readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md successfully generated!');
      }
    });                               
} 

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      writeToFile('README.md', answers);
    })
    .catch((err) => {
      console.error(err);
    });
}

init();
