;(function (window, document, undefined) {
    'use strict';

    var menuListEl = document.getElementById('menu-list');

    document.getElementById('menu-btn')
        .addEventListener('click', function () {
            menuListEl.classList.toggle('collapsed');
        });

    var workBtnEls = document.querySelectorAll('.works-button');

    [].forEach.call(workBtnEls, function (el) {
        el.addEventListener('mouseenter', function () {
            this.classList.remove('fade');
        });
        el.addEventListener('mouseleave', function () {
            this.classList.add('fade');
        });
    });

})(window, document);
