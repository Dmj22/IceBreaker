const Manager = require('../lib/Manger');

const employeeInfo = "James";
const idInfo = 123;
const emailInfo = "dmj22@gmail.com";
const officeNumberInfo= "031";

test("gitHub username",() => {
    const employee = new Manager(employeeInfo, idInfo, emailInfo, officeNumberInfo);
    expect(employee.officeNumberInfo).toEqual(this.officeNumber);
}); 

test("gitHub()",() => {
const Employee = new Manager(employeeInfo, idInfo, emailInfo, officeNumberInfo);
expect(Employee.getOfficeNumberInfo).toEqual(this.officeNumber);
});

test("getRole()",() => {
    const employee = new Manager(employeeInfo, idInfo, emailInfo, officeNumberInfo);
    expect(employee.getRole()).toEqual(Manager);
});