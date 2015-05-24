currentPage = {};
currentPage.init = function() {
	console.log("AddPageStand :: init");
};
currentPage.back = function() {
	console.log("AddPageStand :: back");
	$("body").load(path + "pages/ListStand.html", function() {
		$.getScript(path + "js/ListStand.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};
currentPage.add = function() {
	console.log("AddPageStand :: add");
	var lobby = $("#lobby").val();
	var perusahaan = $("#perusahaan").val();
	var keterangan = $("#keterangan").val();
	formData = {
		lobby: $("#lobby").val(),
		perusahaan: $("#perusahaan").val(),
		keterangan: $("#keterangan").val()
	}
	if (lobby == "") {
		alert("Please enter Lobby");
	} else if (perusahaan == "") {
		alert("Please enter Company");
	}else if (keterangan == "") {
		alert("Please enter Description");
	} else {
		$.ajax({
			type: "post",
			url: "http://ipaconvex.com/todolist-api/create_task_stand.php",
			data: formData,
			dataType: "json",
			success: function(data) {
				alert("Add task success");
				$("body").load(path + "pages/ListPageStand.html", function() {
					$.getScript(path + "js/ListPageStand.js", function() {
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