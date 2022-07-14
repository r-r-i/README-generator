// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'APACHE 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPL 3.0'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD 3'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else 
    return `This project has no license`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return 'This project is licensed under the MIT license. You can read their licensing guidelines [here](https://opensource.org/licenses/MIT).';
  } else if (license === 'APACHE 2.0'){
    return `This project is licensed under the APACHE 2.0 license. You can read their licensing guidelines [here](https://opensource.org/licenses/Apache-2.0).`;
  } else if (license === 'GPL 3.0'){
    return `This project is licensed under the GPL 3.0 license. You can read their licensing guidelines [here](https://www.gnu.org/licenses/gpl-3.0).`;
  } else if (license === 'BSD 3'){
    return `This project is licensed under the BSD 3 license. You can read their licensing guidelines [here](https://opensource.org/licenses/BSD-3-Clause).`;
  } else 
    return `This project has no license`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Contents
- [about](#about)
- [installation](#installation)
- [usage](#usage)
- [contributions](#contributions)
- [testing](#testing)
- [license](#license)
- [github](#github)
- [contact](#contact)

---

## about this project

${data.description}

## installation instructions

To install necessary dependencies, run the following command:

` + "```" + `
${data.install}
` + "```" + `

## usage information

${data.usage}

## contribution guidelines

${data.contributions}

## test instructions

` + "```" + `
${data.testing}
` + "```" + `

## licensing

${renderLicenseLink(data.license)}

## github

You can visit my github by following the link below.

[${data.github}](https://github.com/${data.github})

## contact

If you have any questions regarding this project, you can contact me through the email below.

${data.email}
`;
}

module.exports = generateMarkdown;

