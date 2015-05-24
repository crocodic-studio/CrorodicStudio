currentPage = {};
currentPage.init = function() {
	console.log("AddPage :: init");
};
currentPage.back = function() {
	console.log("AddPage :: back");
	$("body").load(path + "pages/ListEvents.html", function() {
		$.getScript(path + "js/ListEvents.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};
currentPage.add = function() {
	console.log("AddPage :: add");
	var title = $("#title").val();
	var instructor = $("#instructor").val();
	var description = $("#description").val();
	var tanggal = $("#tanggal").val();
	formData = {
		title: $("#title").val(),
		instructor: $("#instructor").val(),
		description: $("#description").val(),
		tanggal: $("#tanggal").val()
	}
	if (title == "") {
		alert("Please enter Title");
	} else if (instructor == "") {
		alert("Please enter instructor");
	} else if (description == "") {
		alert("Please enter Description");
	}else if (tanggal == "") {
		alert("Please enter Dates");
	}else {
		$.ajax({
			type: "post",
			url: "http://ipaconvex.com/todolist-api/create_task_events.php",
			data: formData,
			dataType: "json",
			success: function(data) {
				alert("Add task success");
				$("body").load(path + "pages/ListEvents.html", function() {
					$.getScript(path + "js/ListEvents.js", function() {
						if (currentPage.init) {
							currentPage.init();
						}
					});
				});
			},
			error: function() {
				alert("Add task failure");
			}
		});
	}
};