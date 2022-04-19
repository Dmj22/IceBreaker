const Employee = require('../lib/employee');

const employeeInfo = "Dj";

test('creates a employee object' , () => {

    const employee = new Employee(employeeInfo);

    expect(employee.name).toBe(employeeInfo);

});

//get name using getName

test('get employee name', () => {

    const employee = new Employee(employeeInfo); 
    expect(employee.name).toEqual(employeeInfo);
});


//get ID using getID

test('get employee ID', () => {
    const idInfo = 777;
    const employee = new Employee(employeeInfo,idInfo); 
    expect(employee.id).toEqual(idInfo);
});

//get Email using getEmail

test('get employee Email', () => {
    const emailInfo = "Dj@email.com";
    const idInfo = 777;
    const employee = new Employee(employeeInfo,idInfo,emailInfo); 
    expect(employee.email).toEqual(emailInfo);
});


//getrole ()

test('getRole()', () => {
    const emailInfo = "Dj@email.com";
    const idInfo = 777;
    const employee = new Employee(employeeInfo,idInfo,emailInfo); 
    expect(employee.getRole()).toEqual(Employee);
});