$(document).ready(readyNow);

console.log('js working');

let employeesOut = [];

function readyNow() {
    console.log('JQuery working');
    $('#submitButton').on('click', submitButton);
}// end readyNow


function submitButton() {
    let employeesIn = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    id: $('#idInput').val(),
    title: $('#titleInput').val(),
    annualSalary: $('#annualSalaryInput').val()
}//end employeesIN

    //push employees to array
    employeesOut.push(employeesIn);

    $('#tdFirstName').append (`<tr><td> ${employeesIn.firstName} </td></tr>`);
    $('#tdLastName').append (`<tr><td> ${employeesIn.lastName} </td></tr>`);
    $('#tdID').append (`<tr><td> ${employeesIn.id} </td></tr>`);
    $('#tdTitle').append (`<tr><td> ${employeesIn.title} </td></tr>`);
    $('#tdAnnualSalary').append (`<tr><td> ${employeesIn.annualSalary} </td></tr>`);

    

}// end submitButton

function monthlyCosts() {
    //take in employee ANNUAL salary
}//end monthlyCosts

//store these in an object, then push them to an array

//monthly total will require dividing. divide by 12 for 12 months


// ## Topics Covered
// - JavaScript
// - jQuery - Selectors, append, and event handling

// ## Assignment

// - DONE The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

//stretch goal of color blocks for the delete button