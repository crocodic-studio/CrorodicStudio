var pagesHistory = [];
var currentPage = {};
var path = "";

function init(){

    $("body").load(path + "pages/Listzoom.html", function(){
        $.getScript(path + "js/Listzoom.js", function() {
            if (currentPage.init) {
                currentPage.init();
            }
        });
    });

}