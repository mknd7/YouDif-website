const $loginLink = $('#login');
const $navMenu = $('#navmenu');
const $navOptions = $('#nav-options');
const $headerNav = $('#header-nav');

function modify() {
    if(window.innerWidth <= 768) {
        $loginLink.removeClass('button button--yellow');
        $navOptions.fadeOut();
        $navMenu.removeClass('change');
    }
    else {
        $loginLink.addClass('button button--yellow');
        $navOptions.fadeIn(400);
    }
}

function modifyOnScroll() {
    if($(window).scrollTop() > 0) {
        $headerNav.addClass('change');
    }
    else {
        $headerNav.removeClass('change');
    }
}

$(function () {
    //initial checks
    modify();
    modifyOnScroll();

    // setting handlers for resize and scroll
    $(window).resize(modify);
    $(window).scroll(modifyOnScroll);

    $navMenu.click(function(event) {
        event.stopPropagation();
        $(this).toggleClass('change');
        $navOptions.fadeToggle(400);
    });

    $(document).click(function() {
        if(window.innerWidth <= 768) {
            $navOptions.fadeOut();
            $navMenu.removeClass('change');
        }
    });
});