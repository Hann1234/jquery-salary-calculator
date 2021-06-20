console.log('JS'); //Make sure JS is sourced

$(document).ready(onReady);

const employeeArray = [];

function addEmployee() {
    const employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#employeeID').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    };
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    console.log('Employee added:', employee); //takes inputs and adds them to employee object, then clears input fields.

    employeeArray.push(employee);

    console.log('Employee Array:', employeeArray); //added employee object to employee array.

    monthlyCosts();
    displayEmployees();
}

function monthlyCosts() { //calculates monthlyCosts of all employees
    let monthlyCost = 0;
    let el = $('#totalMonthly');
    for (const person of employeeArray) {
        monthlyCost += person.annualSalary / 12;
        el.empty();
        el.append(monthlyCost.toFixed(2));
    };
    if (monthlyCost >= 20000) {
        $('div').addClass('p-3 mb-2 bg-danger text-white');
    };
    console.log(monthlyCost); //just to check the value in the log
}

function displayEmployees() { //function to display employees in the table
    let el = $('tbody');
    el.empty();
    for (const person of employeeArray) {
        el.append(`
        <tr>
            <td id="firstNameTable">${person.firstName}</td>
            <td id="lastNameTable">${person.lastName}</td>
            <td id="employeeIDTable">${person.employeeID}</td>
            <td id="jobTitleTable">${person.jobTitle}</td>
            <td id="annualSalaryTable">${person.annualSalary}</td>
            <td id="deleteButtonTable">
                <button type="button" class="btn btn-danger btn-sm" id="DeleteEmployeeButton">Delete</button>
            </td>
        </tr>
        `);
    }

}

function onReady() { //on page load clears input fields, sets value of employees to 0, and creates a listener for the button being clicked.
    console.log('Page is loaded');
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    let tot = $('#totalMonthly');
    tot.empty();
    tot.append(0);

    $('#addEmployeeButton').on('click',addEmployee);
  }

