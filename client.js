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
}

function monthlyCosts() { //calculates monthlyCosts of all employees
    let monthlyCost = 0;
    let el = $('#totalMonthly');
    for (const person of employeeArray) {
        monthlyCost += person.annualSalary / 12;
        el.empty();
        el.append(monthlyCost.toFixed(2));
    }
    console.log(monthlyCost);

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

