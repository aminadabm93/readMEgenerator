const inquirer = require("inquirer");
const fs = require("fs");
var create = require("./generateMarkdown");    

//this object holds all our questions
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
    choices: ["apache","creative common","eclipse"]
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

//write to file once we get string literal from generateMArkdown.js
fs.writeFile("README.md",f,function(err){
    if(err){throw(err);}
    console.log("success");
});
}

// function call to initialize program
init();
