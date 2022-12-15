const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your Project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief decription of this project.",
      name: "description",
    },
    {
      type: "input",
      message: "What installation is needed for this project?",
      name: "install",
    },
    {
      type: "input",
      message: "Write a brief description on how to use this project.",
      name: "usage",
    },
    {
      type: "input",
      message: "Write all Contributors if any.",
      name: "contributors",
    },
    { type: "confirm", message: "any tests?", name: "test" },
    {
      type: "list",
      message: "choose a License",
      choices: ["MIT", "Apache_2.0", "ISC", "IPL_1.0"],
      name: "license",
    },
    {
      type: "input",
      message: "What is your Github profile link?",
      name: "github",
    },
    { type: "input", message: "What is your email address?", name: "email" },
  ])
  .then((data) => {
    const answers = createfile(data);

    fs.writeFile("README.md", answers, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });

function createfile(obj) {
  var readme = `[![License: MIT](https://img.shields.io/badge/License-${obj.license}-blue.svg)]

# ${obj.title}

## Description
${obj.description}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#Tests)
- [Questions](#questions)

## Installation
${obj.install}

## Usage
${obj.usage}

## Contributors
${obj.contributors}

## License
${obj.license}

## Tests
${obj.test}

## Questions

- MY Github can be found at: ${obj.github}
- Reach out to me by email for any questions at: ${obj.email}`;
  return readme;
}
