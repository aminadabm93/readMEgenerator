// function to generate markdown for README
// function generateMarkdown(data) {
//   const {title, description, toc, installation, usage, license, contributing, test, gitHub,email} = data;
//   console.log(data);
//   console.log("The title of your read.me is"+ title);
  
//   return `# ${data.title}`;
// }

module.exports = {generateMarkdown: function (data){
  const {title, description, installation, usage, license, contributing, test, gitHub,email,communicate} = data;
  console.log(data);
  
  return `#${title}
  
  #Description: ${description}
  
  #Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Test](#)
  6. [Questions](#)
  
  #Installation: ${installation}
  #Usage: ${usage}
  #License: ${license}
  #Contributing: ${contributing}
  #Test: ${test}
  #Questions: [github](https://github.com/${gitHub})
  [email](${email}) 
  ${communicate}`;
  //questions section has link to github and linked in 
}};
