// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    switch(license) {
      case "MIT":
        return `![License](https://img.shields.io/badge/license-MIT-brightgreen)`;
        break;
        case "Apache License 2.0":
        return `![License](https://img.shields.io/badge/license-Apache-blue)`;
        break;
        case "GNU General Public License v3.0":
        return `![License](https://img.shields.io/badge/license-GPL-yellow)`;
        break;
  }
  return " ";
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return "* [License](#license)";
  }
  return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    The license used for this project is ${license}`;
  }
  return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents:

* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
 ${renderLicenseLink(data.license)}
 * [Link](#link)
 * [Contact](#contact-details)


## Technologies:
This project was built using:
- ${data.technologyOne}
- ${data.technologyTwo}
- ${data.technologyThree}
- ${data.technologyFour}


## Installation
${data.installation}


## Usage 
${data.usage}


${renderLicenseSection(data.license)}


##  Link:
The project can be accessed at [${data.repository}](${data.repository})


## Contact Details:
This project was developed by ${data.developer}. Email ${
    data.contact
  } to get in touch.


`;
}

module.exports = generateMarkdown;
