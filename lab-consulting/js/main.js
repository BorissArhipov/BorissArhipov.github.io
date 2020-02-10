$(function() {
    // Modal
    $('.popup').click (function(e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
        $('body').css('margin', '0');
        $('body').css('overflow', 'visible');
    });
    // Bar
    $('.header__bar').click(function() {
        $('.open-menu').toggleClass('d-none').toggleClass('justify-content-end').toggleClass('d-flex').css('order', '1');
        $('.header__nav').toggleClass('header__nav_mini');
        $('.header__menu').toggleClass('header__menu_mini');
    });
    $('.header__bar_other').click(function() {
        $('.open-menu').toggleClass('d-none').toggleClass('justify-content-end').toggleClass('d-flex').css('order', '1');
        $('.header__nav').toggleClass('header__nav_mini-noopacity');
        $('.header__menu').toggleClass('header__menu_mini');
    });
    // Slider
    $('.second__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        dots: true
    });
    // scroll
    $('.trust__btn').on( 'click', function(){ 
        var el = $(this);
        var dest = el.attr('href');
        if(dest !== undefined && dest !== '') { 
            $('html').animate({ 
                scrollTop: $(dest).offset().top 
            }, 500 
            );
        }
        return false;
    });
    // Second menu buttons
    let secondLink = document.querySelectorAll('.second__link');
    let secondBox = document.querySelectorAll('.second__box');
    for(let i = 0; i < secondLink.length; i++) {
        secondLink[i].addEventListener("mousedown", function() {
            secondBox[i].classList.add('second__box-active');
        });
        secondLink[i].addEventListener("mouseup", function() {
            secondBox[i].classList.remove('second__box-active');
        });
    }
});

