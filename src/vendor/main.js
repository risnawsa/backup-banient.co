// -----------------------------------------------------------------------------
// This file contains all main js.
// -----------------------------------------------------------------------------

$(document).ready(function() {
    $('.autoplay-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        focusOnSelect: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });

    $('.slider-for-journey').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-journey'
    });

    $('.slider-nav-journey').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for-journey',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    AOS.init();
    
    $(".autoplay-slick .slick-arrow").prependTo("#ds-arws").html();
    $(".slider-nav-journey .slick-arrow").prependTo("#jrn-arws").html();
});