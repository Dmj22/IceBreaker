const Intern = require('../lib/Intern');

const employeeInfo = "James";
const idInfo = 123;
const emailInfo = "dmj22@gmail.com";
const schoolInfo = "Osu";

test("gitHub username",() => {
    const employee = new Intern(employeeInfo, idInfo, emailInfo, schoolInfo);
    expect(employee.schoolInfo).toBe(this.school);
}); 

test("gitHub()",() => {
const Employee = new Intern(employeeInfo, idInfo, emailInfo, schoolInfo);
expect(Employee.getschoolInfo).toBe(this.school);
});

test("getRole()",() => {
    const employee = new Intern(employeeInfo, idInfo, emailInfo, schoolInfo);
    expect(employee.getRole()).toEqual(Intern);
});