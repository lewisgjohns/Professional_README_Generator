// Function to return a license badge based on the license type
function renderLicenseBadge(license) {
  if (!license) return '';
  
  switch (license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![GPL 3.0 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    default:
      return '';
  }
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license=='None') return '';

  return "- [License](#license)";
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license=='None') return '';
  
  return `## License
  
This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for more details.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions, please feel free to reach out:

- [GitHub](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;