$(document).ready(function () {
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
    $.getJSON("https://api.covid19india.org/data.json", function (data) {

        let total_active = data.statewise[0].active;
        let total_confirmed = data.statewise[0].confirmed;
        let total_recovered = data.statewise[0].recovered;
        let total_deaths = data.statewise[0].deaths;
        let last_update = data.statewise[0].lastupdatedtime;

        $("#confirmed").append(total_confirmed);
        $("#active").append(total_active);
        $("#recovered").append(total_recovered);
        $("#deaths").append(total_deaths);
        $("#lastupdate").append(last_update);
    });

    let nCount = function (selector) {
        $(selector).each(function () {
            $(this).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: "swing",
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            });
        });
    }
    let a = 0;
    $(window).scroll( function () {
        let oTop = $(".numbers").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() >= oTop) {
            a++;
            nCount(".ract h1");
        }
    })
