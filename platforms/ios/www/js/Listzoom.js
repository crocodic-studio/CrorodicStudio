currentPage = {};
currentPage.init = function() {
	console.log("ListPage :: init");
};
currentPage.loadPage = function(pageIndex) {
	console.log("ListPage :: loadPage :: pageIndex: " + pageIndex);
	$("body").load(path + "pages/" + pageIndex + ".html");
	$.getScript(path + "js/" + pageIndex + ".js", function() {
		if (currentPage.init) {
			currentPage.init();
		}
	});
};
currentPage.detailPage = function(taskId) {
	sessionStorage.setItem("taskId", taskId);
	$("body").load(path + "pages/DetailPage.html");
	$.getScript(path + "js/DetailPage.js", function() {
		if (currentPage.init) {
			currentPage.init();
		}
	});
};

