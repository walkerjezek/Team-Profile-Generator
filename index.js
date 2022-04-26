const inquirer = require('inquirer');
const fs = require('fs');


// Questions list - Manager
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
        message: "Manager's Ofice Number: ",
        name: "managerOffice",
    },
];

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
        when: (answer) => answer.employeeRole === Engineer
    },
    {
        type: "input",
        message: "Employee School: ",
        name: "employeeSchool",
        when: (answer) => answer.employeeRole === Intern
    },
];

// Generate the HTML page
function generateHTML(html) {
    fs.writeFile('./dist/generateHTML.html', html, (err) => {
        err ? console.error(err) : console.log("HTML is being generated.")
    })
}



// Initialize app
function init() {
    inquirer
        .prompt(manager)
        .then((response => {
        createManager(response);
        checkFinished();
    }));
}

// Function call to initialize app
init();