$(function () {

  // function placeholder dalete on focus
  $('input,textarea').on('focus', function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
  });
  $('input,textarea').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
  // video button event
  $('.promo__video-button').on('click', function () {
    $('.promo__video-wrap').css('display', 'block');
    $("body").css("overflow-y", "hidden");
  });


  $('.promo__video-close, .promo__video-wrap').on('click', function () {
    $('.promo__video-wrap').css('display', 'none');
    $("body").css("overflow-y", "auto");
  });

  // burger code
  $('.burger').on('click', function () {
    $(this).toggleClass('burger--active');
    $('.header__navigation').toggleClass('header__navigation--active');
  });

});