window.onload = function () {
  // AOS
  AOS.init({
    duration: 1000,
    once: true,
  });

  // gnb hover
  const header = $('.header');
  const gnb01 = $('.gnb01');
  const gnb02 = $('.gnb02');
  const logo = $('.header__logo');

  gnb01.find('.dep01 a').mouseenter(function () {
    header.addClass('hover');
    gnb01.find('.dep01 a span').hide();
    gnb01.find('.dep01 a span:last-child').show();
    gnb01.find('.dep02').show();
    logo.stop().fadeOut(400);
  });
  gnb01.mouseleave(function () {
    header.removeClass('hover');
    gnb01.find('.dep01 a span').show();
    gnb01.find('.dep01 a span:last-child').hide();
    gnb01.find('.dep02').hide();
    logo.stop().fadeIn(400);
  });

  gnb02.find('.dep01 a').mouseenter(function () {
    header.addClass('hover');
    gnb02.find('.dep02').show();
    logo.stop().fadeOut(400);
  });
  gnb02.mouseleave(function () {
    header.removeClass('hover');
    gnb02.find('.dep02').hide();
    logo.stop().fadeIn(400);
  });

  // srch open & close
  const srchBtn = $('.srch > .srch__btn');
  const srchClose = $('.srch__close');
  const srchArea = $('.srch-area');
  const blackBg = $('.black-bg');

  srchBtn.click(function () {
    srchArea.stop().slideDown();
    blackBg.stop().fadeIn(500);
  });
  srchClose.click(function () {
    srchArea.stop().slideUp();
    blackBg.stop().fadeOut(500);
  });

  // all open & close
  const allBtn = $('.all__btn');
  const allClose = $('.all__close');
  const allArea = $('.all-area');
  const allAreaOpen = 'all-area--open';

  allBtn.click(function () {
    allArea.addClass(allAreaOpen);
    $('html, body').css('overflow', 'hidden');
  });
  allClose.click(function () {
    allArea.removeClass(allAreaOpen);
    $('html, body').removeAttr('style');
  });

  // all-cate hover
  const allCate = $('.all-cate');
  const allCates = [$('.all-cate01'), $('.all-cate02'), $('.all-cate03'), $('.all-cate04')];

  $.each(allCates, function (index) {
    allCates[index].find('.all-cate-main>span').mouseenter(function () {
      allCates[index].find('.all-cate-img').css('opacity', '1');
      allCates[index].find('.all-cate-img img').css('transform', 'scale(1)');
      allCates[index].find('.all-cate-txt').css('z-index', '99');
      allCates[index].find('.all-cate-main>span').css('opacity', '1');
      allCates[index].find('.all-cate__line>span').css('width', '100%');
      allCates[index].find('.all-cate-sub').stop().show();
    });
    allCates[index].find('.all-cate-txt').mouseleave(function () {
      allCate.find('.all-cate-img').removeAttr('style');
      allCates[index].find('.all-cate-img img').removeAttr('style');
      $(this).removeAttr('style');
      allCates[index].find('.all-cate-main>span').removeAttr('style');
      allCates[index].find('.all-cate__line>span').removeAttr('style');
      allCates[index].find('.all-cate-sub').stop().hide();
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
  const swSciPg = $('.sw-sci__pg');
  const swSciPgs = [$('.sw-sci__pg01'), $('.sw-sci__pg02'), $('.sw-sci__pg03'), $('.sw-sci__pg04')];
  const swSciPgFocus = 'sw-sci__pg--focused';
  const sciTxt = $('.sci-txt-wrap p');
  const sciTxtshow = 'sci__txt--show';

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
            swSciPg.removeClass(swSciPgFocus);
            swSciPgs[0].addClass(swSciPgFocus);
            sciTxt.removeClass(sciTxtshow);
            $('.sci-txt-wrap01 p').addClass(sciTxtshow);
            break;
          case 1:
            swSciPg.removeClass(swSciPgFocus);
            swSciPgs[1].addClass(swSciPgFocus);
            sciTxt.removeClass(sciTxtshow);
            $('.sci-txt-wrap02 p').addClass(sciTxtshow);
            break;
          case 2:
            swSciPg.removeClass(swSciPgFocus);
            swSciPgs[2].addClass(swSciPgFocus);
            sciTxt.removeClass(sciTxtshow);
            $('.sci-txt-wrap03 p').addClass(sciTxtshow);
            break;
          default:
            swSciPg.removeClass(swSciPgFocus);
            swSciPgs[3].addClass(swSciPgFocus);
            sciTxt.removeClass(sciTxtshow);
            $('.sci-txt-wrap04 p').addClass(sciTxtshow);
        }
      }
    },
  });

  $.each(swSciPgs, function (index) {
    swSciPgs[index].click(function () {
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
      el: '.sw-coll-new__bar',
      hide: false,
    },
    observer: true,
    observeParents: true,
    updateOnWindowResize: true,
  });

  let sw_coll_reco = new Swiper('.sw-coll-reco', {
    spaceBetween: 50,
    speed: 1000,
    navigation: {
      prevEl: '.sw-coll-reco__prev',
      nextEl: '.sw-coll-reco__next',
    },
    scrollbar: {
      el: '.sw-coll-reco__bar',
      hide: false,
    },
    observer: true,
    observeParents: true,
    updateOnWindowResize: true,
  });

  // ace collection slide show & hide
  const collMenuFocus = 'coll__menu--focused';

  const collMenuNew = $('.coll__menu-new');
  const collNewSw = $('.coll-new-swiper');
  const swCollNewPrev = $('.sw-coll-new__prev');
  const swCollNewNext = $('.sw-coll-new__next');
  const swCollNewBar = $('.sw-coll-new__bar');

  const collMenuReco = $('.coll__menu-reco');
  const collRecoSw = $('.coll-reco-swiper');
  const swCollRecoPrev = $('.sw-coll-reco__prev');
  const swCollRecoNext = $('.sw-coll-reco__next');
  const swCollRecoBar = $('.sw-coll-reco__bar');

  const swCollBarShow = 'sw-coll__bar--show';

  collMenuNew.click(function () {
    $(this).addClass(collMenuFocus);
    collNewSw.show();
    swCollNewPrev.show();
    swCollNewNext.show();
    swCollNewBar.addClass(swCollBarShow);
    collMenuReco.removeClass(collMenuFocus);
    collRecoSw.hide();
    swCollRecoPrev.hide();
    swCollRecoNext.hide();
    swCollRecoBar.removeClass(swCollBarShow);
  });

  collMenuReco.click(function () {
    $(this).addClass(collMenuFocus);
    collRecoSw.show();
    swCollRecoPrev.show();
    swCollRecoNext.show();
    swCollRecoBar.addClass(swCollBarShow);
    collMenuNew.removeClass(collMenuFocus);
    collNewSw.hide();
    swCollNewPrev.hide();
    swCollNewNext.hide();
    swCollNewBar.removeClass(swCollBarShow);
  });

  // news slide
  const swNewsPg = $('.sw-news__pg');
  const swNewsPgs = [$('.sw-news__pg01'), $('.sw-news__pg02'), $('.sw-news__pg03')];
  const swNewsPgFocus = 'sw-news__pg--focused';

  let sw_news = new Swiper('.sw-news', {
    speed: 1000,
    on: {
      slideChange: function () {
        switch (sw_news.realIndex) {
          case 0:
            swNewsPg.removeClass(swNewsPgFocus);
            swNewsPgs[0].addClass(swNewsPgFocus);
            break;
          case 1:
            swNewsPg.removeClass(swNewsPgFocus);
            swNewsPgs[1].addClass(swNewsPgFocus);
            break;
          default:
            swNewsPg.removeClass(swNewsPgFocus);
            swNewsPgs[2].addClass(swNewsPgFocus);
        }
      }
    },
  });

  $.each(swNewsPgs, function (index) {
    swNewsPgs[index].click(function () {
      sw_news.slideTo(index);
      swNewsPg.removeClass(swNewsPgFocus);
      swNewsPgs[index].addClass(swNewsPgFocus);
    });
  });

  // navigation svg motion
  const swPrev = [$('.sw-main__prev'), $('.sw-sci__prev'), $('.sw-coll-new__prev'), $('.sw-coll-reco__prev')];
  const swNext = [$('.sw-main__next'), $('.sw-sci__next'), $('.sw-coll-new__next'), $('.sw-coll-reco__next')];
  const swBtnDisabled = $('.swiper-button-disabled');

  $.each(swPrev, function (index) {
    swPrev[index].hover(function () {
      if ($(this).hasClass('swiper-button-disabled')) return false;
      $(this).find('path').attr('d', 'M 40 10 Q 10 65 40 140');
    }, function () {
      $(this).find('path').attr('d', 'M 40 10 Q 40 65 40 140');
    });
  });

  $.each(swNext, function (index) {
    swNext[index].hover(function () {
      if ($(this).hasClass('swiper-button-disabled')) return false;
      $(this).find('path').attr('d', 'M 10 10 Q 40 65 10 140');
    }, function () {
      $(this).find('path').attr('d', 'M 10 10 Q 10 65 10 140');
    });
  });

  // go-top
  const goTop = $('.go-top');

  goTop.click(function () {
    $('html, body').animate({
      scrollTop: 0
    });
  });

  // family show & hide
  const famBtn = $('.family__btn');
  const famCloseBtn = $('.family__close-btn');
  const famLinkBox = $('.family-link-box');

  famBtn.click(function () {
    famLinkBox.show();
  });
  famCloseBtn.click(function () {
    famLinkBox.hide();
  });

  // quick show & hide
  const quickBtn = $('.quick-btn');
  const quickClose = $('.quick__close');
  const quick = $('.quick');
  const quickShow = 'quick--show';

  quickBtn.click(function () {
    quick.addClass(quickShow);
    blackBg.stop().fadeIn(500);
    header.css('z-index', '99');
  });
  quickClose.click(function () {
    quick.removeClass(quickShow);
    blackBg.stop().fadeOut(500);
    header.removeAttr('style');
  });

  // scroll
  let lastScrTop = 0;
  const headerScrHide = 'header--scr-hide';
  const headerScrShow = 'header--scr-show';

  const footerTop = $('.footer').offset().top;
  const winHeight = $(window).height();
  const sideBtn = $('.side-btn');
  const sideBtnAbs = 'side-btn--abs';

  const goTopShow = 'go-top--show';

  $(window).scroll(function () {
    // header show & hide
    let winScrTop = $(window).scrollTop();
    if (lastScrTop < winScrTop) {
      header.addClass(headerScrHide);
      header.removeClass(headerScrShow);
    } else {
      if (winScrTop == 0) {
        header.removeClass(headerScrShow);
      } else {
        header.addClass(headerScrShow);
        header.removeClass(headerScrHide);
      }
    }
    lastScrTop = winScrTop;

    // side-btn absolute
    if (footerTop <= winScrTop + winHeight) {
      sideBtn.addClass(sideBtnAbs);
    } else {
      sideBtn.removeClass(sideBtnAbs);
    }

    // go-top show & hide
    if (winScrTop > 0) {
      goTop.addClass(goTopShow);
    } else {
      goTop.removeClass(goTopShow);
    }
  });
};