// Example of a class:
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

// engineer has github

const employee = require("./Employee");


class Engineer extends employee {
    constructor(name, email, id, github) {
        // super could work here?
        super(name, email, id);
        this.github = github;
    }
    getGitHub() {
        return this.github
    }
    getRole() {
        return this.constructor.name;
    }

}

module.exports = Engineer;