// Requirements for Employee class:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

// Example of a class:
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        // what is this part suposed to do
        return this.constructor.name
    }
}

module.exports = Employee;