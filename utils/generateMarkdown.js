function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.used}
  
  ## License
  ${data.licence}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, contact ${data.email}.
  GitHub: [${data.git}](https://github.com/${data.git})
  `;
  }

function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    return `[License](https://opensource.org/licenses/${license})`;
  }
  

  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
    return `This application is covered under the [${license}] license.`;
  }
  
  module.exports = generateMarkdown;