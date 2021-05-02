//Packages needed for the application
const inquirer=require("./node_modules/inquirer")
const fs=require("fs");
const generateMarkdown=require("./assets/utils/generateMarkdown")

//An array of questions for user input to populate the README.md
 questions=[
    {
    type:"input",
    name:"userName",
    message:'What is your Github username?'
 },{
    type:"input",
    name:"emailAddress",
    message:'What is your email address?'
 },{
    type:"input",
    name:"projectName",
    message:"What is your project's name?"
 },{
    type:"checkbox",
    name:"description",
    message:'Please write a short description of your project'
 },{
    type:"list",
    name:"license",
    message:'What kind of license should your project have?',
    choices: ["Apache","Mozilla","Unlicense","IBM"]
 },{
    type:"input",
    name:"dependencies",
    message:'What command should be run to install dependencies?'
 },{
    type:"input",
    name:"tests",
    message:'What command should be run to run tests?'
 },{
    type:"input",
    name:"repoUse",
    message:'What does the user need to know about using the repo?'
 },{
    type:"input",
    name:"repoContribute",
    message:'What does the user need to know about contributing to the repo?'
    }
   ];
   inquirer.prompt(questions).then(data=>{
    console.log(data)
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
