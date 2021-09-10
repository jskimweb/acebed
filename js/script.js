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

  // srch open & close
  var srch_open = $('.header__icon--srch');
  srch_open.click(function() {
    $('.srch').slideDown();
    $('.black-bg').show();
  });
  $('.srch__close').click(function() {
    $('.srch').slideUp();
    $('.black-bg').hide();
  });

  // all open & close
  var all_open = $('.header__icon--all');
  all_open.click(function() {
    $('.all').addClass('all--open');
    $('html').addClass('lock');
  });
  $('.all__close').click(function() {
    $('.all').removeClass('all--open');
    $('html').removeClass('lock');
  });

  // all-cate hover
  $('.all-cate-1 .all-cate-main>span').mouseover(function () {
    $('.all-cate-1 .all-cate-img').css('opacity', '1');
    $('.all-cate-1 .all-cate-img img').css('transform', 'scale(1)');
    $('.all-cate-1 .all-cate__line>span').css('width', '100%');
    $('.all-cate-1 .all-cate-sub').stop().fadeIn(400);
  });
  $('.all-cate-2 .all-cate-main>span').mouseover(function () {
    $('.all-cate-2 .all-cate-img').css('opacity', '1');
    $('.all-cate-2 .all-cate-img img').css('transform', 'scale(1)');
    $('.all-cate-2 .all-cate__line>span').css('width', '100%');
    $('.all-cate-2 .all-cate-sub').stop().fadeIn(400);
  });
  $('.all-cate-3 .all-cate-main>span').mouseover(function () {
    $('.all-cate-3 .all-cate-img').css('opacity', '1');
    $('.all-cate-3 .all-cate-img img').css('transform', 'scale(1)');
    $('.all-cate-3 .all-cate__line>span').css('width', '100%');
    $('.all-cate-3 .all-cate-sub').stop().fadeIn(400);
  });
  $('.all-cate-4 .all-cate-main>span').mouseover(function () {
    $('.all-cate-4 .all-cate-img').css('opacity', '1');
    $('.all-cate-4 .all-cate-img img').css('transform', 'scale(1)');
    $('.all-cate-4 .all-cate__line>span').css('width', '100%');
    $('.all-cate-4 .all-cate-sub').stop().fadeIn(400);
  });

  $('.all-cate-1 .all-cate-main>span').mouseout(function () {
    $('.all-cate .all-cate-img').css('opacity', '0');
    $('.all-cate-1 .all-cate-img').css('opacity', '1');
    $('.all-cate-1 .all-cate-img img').css('transform', 'scale(1.07)');
    $('.all-cate-1 .all-cate__line>span').css('width', '0');
    $('.all-cate-1 .all-cate-sub').stop().hide();
  });
  $('.all-cate-2 .all-cate-main>span').mouseout(function () {
    $('.all-cate .all-cate-img').css('opacity', '0');
    $('.all-cate-1 .all-cate-img').css('opacity', '1');
    $('.all-cate-2 .all-cate-img img').css('transform', 'scale(1.07)');
    $('.all-cate-2 .all-cate__line>span').css('width', '0');
    $('.all-cate-2 .all-cate-sub').stop().hide();
  });
  $('.all-cate-3 .all-cate-main>span').mouseout(function () {
    $('.all-cate .all-cate-img').css('opacity', '0');
    $('.all-cate-1 .all-cate-img').css('opacity', '1');
    $('.all-cate-3 .all-cate-img img').css('transform', 'scale(1.07)');
    $('.all-cate-3 .all-cate__line>span').css('width', '0');
    $('.all-cate-3 .all-cate-sub').stop().hide();
  });
  $('.all-cate-4 .all-cate-main>span').mouseout(function () {
    $('.all-cate .all-cate-img').css('opacity', '0');
    $('.all-cate-1 .all-cate-img').css('opacity', '1');
    $('.all-cate-4 .all-cate-img img').css('transform', 'scale(1.07)');
    $('.all-cate-4 .all-cate__line>span').css('width', '0');
    $('.all-cate-4 .all-cate-sub').stop().hide();
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
  var sw_coll_new = new Swiper('.sw-coll-new', {
    spaceBetween: 50,
    speed: 1000,
    navigation: {
      prevEl: '.sw-coll-new__prev',
      nextEl: '.sw-coll-new__next',
    },
    scrollbar: {
      el: '.sw-coll-new__sb',
      hide: false,
    },
    observer: true,
    observeParents: true,
  });

  var sw_coll_reco = new Swiper('.sw-coll-reco', {
    spaceBetween: 50,
    speed: 1000,
    navigation: {
      prevEl: '.sw-coll-reco__prev',
      nextEl: '.sw-coll-reco__next',
    },
    scrollbar: {
      el: '.sw-coll-reco__sb',
      hide: false,
    },
    observer: true,
    observeParents: true,
  });

  $('.coll__menu-new').click(function () {
    $(this).addClass('coll__menu--focused');
    $('.coll-new-swiper').show();
    $('.sw-coll-new__prev').show();
    $('.sw-coll-new__next').show();
    $('.sw-coll-new__sb').show();
    $('.coll__menu-reco').removeClass('coll__menu--focused');
    $('.coll-reco-swiper').hide();
    $('.sw-coll-reco__prev').hide();
    $('.sw-coll-reco__next').hide();
    $('.sw-coll-reco__sb').hide();
  });

  $('.coll__menu-reco').click(function () {
    $(this).addClass('coll__menu--focused');
    $('.coll-reco-swiper').show();
    $('.sw-coll-reco__prev').show();
    $('.sw-coll-reco__next').show();
    $('.sw-coll-reco__sb').show();
    $('.coll__menu-new').removeClass('coll__menu--focused');
    $('.coll-new-swiper').hide();
    $('.sw-coll-new__prev').hide();
    $('.sw-coll-new__next').hide();
    $('.sw-coll-new__sb').hide();
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