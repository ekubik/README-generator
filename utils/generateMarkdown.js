// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return "*[License](#license)";
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
*
*
 ${renderLicenseLink(data.license)}

## Technologies:
- ${data.technologyOne}
- ${data.technologyTwo}
- ${data.technologyThree}
- ${data.technologyFour}

${renderLicenseSection(data.license)}

##  Link:
The project can be accessed at [${data.repository}](${data.repository})


## Contact Details:
This project was developed by ${data.developer}. Email ${data.contact} to get in touch.


`;
}

module.exports = generateMarkdown;
