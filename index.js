// TODO: Include packages needed for this application
const inquirer=require("./node_modules/inquirer");
// TODO: Create an array of questions for user input
 inquirer.prompt([{
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
    type:"input",
    name:"description",
    message:'Please write a short description of your project'
 },{
    type:"input",
    name:"license",
    message:'What kind of license should your project have?'
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
    }]).then((result)=>{
    console.log(result)
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
inquirer.writeToFile("README.md",)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
