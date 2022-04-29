// Example of a class:
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

// intern has school

const employee = require("./Employee");


class Intern extends employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Intern;