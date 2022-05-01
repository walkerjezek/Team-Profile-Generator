// Look at README homework for help here 

const Engineer = require("./lib/Engineer");

// Build an array and use push to get data into it. The put that array into the html template

// Employee cards array?

// Make manger

// Make engineer

// Make Intern





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

            ${managerCard}

            ${engineerCard}
            
            ${internCard}


        </div>
    </main>
</body>

</html>
    
    `
}


module.exports = generateHTML;