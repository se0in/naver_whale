$(document).ready(function(){
  
  //input 클릭 시 border color 변경
  $(".login_box__id_box input").focus(function(){
    $(this).parents('.login_input_wrap').css({ borderColor : '#42cfc7' , zIndex : '1' });
  }).blur(function(){ //포커스잃으면 이벤트 발생
    $(this).parents('.login_input_wrap').css({ border : '1px solid #dadada' , zIndex : '0' })
  });

  //아이콘 변경
  //아이디 입력
  $(".login_box__id_box .id_input_wrap input").focus(function(){
    $('.id_input__icon').css({'background-position-x': '-102px'});
  }).blur(function(){
    $('.id_input__icon').css({'background-position-x': '-85px'});
  });

  //비밀번호 입력
  $(".login_box__id_box .pw_input_wrap input").focus(function(){
    $('.pw_input__icon')
    .css({
      'background-position-x': '-170px',
      'background-position-y': '-168px'
    });
  }).blur(function(){
    $('.pw_input__icon').css({
      'background-position-x': '-107px',
      'background-position-y': '-210px'
    });
  });

  // 키보드 입력 시 x_button 표시
  $(".login_box__id_box .login_input_wrap").keydown(function(){
    $(this).find('.x_button').css({ display : 'block' });
  });

// X button 클릭 시 입력 내용 사라짐 및 x button 숨기기
  $('.login_input_wrap .id_input_wrap .x_button').click(function(){
    $('#id').val('');
    $(this).css({ display : 'none' });
  });
  $('.login_input_wrap .pw_input_wrap .x_button').click(function(){
    $('#pw').val('');
    $(this).css({ display : 'none' });
  });
  
  // show 클릭 시 비밀번호 보임
  $('.show').on('click',function(){
    if ($("#pw").attr("type") == "password") {
      $("#pw").attr("type", "text");
      $($(this)).text("HIDE");
    } else {
      $("#pw").attr("type", "password");
      $($(this)).text("SHOW");
    }
    });

//탭메뉴
$('.login_box .login_box__title').click(function(){
  $('.login_box .login_box__title').removeClass('tabOn');
  $(this).addClass('tabOn');
  $('.login_box .login_box_common').removeClass('contentOn');
  $(this).next('.login_box .login_box_common').addClass('contentOn');
});

//qr탭메뉴 상단 안내풍선 x 버튼 클릭 시 사라짐
$('.login_box__qr_inform .login_box__qr_inform_x').click(function(){
  $(this).parent('.login_box__qr_inform').css({ display : 'none' });
});
  
}); /* 제이쿼리 마침 */


// 타이머
let time = 600; //기준 시간
let min = ""; // 분 
let sec = ""; //초

//setInterval(함수, 시간) : 주기적인 실행
let x = setInterval(function() {
  //parseInt() : 정수를 반환
let min = parseInt(time/200); //몫을 계산
let sec = time%60; //:나머지를 계산

  document.getElementById("timer").innerHTML = min + '분' + " " + sec + '초';
  time--;

//타임아웃 시 
  if (time < 0) {
    clearInterval(x); //setInterval() 실행을 끝냄
    document.getElementById("timer").innerHTML = "시간초과";
  }
}, 1000);