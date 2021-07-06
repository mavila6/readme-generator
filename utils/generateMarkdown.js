module.exports = response => {
    return `
    # ${response.title}

    ## Description:
    
    ![License](https://img.shields.io/badge/Lincense-${response.license}-red.svg "License Badge")
    
    ${response.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    `
}