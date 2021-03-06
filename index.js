const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

let questions = [
    {
        type: "input",
        name: "username",
        message: "GitHub Username:",
      },
      {
        type: "input",
        name: "repoName",
        message: "Repository Name:",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Project Name?",
      },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe usage.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license.",
    choices: [
      "MIT License",
      "Apache License",
      "GPL License",
      "Public Domain (Unlicensed)",
    ],
  },
  {
    type: "input",
    name: "contributions",
    message: "What are rules for contributing?",
  },
  {
    type: "input",
    name: "tests",
    message: "Run tests here.",
  },
  {
    type: "input",
    name: "picture",
    message: "Enter your gitHub profile picture.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your gitHub email address.",
  },
  {
    type: "input",
    name: "toc",
    message: "List your table of contents, separated by commas.",
  },
];
console.clear();

inquirer.prompt(questions).then((response) => {
    `![GitHub top language](https://img.shields.io/github/languages/top/${response.username}/${response.repoName})`;

  fs.appendFileSync("README.md", "# " + response.name + "\n", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });

  fs.appendFileSync(
    "README.md",
    "## Description" + "\n" + response.description + "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync(
    "README.md",
    "## Table of Contents" +
      "\n" +
      "- " +
      response.toc.split(", ").join("\n" + "- ") +
      "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync(
    "README.md",
    "## Installation Instructions" + "\n" + response.installation + "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync(
    "README.md",
    "## Usage" + "\n" + response.usage + "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync(
    "README.md",
    "## License" + "\n" + response.license + "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync(
    "README.md",
    "## How to Contribute" + "\n" + response.contributing + "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync(
    "README.md",
    "## How to Run Tests" + "\n" + response.tests + "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync(
    "README.md",
    "## Contact Info" + "\n" + "![alt text](" + response.picture + ")" + "\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    }
  );

  fs.appendFileSync("README.md", "\n" + response.email + "\n", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
});
