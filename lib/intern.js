const Intern= require ('./employee')
class Intern extends Intern {
    constructor(name, employeeId, email, school){
        super(name, employeeId, email)
        this.school = school
    }
    getOfficeNumber(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
module.exports=Intern