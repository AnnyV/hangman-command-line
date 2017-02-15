var inquirer = require('inquirer');
var Word = require('./Word');

var newWord;


// ----------------program starts here-----------------

//get random word

//display masked word

inquirer.prompt([
  {type: "input",
    name: "subject",
    message: "What's your class's subject?"},
  {type: "input",
    name: "capacity",
    message: "What's the capacity of the class?"},

]).then(function(data){
	  var students = [];
      newClass = new Clas([], data.subject, data.capacity);

      askToAddStudent();
});

function newStudent(){
	inquirer.prompt([
	  {type: "input",
	    name: "sName",
	    message: "What's your student's name?"}

	]).then(function(data){
	      var newStudent = new Student(data.sName);
	      newClass.addStudent(newStudent);

	      console.log(newClass);
	      
	      askToAddStudent();
	});
}

function askToAddStudent(){
	inquirer.prompt([
	  {type: "input",
	    name: "addStudents",
	    message: "Do you want to add students to that class?"}

	]).then(function(data){
	      if (data.addStudents == 'yes'){
	      	newStudent();
	      }else{
	      	console.log(newClass);
	      }
	});
}



