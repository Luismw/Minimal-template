$(function () {
    $('#btn-info-extra').on('click', function () {

        if ($(this).next().hasClass('active')) {
            $(this).next().removeClass('active');
            $('.icon').removeClass('active');
        } else {
            $(this).next().addClass('active');
            $('.icon').addClass('active');
        };
    });

    $('.main-nav__toggle').on('click', function () {

        if ($(this).next().hasClass('active')) {
            $(this).next().removeClass('active');
        } else {
            $(this).next().addClass('active');
        }
    });

    $('.main-sidebar .btn-submenu').on('click', function () {

        if ($(this).hasClass('active')) {

            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        };

        $(this).next().slideToggle();
    });
});

$(function(){
    var flag = false;

    $('.content__toggle').on('click',function(){
        if (!flag) {
            $(".main-sidebar").addClass('active');
            $(".main").addClass('active');
            flag = true;

        }else {
            $(".main-sidebar").removeClass('active');
            $(".main").removeClass('active');
            flag = false;
        }
    });
});

var forEach = function (e, t, r) {
    if ("[object Object]" === Object.prototype.toString.call(e))
        for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.call(r, e[c], c, e);
    else
        for (var a = 0, l = e.length; l > a; a++) t.call(r, e[a], a, e)
},
    hamburgers = document.querySelectorAll(".hamburger");
    hamburgers.length > 0 && forEach(hamburgers, function (e) {
    e.addEventListener("click", function () {
        this.classList.toggle("is-active")
    }, !1)
});