const colors = require('colors');
const fs = require('fs');
var clear = require('clear');
const process = require('process');

let tasks;

function writeTasks(taskToWrite) {

    fs.readFile(
        'tasks.json',
        (error, fileContent) => {

            tasks = JSON.parse(fileContent);
            tasks.push({ taskName: taskToWrite });
            fs.writeFile(
                'tasks.json',
                JSON.stringify(tasks),
                () => { console.log('Archivo escrito con éxito!'.green) })
        }
    )
}


function readTaskFile() {
    clear()

    fs.readFile(
        'tasks.json',
        (error, fileContent) => {

            let arrTasks = JSON.parse(fileContent);
            for (let i = 0; i < arrTasks.length; i++) {
                console.log(`${i + 1}-${arrTasks[i]['taskName'].red}`);
            }
        }
    )

}

function deleteTask(number) {
    fs.readFile(
        'tasks.json',
        (error, fileContent) => {

            tasks = JSON.parse(fileContent);
            tasks.splice(number - 1, 1);
            fs.writeFile(
                'tasks.json',
                JSON.stringify(tasks),
                () => { console.log('Archivo borrado con éxito!'.green) })
        }
    )
}

function editTask(number, newTask) {
    fs.readFile(
        'tasks.json',
        (error, fileContent) => {

            tasks = JSON.parse(fileContent);
            tasks.splice(number - 1, 1 ,{taskName:newTask});
            fs.writeFile(
                'tasks.json',
                JSON.stringify(tasks),
                () => { console.log('Archivo editado con éxito!'.green) })
        }
    )
}

if (process.argv[2] === "--show") {
    readTaskFile();
}

if (process.argv[2] === "--add") {
    writeTasks(process.argv[3]);
}

if (process.argv[2] === "--delete") {
    deleteTask(process.argv[3]);
}

if (process.argv[2] === "--edit") {
    editTask(process.argv[3], process.argv[4]);
}