var serviceURL = "http://ipaconvex.com/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li>' +
					'<h4>' + employee.firstName + '</h4>' +
					'<p>' + employee.title + '</p>'+
					'<p>' + employee.officePhone + '</p>'+
					'<p>' + employee.email + '</p></li>');
		});
		$('#employeeList').listview('refresh');
	});
}