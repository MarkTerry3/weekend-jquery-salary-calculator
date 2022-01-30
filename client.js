$(document).ready(readyNow);

console.log('js working');

let employeesOut = [];

function readyNow() {
    console.log('JQuery working');
    $('#submitButton').on('click', submitButton);
    $('#submitButton').on('click', totalMonthly);
    //first parent, then child, because parent exists on page load
    $('#tableOutput').on('click', '#employeeData', deleteButton);
}// end readyNow

function deleteButton() {
    console.log('this is', $(this));
    // remove the table row
    $(this).remove();``
}//end deleteButton


let monthlyEmployeeCosts = 0;

function submitButton() {
    //take in employee object
    let employeesIn = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    id: $('#idInput').val(),
    title: $('#titleInput').val(),
    annualSalary: $('#annualSalaryInput').val()
}//end employeesIN

    //push employees to array
    employeesOut.push(employeesIn);

    //append employees to the DOM  
    $('#tableOutput').append(`<tr id="employeeData">
    <td>${$('#firstNameInput').val()} </td>
    <td>${$('#lastNameInput').val()} </td>
    <td>${$('#idInput').val()} </td>
    <td>${$('#titleInput').val()} </td>
    <td>${$('#annualSalaryInput').val()} </td>
    <td><button id="tdDelete">Delete</button></td></tr>`)


    //empty input fields
    $('#firstNameInput').val(''),
    $('#lastNameInput').val(''),
    $('#idInput').val(''),
    $('#titleInput').val(''),
    $('#annualSalaryInput').val('')

    

}// end submitButton



function totalMonthly(){
    let sumOfSalary = 0;
    for (let i of employeesOut) {
      sumOfSalary += Number(i.annualSalary);
      //update DOM
      $('#totalMonthly').text(Math.round(sumOfSalary/12));
    }//end for loop
    if ((sumOfSalary/12) > 20000) {
        $('#h3Red').css("background-color", "red");
    }//end if
    
  }//end sumOfSalary







// ## Topics Covered
// - JavaScript
// - jQuery - Selectors, append, and event handling

// ## Assignment

// - ### DONE ### The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

// - ### DONE ### A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. 

// - ### DONE ### If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

//stretch goal of color blocks for the delete button