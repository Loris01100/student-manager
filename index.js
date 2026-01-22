const { showStudents, addStudent } = require('./src/students');
const { showStudents, removeStudent } = require('./src/students');


showStudents();
removeStudent('Alice');
addStudent('Marc');
showStudents();