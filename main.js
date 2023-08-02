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

    if ($(".box_blog_slide_home").length) {
        $(".box_blog_slide_home").owlCarousel({
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
        $(".body_service .arrow").after($(".body_service .title .intro_title"));
        $(".all_service .arrow").after($(".all_service .title_service .title .button_view_all"));
        $(".criteria .criteria_text .icon_1 img").after($(".about_me .criteria .criteria_text .text .criteria_text_1"));
        $(".criteria .criteria_text .icon_2 img").after($(".about_me .criteria .criteria_text .text .criteria_text_2"));
        $(".criteria .criteria_text .icon_3 img").after($(".about_me .criteria .criteria_text .text .criteria_text_3"));
        // $(".progresss .progress_item .right").after($(".progresss .progress_item .mid"));
    }
    $(".header-menu-mobile .nav_bar_mobile").click(function (){
        $(".modal_menu-mobile").addClass("show-mobile");
        $("body").css("overflow", "hidden");
    });
    $(".menu-mobile").click(function(event) {
        event.stopPropagation();
    });
    $(".modal_menu-mobile").click(function() {
        $(this).removeClass("show-mobile");
        $("body").css("overflow", "visible");
    });
    $(".carriage .left_column .list_question ul li").click(function() {
        $(this).toggleClass("active");
        $(this).find("p.pra_hide").slideToggle();
    });



});