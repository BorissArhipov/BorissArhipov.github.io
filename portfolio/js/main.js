// Scroll
(function() {
  
    var btnScrollDown = document.querySelector('.main__arrow');
  
    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
})();
