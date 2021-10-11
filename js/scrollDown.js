// let obj = document.getElementsByClassName("header__scroll_icon");
// console.log(obj[0]);
// obj[0].addEventListener("click", scrollDown);

// function scrollDown() {
//     var windowCoords = document.documentElement.clientHeight;
//     (function scroll() {
//       if (window.pageYOffset < windowCoords) {
//         window.scrollBy(0, 10);
//         setTimeout(scroll, 0);
//       }
//       if (window.pageYOffset > windowCoords) {
//         window.scrollTo(0, windowCoords);
//       }
//     })();
//   }



(function () {
    'use strict';

    var btnScrollDown = document.getElementsByClassName("header__scroll");

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

    btnScrollDown[0].addEventListener('click', scrollDown);
})();


















