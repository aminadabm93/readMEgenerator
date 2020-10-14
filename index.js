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

var questions = [{
    message:"What should the title be?",
    name: "title",
    type:"input"
},{
    message:"Give a description.",
    name:"description",
    type:"input"
},{
    message:"Create a table of contents seperated by a comma.",
    name:"toc",
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
    choices: ["choice 1","choice 2","choice 3"]
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
}];


// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
async function init() {
//start reading from user. 

//going to ask questions here

var responses = await inquirer.prompt(questions);
console.log(responses)

// for(let i=0; i<questions.length;i++){
//     const {questions[i].prompt.name} = await inquirer.prompt[questions[i]];
// }
}

// function call to initialize program
init();
