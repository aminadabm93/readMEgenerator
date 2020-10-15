// array of questions for user
// Description
// TOC
// installation instructions 
// usage 
// license 
// contributing 
// tests 
// questions 

//choose a license from list of options (checkbox?)
//then a badge is added near the top of the read.me
//a notice is added to the section "license" that explains which 
//license the application is covered under 


//enter github username 
// then it is added to the "questions" section of read.me 
// 

//enter email and then added to question section
// w/ instructions on how to reach me

//when click on links in toc then taken to that section of read.me

const inquirer = require("inquirer");
const fs = require("fs");
var create = require("./generateMarkdown");    

var licenses = {
    "apache":"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "creative common":"[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by/4.0/)",
    "eclipse": "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
};

console.log(licenses["creative common"]);

var questions = [{
    message:"What should the title be?",
    name: "title",
    type:"input"
},{
    message:"Give a description.",
    name:"description",
    type:"input"
},{
    message:"Give some installation instructions.",
    name:"installation",
    type:"input"
},{
    message:"Give some usage instructions.",
    name:"usage",
    type:"input"
},{
    message:"Select a type of license you'd like",
    name:"license",
    type:"list",
    choices: licenses
},{
    message:"Give contributing instructions",
    name:"contributing",
    type:"input"
},{
    message:"Give test instructions ",
    name:"test",
    type:"input"
},{
    message:"Please enter your GitHub username. ",
    name:"gitHub",
    type:"input"
},{
    message:"Please enter your email. ",
    name:"email",
    type:"input"
},{
    message:"Please enter instructions on how to reach you. ",
    name:"communicate",
    type:"input"
}];


// function to initialize program
async function init() {
//start reading from user. 

//going to ask questions here

var responses = await inquirer.prompt(questions);
var f = create.generateMarkdown(responses);
fs.writeFile("readmeSamplel.md",f,function(err){
    if(err){throw(err);}
    console.log("success");
});
//save answers to document 

}

// function call to initialize program
init();
