window.onload = function () {
  // header scoll
  var lastScrollTop = 0;
  $(window).on('scroll', function () {
    st = $(this).scrollTop();
    if (st < lastScrollTop) {
      $('.header').addClass('header--scr-up');
      $('.header').removeClass('header--scr-down');
    } else {
      $('.header').addClass('header--scr-down');
      $('.header').removeClass('header--scr-up');
    }
    lastScrollTop = st;
  });

  // main slide
  new Swiper('.sw-main', {
    speed: 1000,
    navigation: {
      prevEl: '.sw-main__prev',
      nextEl: '.sw-main__next',
    },
  });

  // ace science slide
  var sw_sci = new Swiper('.sw-sci', {
    speed: 1000,
    navigation: {
      prevEl: '.sw-sci__prev',
      nextEl: '.sw-sci__next',
    },
    on: {
      slideChange: function () {
        switch (sw_sci.realIndex) {
          case 0:
            $('.sw-sci__pg').removeClass('sw-sci__pg--focused');
            $('.sw-sci__pg-1').addClass('sw-sci__pg--focused');
            break;
          case 1:
            $('.sw-sci__pg').removeClass('sw-sci__pg--focused');
            $('.sw-sci__pg-2').addClass('sw-sci__pg--focused');
            break;
          case 2:
            $('.sw-sci__pg').removeClass('sw-sci__pg--focused');
            $('.sw-sci__pg-3').addClass('sw-sci__pg--focused');
            break;
          default:
            $('.sw-sci__pg').removeClass('sw-sci__pg--focused');
            $('.sw-sci__pg-4').addClass('sw-sci__pg--focused');
        }
      }
    },
  });

  $('.sw-sci__pg-1').click(function () {
    sw_sci.slideTo(0);
  });
  $('.sw-sci__pg-2').click(function () {
    sw_sci.slideTo(1);
  });
  $('.sw-sci__pg-3').click(function () {
    sw_sci.slideTo(2);
  });
  $('.sw-sci__pg-4').click(function () {
    sw_sci.slideTo(3);
  });

  // ace collection slide
  new Swiper('.sw-coll', {
    spaceBetween: 50,
    speed: 1000,
    navigation: {
      prevEl: '.sw-coll__prev',
      nextEl: '.sw-coll__next',
    },
    scrollbar: {
      el: '.sw-coll__sb',
    },
    observer: true,
    observeParents: true,
  });

  // ace collection show/hide
  $('.coll__menu-new').click(function () {
    $('.coll__menu-new').addClass('coll__menu--focused');
    $('.coll__menu-reco').removeClass('coll__menu--focused');
    $('.coll-new-swiper').show();
    $('.coll-reco-swiper').hide();
  });

  $('.coll__menu-reco').click(function () {
    $('.coll__menu-new').removeClass('coll__menu--focused');
    $('.coll__menu-reco').addClass('coll__menu--focused');
    $('.coll-new-swiper').hide();
    $('.coll-reco-swiper').show();
  });

  // news slide
  var sw_news = new Swiper('.sw-news', {
    speed: 1000,
    on: {
      slideChange: function () {
        switch (sw_news.realIndex) {
          case 0:
            $('.sw-news__pg').removeClass('sw-news__pg--focused');
            $('.sw-news__pg-1').addClass('sw-news__pg--focused');
            break;
          case 1:
            $('.sw-news__pg').removeClass('sw-news__pg--focused');
            $('.sw-news__pg-2').addClass('sw-news__pg--focused');
            break;
          default:
            $('.sw-news__pg').removeClass('sw-news__pg--focused');
            $('.sw-news__pg-3').addClass('sw-news__pg--focused');
        }
      }
    },
  });

  $('.sw-news__pg-1').click(function () {
    sw_news.slideTo(0);
    $('.sw-news__pg').removeClass('sw-news__pg--focused');
    $(this).addClass('sw-news__pg--focused');
  });
  $('.sw-news__pg-2').click(function () {
    sw_news.slideTo(1);
    $('.sw-news__pg').removeClass('sw-news__pg--focused');
    $(this).addClass('sw-news__pg--focused');
  });
  $('.sw-news__pg-3').click(function () {
    sw_news.slideTo(2);
    $('.sw-news__pg').removeClass('sw-news__pg--focused');
    $(this).addClass('sw-news__pg--focused');
  });

  // side-btn fix
  $(window).scroll(function () {
    var scT = $(window).scrollTop();
    var hgt = $(window).height();
    var footer_top = $('.footer').offset().top;
    if (scT + hgt >= footer_top) {
      $('.side-btn').addClass('side-btn-abs');
    } else {
      $('.side-btn').removeClass('side-btn-abs');
    }
  });

  // go-top
  $('.go-top').click(function () {
    var body_top = $('body').offset().top;
    $('html, body').animate({
      scrollTop: body_top,
    });
  });

  $(window).scroll(function () {
    var scT = $(window).scrollTop();
    if (scT > 0) {
      $('.go-top').addClass('go-top-show');
    } else {
      $('.go-top').removeClass('go-top-show');
    }
  });

  // family open
  $('.family__btn').click(function () {
    $('.family-link-box').show();
  });

  $('.family__close-btn').click(function () {
    $('.family-link-box').hide();
  })
};