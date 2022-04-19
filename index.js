const inquirer = require("inquirer");
const fs = require("fs");
const Generate = require("./src/generateHTML");


// lib modules import team
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/manager");


//team array()
let teamMems = [];

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "Who is the manager of your team? please enter name?"
        },

      
        {
            type: "input",
            name: "managerId",
            message: "What is the Managers ID?"
        },

        
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Managers Email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Managers office number?"
        },
    ])

    .then(answers => {
        let managerName, managerId, managerEmail, managerOfficeNumber = answers;
        console.log(answers);
        const manager = new Manager (managerName, managerId, managerEmail, managerOfficeNumber);

        teamMems.push(Manager);

        //after manager add more team members 
        addteamMems();

    })

}

//add engineer

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "Who is the engineer on your team? please enter name"
        },

      
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineers ID?"
        },

        
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineers Email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineers github information?"
        },
    ])

    .then(answers => {
        let engineerName, engineerId, engineerEmail, engineerGithub = answers;
        console.log(answers);
        const engineer = new Engineer (engineerName, engineerId, engineerEmail, engineerGithub);

        teamMems.push(Engineer);

        //after manager add more team members 
        addteamMems();

    })

}


//add Intern

function addIntern() {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the interns name?"
        },

      
        {
            type: "input",
            name: "internId",
            message: "What is the interns ID?"
        },

        
        {
            type: "input",
            name: "internEmail",
            message: "What is the interns Email?"
        },
        {
            type: "input",
            name: "internSchoolName",
            message: "What is the the name of the school your intern attends?"
        },
    ])

    .then(answers => {
        let internName, internId, internEmail, internSchoolName = answers; 
        console.log(answers);
        const intern = new Intern (internName, internId, internEmail, internSchoolName);

        teamMems.push(Intern);

        //after manager add more team members 
        addteamMems();
    })    
}

function addteamMems() {
    inquirer.prompt({
        type: "list",
        name:"addteamMems",
        message: "please choose the team memeber you would like to add",
        choices: ["Engineer", "Intern", "I do not wish to add any team members at this time"] 
    })

    .then(answers => {
        let {addteamMems} = answers;
        if (addteamMems === "Intern") {
            addIntern();
        } else if (addteamMems === "Engineer"){
            addEngineer();
        } else if (addteamMems ==="I do not wish to add any team members at this time") {
            initPage();
        }
    })
}

// function to generate HTML page file using file system 
function initPage() {
    // function to generate HTML page file using file system 
    fs.writefileSync("./dist/index.html", Generate(teamMems), err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Congratulations your team profile has been created! Head over to your HTML to see the results!");
            
        };
    });
}
addManager();