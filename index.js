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
];

intern = [
    {
        type: 'input',
        message: 'Where does the intern attend school?',
        name: 'school'
    }
];

engineer = [
    {
        type: 'input',
        message: 'What is the GitHub account associated with the engineer?',
        name: 'github'
    }
];

function getRole(role){
    // if (role = 'Manager'){
    //     inquirer.prompt(manager)
    //     .then((data) => {
    //        enteredTeam.push(data)
    //     })
    // } else if (role ='Intern'){
    //     inquirer.prompt(intern)
    //     .then((data) => {
    //         enteredTeam.push(data)
    //      })
    // } else {
    //     inquirer.prompt(engineer)
    //     .then((data) => {
    //         enteredTeam.push(data)
    //      })
    // }
}

// for (var key in p) {
//     if (p.hasOwnProperty(key)) {
//         console.log(key + " -> " + p[key]);
//     }
// }


async function addTeammates(numTeam) {
    const enteredTeam = []
    for (let i = 0; i < numTeam; i++) {
        await inquirer.prompt(team_members)
        .then (async (data) =>{
            enteredTeam.push(data)
            
            if (data.role === 'Manager'){
                await inquirer.prompt(manager)
                .then((data) => {
                   enteredTeam.push(data)
                })
            } else if (data.role === 'Intern'){
                await inquirer.prompt(intern)
                .then((data) => {
                    enteredTeam.push(data)
                 })
            } else if (data.role === 'Engineer'){
                await inquirer.prompt(engineer)
                .then((data) => {
                    enteredTeam.push(data)
                 })
            }
        });
    }
    console.log(enteredTeam)
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