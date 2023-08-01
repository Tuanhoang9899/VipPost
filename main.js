$(document).ready(function(){
if ($(".banner_home").length) {
    $(".banner_home").owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        lazyLoad: true,
        loop: true,
        autoHeight:true
    });
}

    if ($(".box_blog_slide").length) {
        $(".box_blog_slide").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            lazyLoad: true,
            loop: true,
            autoHeight:true,
            margin: 25,
        });
    }
    if (screen.width < 768) {
        $(".about_me .arrow").after($(".about_me .title .intro_title"));
        $(".criteria .criteria_text .icon_1 img").after($(".about_me .criteria .criteria_text .text .criteria_text_1"));
        $(".criteria .criteria_text .icon_2 img").after($(".about_me .criteria .criteria_text .text .criteria_text_2"));
        $(".criteria .criteria_text .icon_3 img").after($(".about_me .criteria .criteria_text .text .criteria_text_3"));
    }



});