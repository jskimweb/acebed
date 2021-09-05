$(document).ready(function() {
  $('.go-top').click(function() {
      var body_top = $('body').offset().top;
      $('html, body').animate({
          scrollTop: body_top,
      });
  });

  $(window).scroll(function() {
    var scT = $(window).scrollTop();
    if(scT > 0) {
      $('.go-top').addClass('go-top-show');
    }
    else {
      $('.go-top').removeClass('go-top-show');
    }
  });

  $(window).scroll(function() {
    var scT = $(window).scrollTop();
    var hgt = $(window).height();
    var footer_top = $('.footer').offset().top;
    if(scT + hgt >= footer_top) {
      $('.side-btn').addClass('side-btn-abs');
    }
    else {
      $('.side-btn').removeClass('side-btn-abs');
    }
  });

  $('.coll__menu-new').click(function() {
    $('.coll__menu-new').addClass('coll__menu--focused');
    $('.coll__menu-reco').removeClass('coll__menu--focused');
    $('.coll-new-swiper').show();
    $('.coll-reco-swiper').hide();
  });

  $('.coll__menu-reco').click(function() {
    $('.coll__menu-new').removeClass('coll__menu--focused');
    $('.coll__menu-reco').addClass('coll__menu--focused');
    $('.coll-new-swiper').hide();
    $('.coll-reco-swiper').show();
  });

  $('.family__btn').click(function() {
    $('.family-link-box').show();
  });

  $('.family__close-btn').click(function() {
    $('.family-link-box').hide();
  })
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
      el: '.sw-sci__pg',
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
      el: '.sw-coll__sb',
    },
    navigation: {
      prevEl: '.sw-coll__prev',
      nextEl: '.sw-coll__next',
    },
    observer: true,
    observeParents: true,
  });

  var sw_news = new Swiper('.sw-news', {
    pagination: {
      el: '.sw-news__pg',
      clickable: true,
    },
  });
};