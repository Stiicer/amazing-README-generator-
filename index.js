const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./generateMarkdown.js");




//prompts the user with questions 
const questions = [{
    type: 'input',
    name:'Title',
    message: "What is the title of your README"
},
{
    type:'input',
    name:'Description',
    message:"What is the description of your project"

},
{
    type:'input',
    name:'Usage',
    message:"What is the usage of your project"

},
{
    type:'list',
    name:'License',
    choices:['Apache 2.0','IBM Public License Version 1.0','The MIT License','Mozilla Public License 2.0','WTFPL'],
    message:"Please select a license"

},
{
    type:'input',
    name:'Contributions',
    message:"Who contributed to your project"

},
{
    type:'input',
    name:'Tests',
    message:"Enter the test for your project"

},
{
    type:'input',
    name:'Questions',
    message:"What is your contact info"

}
];

//will write a new file
function writeToFile(fileName, data) {
    fs.writeToFile("README.md", data, err => { 
    if(err){
return console.log(err);
}
console.log("You have successfully made a great README file!");
  
});
}  

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions)
    .then(userInput => {
        writeToFile("README.md", markdown.generateMarkdown(userInput))
    });


}

// Function call to initialize app
init();
