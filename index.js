const inquirer = require('inquirer');
const fs = require('fs');

team_members = [
    {
        type: 'input',
        message: 'Name of team member',
        name: 'title'
    },
    {
        type: 'list',
        message: 'Teammates role',
        name: 'role',
        choices: ['Mananger', 'Engineer', 'Intern']
    }
]


async function addTeammates(numTeam) {
    const enteredTeam = []
    for (let i = 0; i < numTeam; i++) {
        await inquirer.prompt(team_members)
        .then ((data) =>{
            enteredTeam.push(data)
        });
        // Add logic to make sure you have all the information
        // .then((data) => enteredTeam.push(data))
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