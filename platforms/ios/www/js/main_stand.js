var pagesHistory = [];
var currentPage = {};
var path = "";

function init(){

    $("body").load(path + "pages/ListStand.html", function(){
        $.getScript(path + "js/ListStand.js", function() {
            if (currentPage.init) {
                currentPage.init();
            }
        });
    });

}