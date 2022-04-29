// Example of a class:
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

// manager has office number

const employee = require("./Employee");


class Manager extends employee {
    constructor(name, email, id, officeNumber) {
        // super?
        // Ref: 10-01-21
        super(name, email, id)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.constructor.name
    }
}

module.exports = Manager;


