currentPage = {};
currentPage.init = function() {
	console.log("DetailPageEvents :: init");
	detailTask();
};
currentPage.back = function() {
	console.log("DetailPageEvents :: back");
	$("body").load(path + "pages/ListEvents.html", function() {
		$.getScript(path + "js/ListEvents.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};
currentPage.edit = function() {
	console.log("DetailPageEvents :: edit");
	var id = sessionStorage.id;
	var title = $("#title").val();
	var instructor = $("#instructor").val();
	var description = $("#description").val();
	var tanggal = $("#tanggal").val();
	formData = {
		id: sessionStorage.id,
		title: $("#title").val(),
		instructor: $("#instructor").val(),
		description: $("#description").val(),
		tanggal: $("#tanggal").val()
	}
	if (title == "") {
		alert("Please enter Title");
	} else if (instructor == "") {
		alert("Please enter Instructor");
	}else if (description == "") {
		alert("Please enter Description");
	}else if (tanggal == "") {
		alert("Please enter Dates");
	} else {
		$.ajax({
			type: "post",
			url: "http://ipaconvex.com/todolist-api/update_task_events.php",
			data: formData,
			dataType: "json",
			success: function(data) {
				alert("Edit task success");
				$("body").load(path + "pages/ListEvents.html", function() {
					$.getScript(path + "js/ListEvents.js", function() {
						if (currentPage.init) {
							currentPage.init();
						}
					});
				});
			},
			error: function() {
				alert("Edit task failure");
			}
		});
	}
};

function detailTask() {
	formData = {
		id: sessionStorage.id
	}
	$.ajax({
		type: "get",
		url: "http://ipaconvex.com/todolist-api/get_events_details.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			$('#title').val(data.eventk[0].title);
			$('#instructor').val(data.eventk[0].instructor);
			$('#description').val(data.eventk[0].description);
			$('#tanggal').val(data.eventk[0].tanggal);
		},
		error: function() {
			alert("Detail task failure");
		}
	});
}
currentPage.remove = function() {
	console.log("DetailPageEvents :: delete");
	deleteTask();
};

function deleteTask() {
	formData = {
		id: sessionStorage.id
	}
	$.ajax({
		type: "post",
		url: "http://ipaconvex.com/todolist-api/delete_events.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			alert("Delete task success");
			$("body").load(path + "pages/ListEvents.html", function() {
				$.getScript(path + "js/ListEvents.js", function() {
					if (currentPage.init) {
						currentPage.init();
					}
				});
			});
		},
		error: function() {
			alert("Delete task failure");
		}
	});
}