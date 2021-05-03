// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license === "Apache"){
    return`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  }else if(data.license === "Mozilla"){
    return`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
  }else if (data.license === "Unlicense"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
  }else return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`
  
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === "Apache"){
    return`(https://opensource.org/licenses/Apache-2.0)`
  }else if(data.license === "Mozilla"){
    return`(https://opensource.org/licenses/MPL-2.0)`
  }else if (data.license === "Unlicense"){
    return `(http://unlicense.org/)`
  }else return `(https://opensource.org/licenses/IPL-1.0)`

  
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return`## License 
  This project is covered by the ${data.license} license.${renderLicenseBadge(data)}
  ${renderLicenseBadge(data)}
  ${renderLicenseLink(data)}`
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.projectName} 
  
  ${renderLicenseBadge(data)}


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

  ${renderLicenseSection(data)}
  

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
