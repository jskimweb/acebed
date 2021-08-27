$(document).ready(function() {
    $('.go-top').click(function(event) {
        event.preventDefault();
        var tgY = $('body').offset().top;
        $('html, body').animate({
            scrollTop: tgY,
        });
    });
});

window.onload = function() {
    var sw_main = new Swiper('.sw-main', {
      speed: 1000,
        navigation: {
            prevEl: '.sw-main__prev',
            nextEl: '.sw-main__next',
        },
    });

    var sw_sci = new Swiper('.sw-sci', {
      speed: 1000,
        pagination: {
          el: '.sw-sci-pg',
          clickable: true,
        },
        navigation: {
            prevEl: '.sw-sci__prev',
            nextEl: '.sw-sci__next',
        },
    });

    var sw_coll = new Swiper('.sw-coll', {
        spaceBetween: 50,
        speed: 1000,
        scrollbar: {
          el: '.sw-coll-sb',
        },
        navigation: {
            prevEl: '.sw-coll__prev',
            nextEl: '.sw-coll__next',
        },
    });

    var sw_news = new Swiper('.sw-news', {
        pagination: {
          el: '.sw-news-pg',
          clickable: true,
        },
    });
};