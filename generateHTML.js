// Look at README homework for help here 

// const Engineer = require("./lib/Engineer");

// Build an array and use push to get data into it. The put that array into the html template

// Employee cards array?
function createTeam(team) {
// Make manger
    function makeManager(manager) {
        return `
        <div class="card shadow-5 mb-3" style="box-shadow: 1px 1px 10px; border: none; min-width: 230px; max-width: 230px;">
                <div class="card-header bg-info text-white text-center">
                    <h3>${manager.getName()}</h3>
                    <h5><i class="fa-solid fa-mug-saucer"></i> Manager</h5>
                </div>
                <div class="card" style="margin: 10px">
                    <ul class="list-group list-group-light">
                        <li class="list-group-item px-3">ID: ${manager.getId()}</li>
                        <li class="list-group-item px-3">Email: ${manager.getEmail()}</li>
                        <li class="list-group-item px-3">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `
    }

// Make engineer
    function makeEngineer(engineer) {
        return `
        <div class="card shadow-5 mb-3" style="box-shadow: 1px 1px 10px; border: none; min-width: 230px; max-width: 230px;">
                <div class="card-header bg-info text-white text-center">
                    <h3>${engineer.getName()}</h3>
                    <h5><i class="fa-solid fa-glasses"></i> Engineer</h5>
                </div>
                <div class="card" style="margin: 10px">
                    <ul class="list-group list-group-light">
                        <li class="list-group-item px-3">ID: ${engineer.getId()}</li>
                        <li class="list-group-item px-3">Email: ${engineer.getEmail()}</li>
                        <li class="list-group-item px-3">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
        `
    }

// Make Intern
    function makeIntern(intern) {
        return `
        <div class="card shadow-5 mb-3" style="box-shadow: 1px 1px 10px; border: none; min-width: 230px; max-width: 230px;">
                <div class="card-header bg-info text-white text-center">
                    <h3>${intern.getName()}</h3>
                    <h5><i class="fa-solid fa-user-graduate"></i> Intern</h5>
                </div>
                <div class="card" style="margin: 10px">
                    <ul class="list-group list-group-light">
                        <li class="list-group-item px-3">ID: ${intern.getId()}</li>
                        <li class="list-group-item px-3">Email: ${intern.getEmail()}</li>
                        <li class="list-group-item px-3">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === 'Manager')
        .map(manager => makeManager(manager))
        .join("")
    );
    html.push(team.filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => makeEngineer(engineer))
        .join("")
    );
    html.push(team.filter(employee => employee.getRole() === 'Intern')
        .map(intern => makeIntern(intern))
        .join("")
    );
    return html.join("");
}




function generateHTML(data) {
    // HTML layout here.
    // Use an array for the cards?
    return `
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"> -->
    <script src="https://kit.fontawesome.com/bc7e66a9c7.js" crossorigin="anonymous"></script>
    <title>Team Portfolio</title>
</head>

<body>
    <header class="bg-success text-white text-center">
        <h1>My Team Profile</h1>
    </header>

    <main>
        <!-- Why is align items center not working? Flex wrap? -->
        <div class="card-deck align-items-center justify-content-center mx-auto" style="display: flex; flex-wrap: wrap;">

            ${createTeam(team)}

        </div>
    </main>
</body>

</html>
    
    `
}


module.exports = generateHTML;