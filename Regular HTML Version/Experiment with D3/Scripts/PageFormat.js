
    var firstload = true;
    function resize() {
        var bodyheight = $("body").height();
        var headerheight = $("header.page").outerHeight();
        var footerheight = $("footer.page").outerHeight();
        var mainheight = bodyheight - (firstload ? headerheight : 0) - footerheight;
        $("main").height(mainheight);
        firstload = false;
        $("main").css("margin-top", headerheight);
    }
    resize();
    $(window).resize(resize);