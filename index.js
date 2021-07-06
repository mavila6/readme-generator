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
    ]);
};