$('.owl-carousel-promo').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    nav: true,                 // Включить навигацию
    navText: ['<', '>'],       // Текст для кнопок навигации
    dots: true,                // Включить точки
    dotsEach: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:2
        }
    }

})

$('.owl-carousel-blog-posts').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    nav: true,                 // Включить навигацию
    navText: ['<', '>'],       // Текст для кнопок навигации
    dots: true,                // Включить точки
    dotsEach: true,
    margin: 20,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:4
        }
    }

})

$( function() {
    $( "#accordion" ).accordion();
} );




/* Please ❤ this if you like it! */


(function($) { "use strict";


    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();


    //Switch light/dark

    $("#switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);