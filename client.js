$(document).ready(readyNow);

console.log('js working');

let employees = {
    firstName: $('#firstNameInput'),
    lastName: $('#lastNameInout'),
    id: $('#idInput'),
    title: $('#titleInput'),
    annualSalary: $('#annualSalaryInput')

}

function readyNow() {
    console.log('JQuery working');
    $('#submitButton').on('click', submitButton);
}// end readyNow


function submitButton() {
    $('#tdFirstName').text ($('#firstNameInput').val()); // isnt working need to revisit
}// end submitButton


//store these in an object, then push them to an array, which i did in the employees object



//append to the table data to have multiple rows .append(<td>firstname</td>)

//monthly total will require dividing. divide by 12 for 12 months


// line 12 is where you left off, cant figure out how to make the input be sent to the table