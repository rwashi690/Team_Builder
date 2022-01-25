const Manager= require ('./employee')
class Manager extends Employee {
    constructor(name, employeeId, email, github){
        super(name, employeeId, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}
module.exports=Manager