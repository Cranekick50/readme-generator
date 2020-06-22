const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

let questions = [
    {
      type: "input",
      name: "badge",
      message: "Input badge code."
    },
    {
      type: "input",
      name: "name",
      message: "What is the project name?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project."
    },
    {
        type: "input",
        name: "toc",
        message: "List your table of contents, separated by commas."
      },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?"
    },
    {
      type: "input",
      name: "usage",
      message: "Describe usage."
    },
    {
      type: "checkbox",
      name: "license",
      message: "Choose a license.",
      choices: [
          "MIT License",
          "Apache License",
          "GPL License",
          "Public Domain (Unlicensed)"
      ]
    },
    {
        type: "input",
        name: "contributions",
        message: "What are rules for contributing?"
      },
      {
        type: "input",
        name: "tests",
        message: ""
      },
      {
        type: "input",
        name: "picture",
        message: "Enter your gitHub profile picture."
      },
      {
        type: "input",
        name: "email",
        message: "Enter your gitHub email address."
      },
  ]
console.clear();

inquirer
    .prompt(questions).then(response => {
    
    fs.appendFileSync("README.md", ('\n' + response.badge) + '\n', function(err) { 
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("# " + response.name) + '\n', function(err) { 
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function(err) { 
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- ' +response.toc.split(", ").
    join('\n' + '- ')) + '\n', function(err) { 
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("# " + '\n' + response.description) + '\n', function(err) { 
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("# " + '\n' + response.description) + '\n', function(err) { 
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    });
