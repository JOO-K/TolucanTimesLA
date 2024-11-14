$.get("./html/navComp.html", function(data){
    $("#nav-ph").replaceWith(data);
});

$.get("./html/footerComp.html", function(data){
    $("#footer-ph").replaceWith(data);
});

$.get("./html/slideComp.html", function(data){
    $("#slide-ph").replaceWith(data);
});

$.get("./html/publicationComp.html", function(data){
    $("#publication-ph").replaceWith(data);
});
