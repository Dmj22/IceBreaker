const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email)
        this.schoolInfo = this.school
    }
    
    getSchool(){
        return this.getschool
    }
    
    getRole(){
        return Intern
    }
}


module.exports = Intern;