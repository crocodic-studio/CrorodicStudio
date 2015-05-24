var pagesHistory = [];
var currentPage = {};
var path = "";

function init(){

    $("body").load(path + "pages/ListEvents.html", function(){
        $.getScript(path + "js/ListEvents.js", function() {
            if (currentPage.init) {
                currentPage.init();
            }
        });
    });

}