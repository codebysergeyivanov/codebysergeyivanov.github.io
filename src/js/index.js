import '../scss/style.scss';
import $ from 'jquery';
import img from '../images/13.jpg';

// form submission
$(function () {
    $('#input-form').on('submit', function () {
        var name = encodeURIComponent($('#name').val());
        var email = encodeURIComponent($('#email').val());
        var message = encodeURIComponent($('#message').val());
        var nameID = "entry.714791336";
        var emailID = "entry.407576725";
        var messageID = "entry.3473843";
        var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5Y7Wdf2aklG0G6Jywpj_25_7ASfx4_X_qcq7KKTz7Dyy5IA/formResponse?';
        var submitRef = '&submit=Submit';
        var submitURL = (baseURL + nameID + "=" + name + "&" + emailID + "=" + email + "&" + messageID + "=" + message + submitRef);
        // console.log(submitURL);
        $(this)[0].action = submitURL;
        // thank you!
        $('.box-form').addClass("posted");
    });


    // menu
    $('.trigger-nav-list').on('click', function () {
        $('.nav-list').toggleClass('open');
    });

    $(document).mouseup(function (e) {
        if (!e.target.closest('.header-nav') || e.target.matches('a')) {
            $('.nav-list').removeClass('open');
        }
    });

    // additional navigation
    $(document).scroll(function () {
        if (document.documentElement.clientHeight - 1 < window.pageYOffset) {
            $('.scroll').addClass('up');
        }
        if (document.documentElement.clientHeight > window.pageYOffset) {
            $('.scroll').removeClass('up');
        }
        if (window.pageYOffset !== 0) {
            $('.arrow').fadeOut();
        }
        if (window.pageYOffset === 0) {
            $('.arrow').fadeIn();
        }
    });

    $('.scroll').click(function () {
        window.scrollTo(0, 0);
    });

    $('.arrow').click(function () {
        let top = document.querySelector('.about').getBoundingClientRect().top;

        window.scroll(0, top);
    });

    // smooth scrolling
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {

            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {

                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }

        });

    let quote = ['Итерация свойственна человеку, рекурсия божественна.',
        `Всегда пишите код так, будто сопровождать его будет 
                  склонный к насилию психопат, который знает, где вы живете.`,
        `Если бы в Java действительно работала сборка мусора, большинство
                  программ бы удаляли сами себя при первом же запуске.`,
        `Мы наблюдаем общество, которое все больше зависит
                  от машин, но при этом использует их все неэффективнее.`,
        'Работает? Не трогай.'
    ];

    let cite = ['L. Peter Deutsch', 'Martin Golding',
        'Robert Sewell', 'Douglas Rushkoff', 'Любой программист'];

    let count = 0;

    function showNextQuote() {
        if (count < 4) {
            return count += 1;
        }
        count = 0;
        return count;
    }

    $('.quote').text(quote[count]).fadeIn(3000).fadeOut(3000);
    $('.cite').text(cite[count]).fadeIn(3000).fadeOut(3000);

    setInterval(function () {
        let next = showNextQuote();
        $('.quote').text(quote[next]).fadeIn(3000).fadeOut(3000);
        $('.cite').text(cite[next]).fadeIn(3000).fadeOut(3000);
    }, 7100);

});

