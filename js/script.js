window.onload = function () {
	// AOS
	AOS.init({
		duration: 1600,
		once: true,
	});

  // header show & hide
  let lastScrollTop = 0;
  $(window).scroll(function () {
    nowScrollTop = $(window).scrollTop();
    if (lastScrollTop < nowScrollTop) {
      $('.header').addClass('header--scr-hide');
      $('.header').removeClass('header--scr-show');
    } else {
      if (nowScrollTop == 0) {
        $('.header').removeClass('header--scr-show');
      } else {
        $('.header').addClass('header--scr-show');
        $('.header').removeClass('header--scr-hide');
      }
    }
    lastScrollTop = nowScrollTop;
  });

  // gnb hover
  $('.gnb01').find('.dep01 a').hover(function () {
    $('.header').addClass('hover');
    $('.gnb01').find('.dep01 a span').hide();
    $('.gnb01').find('.dep01 a span:last-child').show();
    $('.gnb01').find('.dep02').show();
  }, function () {
    $('.header').removeClass('hover');
    $('.gnb01').find('.dep01 a span').show();
    $('.gnb01').find('.dep01 a span:last-child').hide();
    $('.gnb01').find('.dep02').hide();
  });

  $('.gnb02').find('.dep01 a').hover(function () {
    $('.header').addClass('hover');
    $('.gnb02').find('.dep02').show();
  }, function () {
    $('.header').removeClass('hover');
    $('.gnb02').find('.dep02').hide();
  });

  // srch open & close
  $('.srch > .srch__btn').click(function () {
    $('.srch-area').slideDown();
    $('.black-bg').fadeIn(500);
  });
  $('.srch__close').click(function () {
    $('.srch-area').slideUp();
    $('.black-bg').fadeOut(500);
  });

  // all open & close
  $('.all__btn').click(function () {
    $('.all-area').addClass('all-area--open');
    $('html,body').css('overflow', 'hidden');
  });
  $('.all__close').click(function () {
    $('.all-area').removeClass('all-area--open');
    $('html,body').css('overflow', 'initial');
  });

  // all-cate hover
  let allCate = [$('.all-cate-1'), $('.all-cate-2'), $('.all-cate-3'), $('.all-cate-4')];
  $.each(allCate, function (index) {
    allCate[index].find('.all-cate-main>span').hover(function () {
      allCate[index].find('.all-cate-img').css('opacity', '1');
      allCate[index].find('.all-cate-img img').css('transform', 'scale(1)');
      allCate[index].find('.all-cate__line>span').css('width', '100%');
      allCate[index].find('.all-cate-sub').stop().fadeIn(400);
    }, function () {
      $('.all-cate .all-cate-img').css('opacity', '0');
      allCate[0].find('.all-cate-img').css('opacity', '1');
      allCate[index].find('.all-cate-img img').css('transform', 'scale(1.07)');
      allCate[index].find('.all-cate__line>span').css('width', '0');
      allCate[index].find('.all-cate-sub').stop().hide();
    });
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
  let sw_sci = new Swiper('.sw-sci', {
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
            $('.sw-sci__pg01').addClass('sw-sci__pg--focused');
            $('.sci-txt-wrap p').removeClass('sci__txt--show');
            // $('.sci-txt-wrap01 p').css('transform', 'translateY(10rem)');
            $('.sci-txt-wrap01 p').addClass('sci__txt--show');
            break;
          case 1:
            $('.sw-sci__pg').removeClass('sw-sci__pg--focused');
            $('.sw-sci__pg02').addClass('sw-sci__pg--focused');
            $('.sci-txt-wrap p').removeClass('sci__txt--show');
            // $('.sci-txt-wrap02 p').css('transform', 'translateY(10rem)');
            $('.sci-txt-wrap02 p').addClass('sci__txt--show');
            break;
          case 2:
            $('.sw-sci__pg').removeClass('sw-sci__pg--focused');
            $('.sw-sci__pg03').addClass('sw-sci__pg--focused');
            $('.sci-txt-wrap p').removeClass('sci__txt--show');
            // $('.sci-txt-wrap03 p').css('transform', 'translateY(10rem)');
            $('.sci-txt-wrap03 p').addClass('sci__txt--show');
            break;
          default:
            $('.sw-sci__pg').removeClass('sw-sci__pg--focused');
            $('.sw-sci__pg04').addClass('sw-sci__pg--focused');
            $('.sci-txt-wrap p').removeClass('sci__txt--show');
            // $('.sci-txt-wrap04 p').css('transform', 'translateY(10rem)');
            $('.sci-txt-wrap04 p').addClass('sci__txt--show');
        }
      }
    },
  });

  // ace science slide pagination
  let sciPg = [$('.sw-sci__pg01'), $('.sw-sci__pg02'), $('.sw-sci__pg03'), $('.sw-sci__pg04')];

  $.each(sciPg, function (index) {
    sciPg[index].click(function () {
      sw_sci.slideTo(index);
    });
  });

  // ace collection slide
  let sw_coll_new = new Swiper('.sw-coll-new', {
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

  let sw_coll_reco = new Swiper('.sw-coll-reco', {
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

  // ace collection slide show & hide
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
  let sw_news = new Swiper('.sw-news', {
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

  // news slide pagination
  let newsPg = [$('.sw-news__pg-1'), $('.sw-news__pg-2'), $('.sw-news__pg-3')];

  $.each(newsPg, function (index) {
    newsPg[index].click(function () {
      sw_news.slideTo(index);
      $('.sw-news__pg').removeClass('sw-news__pg--focused');
      newsPg[index].addClass('sw-news__pg--focused');
    });
  });

  // side-btn fix
  $(window).scroll(function () {
    let sT = $(window).scrollTop();
    let winHeight = $(window).height();
    let footerTop = $('.footer').offset().top;
    if (sT + winHeight >= footerTop) {
      $('.side-btn').addClass('side-btn--abs');
    } else {
      $('.side-btn').removeClass('side-btn--abs');
    }
  });

  // Go-top
  $('.go-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    });
  });

  $(window).scroll(function () {
    let sT = $(window).scrollTop();
    if (sT > 0) {
      $('.go-top').addClass('go-top-show');
    } else {
      $('.go-top').removeClass('go-top-show');
    }
  });

  // Family open
  $('.family__btn').click(function () {
    $('.family-link-box').show();
  });

  $('.family__close-btn').click(function () {
    $('.family-link-box').hide();
  })
};