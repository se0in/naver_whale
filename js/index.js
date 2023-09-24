$(document).ready(function(){
  
  /* mb menu event */
  $('header .mb_header .hamburger').click(function(){
    $('header .mb_header .mb_menu_dark').css({display : 'block'});
  });
  $('header .mb_header .mb_menu_dark .mb_menu .menu_close').click(function(){
    $('header .mb_header .mb_menu_dark').css({display : 'none'});
  });

  /* #features tab event*/
  $('#features .item').click(function(){
    $('.item').removeClass('features_on');
    $(this).addClass('features_on');

    $('.title_text').removeClass('rainbow_text');
    $(this).find('.title_text').addClass('rainbow_text');
  });

  /* #adoption flip event */
    $(document).ready(function() {
      $(window).scroll(function() {
        let scrollHeight = 400;
        let currentScroll = $(this).scrollTop();

        $('#adoption .adoption_inner .item_container .item_wrap').children('.item_img').each(function() {
          if ($(this).offset().top <= currentScroll + scrollHeight) {
            $(this).css({animationName: 'flip',});
          } else {
            $(this).css({animationName: 'none',});
          }
        });
      });
    });
}); /* 제이쿼리 마침 */
