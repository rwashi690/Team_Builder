const inquirer = require('inquirer');
const fs = require('fs');

team_members = [
    {
        type: 'input',
        message: 'Name of team member',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the email of the team member?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is id number of the team member?',
        name: 'id'
    },
    {
        type: 'list',
        message: 'What is the teammates role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

manager = [
    {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'office'
    }
]

intern = [
    {
        type: 'input',
        message: 'Where does the intern attend school?',
        name: 'school'
    }
]

engineer = [
    {
        type: 'input',
        message: 'What is the GitHub account associated with the engineer?',
        name: 'github'
    }
]

async function addTeammates(numTeam) {
    const enteredTeam = []
    for (let i = 0; i < numTeam; i++) {
        await inquirer.prompt(team_members)
        .then ((data) =>{
            // inquirer.prompt(manager)
            // checkRole(data.role);
            if (data.role = 'Manager'){
                inquirer.prompt(manager)
                .then((data) => {
                   enteredTeam.oush(data)
                })
            } else if (data.role ='Intern'){
                inquirer.prompt(intern)
                // .then((data) => {
                //     let school = data.school;
                // })
            } else {
                inquirer.prompt(engineer)
                // .then((data) => {
                //     let git = data.github;
                // })
            }
            
            //let roleInfo=checkRole(data.role);
            // enteredTeam.push(data, roleInfo);
        });
        // Add logic to make sure you have all the information
        // .then((data) => enteredTeam.push(data))
    }
    // console.log(enteredTeam)
}

function checkRole(role){
    if (role = 'Manager'){
        inquirer.prompt(manager)
        // .then((data) => {
        //     let officeNum = data.office;
        // })
    } else if (role ='Intern'){
        inquirer.prompt(intern)
        // .then((data) => {
        //     let school = data.school;
        // })
    } else {
        inquirer.prompt(engineer)
        // .then((data) => {
        //     let git = data.github;
        // })
    }
    // return officeNum, school, git;
}


function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'How many teammates?',
            name: 'num'
        }
    ])
        .then((data) => { addTeammates(parseInt(data.num)) })
}

init()