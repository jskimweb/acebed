window.onload = function() {
    var sw_main = new Swiper('.sw-main', {
        navigation: {
            prevEl: '.sw-main__prev',
            nextEl: '.sw-main__next',
        },
    });

    var sw_sci_pg = ["HYBRID Z SPRING", "5 ZERO SYSTEM", "NEW MATERIAL", "ECO & HEALTH"];
    var sw_sci = new Swiper('.sw-sci', {
        pagination: {
          el: '.sw-sci-pg',
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (sw_sci_pg[index]) + '</span></div>';
          },
        },
        speed: 1000,
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

    var sw_sci_pg = ["HYBRID Z SPRING", "5 ZERO SYSTEM", "NEW MATERIAL", "ECO & HEALTH"];
    var sw_news = new Swiper('.sw-news', {
        pagination: {
          el: '.sw-news-pg',
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (sw_news_pg[index]) + '</span></div>';
          },
        },
    });
  };