//variables created to require nppm node modules and additional js page//
const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "author",
            message: "Please enter the name of the author. (Required)",
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Must enter a name.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username. (Required)",
            validate: githubInput => {
                if (githubInput) {
                return true;
                } else {
                console.log('Must enter a github username.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an email address. (Required)",
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('Must enter an email.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your project. (Required)",
            validate: titleInput => {
                if (titleInput) {
                return true;
                } else {
                console.log('Must enter a title.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a desription of the project. (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                console.log('Must enter a short description.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter the necessary command used to install dependencies. (Required)",
            validate: installationInput => {
                if (installationInput) {
                return true;
                } else {
                console.log('Must enter a value.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "Please enter the necessary command used to run tests. || [NONE] (Required)",
            validate: testInput => {
                if (testInput) {
                return true;
                } else {
                console.log('Must enter a value.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "What should the user know about using the repository? (Required)",
            validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                console.log('Must enter a short description.');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "contribute",
            message: "What should the user know about contributing to the repository? (Required)",
            validate: contributeInput => {
                if (contributeInput) {
                return true;
                } else {
                console.log('Must enter a short description.');
                return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "What license does your project have? (Required)",
            choices: ['MIT','GPL','APACHE','BSD','NONE'],
            validate: licenseList => {
                if (licenseList) {
                return true;
                } else {
                console.log('Must choose an option.');
                return false;
                }
            }
        }
    ]);
};