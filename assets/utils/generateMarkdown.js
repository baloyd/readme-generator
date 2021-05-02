// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.projectName} 
  
  ${renderLicenseBadge(license)}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
 
  ## Installation
  ${data.dependencies}

  ## Usage
  ${data.repoUse}

  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
 

  ## Contributing
  ${data.repoContribute}

  ## Tests
  ${data.tests}

  ## Questions

  Find me on GitHub: [${data.userName}](https://github.com/${data.userName})
 
  Contact: ${data.emailAddress}
  

`;
}

module.exports = generateMarkdown;
