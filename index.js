const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const generateHTML = require('./generateHTML');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');




// init app
// prompt manager questions
// check if finished
// if finished, generate HTML
// if more employees, prompt employee questions
// check if finished again

// team members array?

// Questions list - Manager
// How to validate answers? inquirer documentation
const manager = [
    {
        type: "input",
        message: "Manager's Name: ",
        name: "managerName",
    },
    {
        type: "input",
        message: "Manager's Employee Id: ",
        name: "managerId",
    },
    {
        type: "input",
        message: "Manager's Email: ",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "Manager's Office Number: ",
        name: "managerOffice",
    },
];

// Employee questions
const employee = [
    {
        type: "input",
        message: "Employee's Name: ",
        name: "employeeName",
    },
    {
        type: "list",
        message: "Select Employee Role: ",
        choices: ["Engineer", "Intern"],
        name: "employeeRole",
    },
    {
        type: "input",
        message: "Employee Id: ",
        name: "employeeId",
    },
    {
        type: "input",
        message: "Employee Email: ",
        name: "employeeEmail",
    },
    // Role specific options
    {
        type: "input",
        message: "Employee GitHub Username: ",
        name: "employeeGitHub",
        when: (answer) => answer.employeeRole === "Engineer"
    },
    {
        type: "input",
        message: "Employee School: ",
        name: "employeeSchool",
        when: (answer) => answer.employeeRole === "Intern"
    },
];

const continueOpt = [
    {
        type: "list",
        message: "Would you like to add another employee? ",
        choices: ["Yes", "No. Generate my HTML"],
        name: "continueOpt",
    }
]


// use team array to push data to generatehtml 
team = []


// functions to push team members to the team array
function makeManager(data) {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
    team.push(manager);
}

function makeEngineer(data) {
    const engineer = new Engineer(data.employeeName, data.employeeId, data.employeeEmail, data.employeeGitHub);
    team.push(engineer);
}

function makeIntern(data) {
    const intern = new Intern(data.employeeName, data.employeeId, data.employeeEmail, data.employeeSchool);
    team.push(intern);
}


// If the add team member option is selected go through this function and check if finished at the end
function addTeamMember() {
    inquirer.prompt(employee).then((response) => {
        if (response.employeeRole === "Engineer") {
            makeEngineer(response);
            finished();
        } else {
            makeIntern(response);
            finished();
        }
    });
}

// Check if the finished prompt is selected. If not go through employees questions then check if finished again
function finished() {
    inquirer.prompt(continueOpt).then((response) => {
        if (response.continueOpt === "No. Generate my HTML") {
            makeHTML(generateHTML(team));
        } else {
            addTeamMember();
        }
    });
}

// Generate the HTML page
function makeHTML(html) {
    fs.writeFile('./dist/generateHTML.html', html, (err) => {
        err ? console.error(err) : console.log("HTML is being generated.")
    })
}

// Initialize app
// Check if finished? - In case the team is just the manager...
function init() {
    inquirer.prompt(manager).then((response => {
        makeManager(response);
        finished();
    })
    );
}

// initialize app
init();