$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});


$(document).ready(function() {
    $(".scrollToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return true;
    });

});

