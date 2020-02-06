const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");

const employeeList = [];

const managerQuestions = [
    {
        message: "What is the manager's name?",
        name: "name"
    },

    {
        message: "What is the manager's id?",
        name: "id"
    },

    {
        message: "What is the manager's email?",
        name: "email"
    },

    {
        message: "What is the manager's office number?",
        name: "officeNumber"
    }
]

const internQuestions = [
    {
        message: "What is the intern's name?",
        name: "name"
    },

    {
        message: "What is the intern's id?",
        name: "id"
    },

    {
        message: "What is the intern's email?",
        name: "email"
    },

    {
        message: "What is the intern's school?",
        name: "school"
    }
]

const engineerQuestions = [
    {
        message: "What is the engineer's name?",
        name: "name"
    },

    {
        message: "What is the engineer's id?",
        name: "id"
    },

    {
        message: "What is the engineer's email?",
        name: "email"
    },

    {
        message: "What is the engineer's gitHub?",
        name: "gitHub"
    }
];


const continuePrompt = [
    {
        message: "What do you wante to do next?",
        name: "choice",
        type: "list",
        choices: ["Create new Engineer", "Create new Intern", "Output engineering team"]
    }

];

function handleContinuePrompt(continuePromptAnswer) {
    switch (continuePromptAnswer.choice) {
        case "Create new Engineer":
            createNewEngineer();
            break;
        case "Create new Intern":
            createNewIntern();
            break;
        case "Output engineering team":
            outputEmployeeList();
            break;
    }
}

function createNewEngineer() {
    inquirer.prompt(engineerQuestions).then(function (engineerAnswers) {
        var engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub)
        employeeList.push(engineer);
        inquirer.prompt(continuePrompt).then(handleContinuePrompt);
    });
}

function createNewIntern() {
    inquirer.prompt(internQuestions).then(function (internAnswers) {
        var intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        employeeList.push(intern);
        inquirer.prompt(continuePrompt).then(handleContinuePrompt);
    });
}

function outputEmployeeDiv(employee) {
    var employeeDiv = `<div><p>Name: ${employee.name}</p><p>Id: ${employee.id}</p><p>Email: ${employee.email}</p><p>Role: ${employee.role}</p>`
    switch(employee.role){
        case "Intern":
            employeeDiv += `<p>School: ${employee.school}</p>`;
            break;

        case "Manager":
            employeeDiv += `<p>Office Number: ${employee.officeNumber}</p>`;
            break;
        
        case "Engineer":
            employeeDiv += `<p>Github: ${employee.github}</p>`;
            break;
    }
    employeeDiv += "</div>";
    return employeeDiv;
}

function outputEmployeeList() {
    var htmlBody = "<body>"
    for (let i = 0; i < employeeList.length; i++) {
        htmlBody += outputEmployeeDiv(employeeList[i]);
    }
    htmlBody += "</body>";
    fs.mkdirSync("./output", {recursive: true});
    fs.writeFileSync("./output/output.html", htmlBody);
}



inquirer.prompt(managerQuestions).then(function (managerAnswers) {
    var manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    employeeList.push(manager);
    inquirer.prompt(continuePrompt).then(handleContinuePrompt);
});
