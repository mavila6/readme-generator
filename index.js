//variables created to require nppm node modules and additional js page//
const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "author",
        message: "Please enter the name of the author (Required)",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Must enter a name.');
            return false;
            }
        }
        } 
    ]);
};