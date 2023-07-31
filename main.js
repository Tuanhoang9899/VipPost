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

    if ($(".box_blog").length) {
        $(".box_blog").owlCarousel({
            items: 4,
            nav: false,
            dots: true,
            lazyLoad: true,
            loop: true,
            autoHeight:true,
            margin: 25,
        });
    }




});