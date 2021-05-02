//Packages needed for the application
const inquirer=require("./node_modules/inquirer")
const fs=require("fs");
const generateMarkdown=require("./assets/utils/generateMarkdown")

//An array of questions for user input to populate the README.md
 questions=[
    {
    type:"input",
    name:"userName",
    message:'What is your Github username?',
    validate: function (data) {
       if (data.length < 1) {
          return console.log("A valid Github username is required.")
       }
    }
 },{
    type:"input",
    name:"emailAddress",
    message:'What is your email address?'
    
 },{
    type:"input",
    name:"projectName",
    message:"What is your project's name?",
    validate: function (data) {
       if (data.length < 1) {
          return console.log("A valid project title is required.")
       }
    }
 },{
    type:"input",
    name:"description",
    message:'Please write a short description of your project',
    validate: function (data) {
       if (data.length < 1) {
          return console.log("A valid project description is required.")
       }
    }
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

// A function to write README file
   fs.writeFile("README.md",data,error =>{
      if (error){
         return console.log(error);
      }
      console.log("README created successfully!")
   })



// A function to initialize app
function init() {
   
}

// Function call to initialize app
init();
