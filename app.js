$("body").keydown(function(event) {
    if (event.which === 65) {
        $("audio").get(0).play();
        $("div[data-key=65]").addClass("playing");
    }
    if (event.which === 83) {
        $("audio").get(1).play();
        $("div[data-key=83]").addClass("playing");
    }
    if (event.which === 68) {
        $("audio").get(2).play();
        $("div[data-key=68]").addClass("playing");
    }
    if (event.which === 70) {
        $("audio").get(3).play();
        $("div[data-key=70]").addClass("playing");
    }
    if (event.which === 71) {
        $("audio").get(4).play();
        $("div[data-key=71]").addClass("playing");
    }
    if (event.which === 72) {
        $("audio").get(5).play();
        $("div[data-key=72]").addClass("playing");
    }
    if (event.which === 74) {
        $("audio").get(6).play();
        $("div[data-key=74]").addClass("playing");
    }
    if (event.which === 75) {
        $("audio").get(7).play();
        $("div[data-key=75]").addClass("playing");
    }
    if (event.which === 76) {
        $("audio").get(8).play();
        $("div[data-key=76]").addClass("playing");
    }
}).keyup(function(event) {
    if (event.which === 65) {
        $("div[data-key=65]").removeClass("playing");
    }
    if (event.which === 83) {
        $("div[data-key=83]").removeClass("playing");
    }
    if (event.which === 68) {
        $("div[data-key=68]").removeClass("playing");
    }
    if (event.which === 70) {
        $("div[data-key=70]").removeClass("playing");
    }
    if (event.which === 71) {
        $("div[data-key=71]").removeClass("playing");
    }
    if (event.which === 72) {
        $("div[data-key=72]").removeClass("playing");
    }
    if (event.which === 74) {
        $("div[data-key=74]").removeClass("playing");
    }
    if (event.which === 75) {
        $("div[data-key=75]").removeClass("playing");
    }
    if (event.which === 76) {
        $("div[data-key=76]").removeClass("playing");
    }
})
