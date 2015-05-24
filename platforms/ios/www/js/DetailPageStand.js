currentPage = {};
currentPage.init = function() {
	console.log("DetailPageStand :: init");
	detailTask();
};
currentPage.back = function() {
	console.log("DetailPageStand :: back");
	$("body").load(path + "pages/ListStand.html", function() {
		$.getScript(path + "js/ListStand.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};
currentPage.edit = function() {
	console.log("DetailPageStand :: edit");
	var id = sessionStorage.id;
	var lobby = $("#lobby").val();
	var perusahaan = $("#perusahaan").val();
	var keterangan = $("#keterangan").val();
	formData = {
		id: sessionStorage.id,
		lobby: $("#lobby").val(),
		perusahaan: $("#perusahaan").val(),
		keterangan: $("#keterangan").val()
	}
	if (lobby == "") {
		alert("Please enter lobby");
	} else if (perusahaan == "") {
		alert("Please enter Company");
	}else if (keterangan == "") {
		alert("Please enter keterangan");
	} else {
		$.ajax({
			type: "post",
			url: "http://ipaconvex.com/todolist-api/update_task_stand.php",
			data: formData,
			dataType: "json",
			success: function(data) {
				alert("Edit task success");
				$("body").load(path + "pages/ListStand.html", function() {
					$.getScript(path + "js/ListStand.js", function() {
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
		url: "http://ipaconvex.com/todolist-api/get_stand_details.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			$('#lobby').val(data.stand[0].lobby);
			$('#perusahaan').val(data.stand[0].perusahaan);
			$('#keterangan').val(data.stand[0].keterangan);
		},
		error: function() {
			alert("Detail task failure");
		}
	});
}
currentPage.remove = function() {
	console.log("DetailPageStand :: delete");
	deleteTask();
};

function deleteTask() {
	formData = {
		id: sessionStorage.id
	}
	$.ajax({
		type: "post",
		url: "http://ipaconvex.com/todolist-api/delete_stand.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			alert("Delete task success");
			$("body").load(path + "pages/ListStand.html", function() {
				$.getScript(path + "js/ListStand.js", function() {
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