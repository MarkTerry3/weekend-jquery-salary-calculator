$(document).ready(readyNow);

console.log('js working');

function readyNow() {
    console.log('JQuery working');
    $('#submitButton').on('click', submitButton);
}// end readyNow


function submitButton() {
    $('#tdFirstName').text('#firstNameInput');// isnt working need to revisit
}// end submitButton





// line 12 is where you left off, cant figure out how to make the input be sent to the table