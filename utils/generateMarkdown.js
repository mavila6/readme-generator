module.exports = response => {
return `
# ${response.title}

## Description

![License](https://img.shields.io/badge/Lincense-${response.license}-blue.svg "License Badge")

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


### Installation

To install necessary dependencies, run the following code in the console:

\`\`\`${response.installation}\`\`\`

### Usage

${response.usage}

### License

Click the following link for more information about the license:

[License Info](https://opensource.org/licenses/${response.license})

### Contributing

${response.contribute}

### Tests

To test, run the following code in the console:

\`\`\`${response.test}\`\`\`

### Questions

If you have any questions feel free to take a look at my [GitHub](https://github.com/${response.username}) or contact me at ${response.email}

![Picture](https://github.com/${response.github}.png?size=100)

&copy; ${new Date().getFullYear()} ${response.author}

`
};