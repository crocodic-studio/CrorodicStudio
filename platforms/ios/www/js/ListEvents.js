currentPage = {};
currentPage.init = function() {
	console.log("ListEvents :: init");
	listTasks();
};
currentPage.loadPage = function(pageIndex) {
	console.log("ListEvents :: loadPage :: pageIndex: " + pageIndex);
	$("body").load(path + "pages/" + pageIndex + ".html");
	$.getScript(path + "js/" + pageIndex + ".js", function() {
		if (currentPage.init) {
			currentPage.init();
		}
	});
};
currentPage.detailPage = function(id) {
	sessionStorage.setItem("id", id);
	$("body").load(path + "pages/DetailPageEvents.html");
	$.getScript(path + "js/DetailPageEvents.js", function() {
		if (currentPage.init) {
			currentPage.init();
		}
	});
};

function listTasks() {
	$.ajax({
		type: "get",
		url: "http://ipaconvex.com/todolist-api/get_all_events.php",
		dataType: "json",
		success: function(data) {
			var ul = $('#taskList');
			var html = '';
			$.each(data.events, function(index, item) {
				html += '<li class="table-view-cell">';
				html += '<a class="navigate-right" onclick="currentPage.detailPage(' +
					item.id + ');" >';
				html += item.title;
				html += '</a></li>';
			});
			ul.append(html);
		},
		error: function() {
			alert("List task failure");
		}
	});
}