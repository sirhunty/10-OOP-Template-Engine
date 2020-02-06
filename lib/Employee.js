// when creating a class with mutiple properties that correlate with eachother.
// When you assign something, you pass it through using var = newName = new NewName

class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

}





module.exports = Employee;