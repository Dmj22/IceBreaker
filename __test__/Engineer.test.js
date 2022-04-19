const Engineer = require('../lib/Engineer');

const employeeInfo = "James";
const idInfo = 123;
const emailInfo = "dmj22@gmail.com";
const githubInfo = "dmj22";

test("gitHub username",() => {
    const employee = new Engineer(employeeInfo, idInfo, emailInfo, githubInfo);
    expect(employee.githubInfo).toBe(this.GitHub);
}); 

test("gitHub()",() => {
const Employee = new Engineer(employeeInfo, idInfo, emailInfo, githubInfo);
expect(Employee.githubInfo).toBe(this.GitHub);
});

test("getRole()",() => {
    const employee = new Engineer(employeeInfo, idInfo, emailInfo, githubInfo);
    expect(employee.getRole()).toEqual(Engineer);
});