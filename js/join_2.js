$(document).ready(function(){
  $('.show').on('click',function(){
    if ($("#pw").attr("type") == "password") {
      $("#pw").attr("type", "text");
      $($(this)).text("HIDE");
    } else {
      $("#pw").attr("type", "password");
      $($(this)).text("SHOW");
    }
    });

}); /* 제이쿼리 마침 */

