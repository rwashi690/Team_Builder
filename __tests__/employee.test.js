const Employee = require('../lib/employee.js');

describe('Employee', ()=>{
    it ('Can set name through constructor', ()=>{
        const testE = new Employee ('Bob');
        expect(testE.getName()).toBe('Bob');
    })
})