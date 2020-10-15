//list of licenses with link
var licenses = {
  "apache":"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "creative common":"[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by/4.0/)",
  "eclipse": "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
};
module.exports = {generateMarkdown: function (data){
  //saving all user answers
  const {title, description, installation, usage, license, contributing, test, gitHub,email,communicate} = data;
  
  return `#${title}
  
  #Description: ${description}
  ${licenses[license]}
  
  #Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Test](#)
  6. [Questions](#)
  
  #Installation: ${installation}

  #Usage: ${usage}

  #License: This software is using the ${license} license. 

  #Contributing: ${contributing}

  #Test: ${test}

  #Questions: ${communicate};
  [github](https://github.com/${gitHub})
  [email](${email}) `
  
  //questions section has link to github and linked in 
}};
