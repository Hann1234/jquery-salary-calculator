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

    console.log('Employee added:', employee);
}

function onReady() {
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

