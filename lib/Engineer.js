// inheritance: i have an bject that has the same prooperities as a differenton object,
//i can use inheritance without 
const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        // super is executing the parent class's method
        // and treating it as its own
        super (name, id, email);
        this.github = github;
        // overwriting role in parent class which was previously,
        // "Employee" and now returns "Engineer"
        this.role = "Engineer";
    }

    getGithub () {
        return this.github;
    }

}


module.exports = Engineer;