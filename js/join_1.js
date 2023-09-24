$(document).ready(function(){

    // 체크박스 전체 선택
  $(".checkbox_group").on("click", "#check_all", function () {
    $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
    
    //전체 선택 클릭 시에도 버튼 활성화 
    $("input.essential").on("change", function() {
      let allChecked = true;
      $("input.essential").each(function() {
        if (!$(this).prop("checked")) {
          allChecked = false;
        }
      });
  
      if (allChecked) {
        $("input[type='submit']").removeAttr("disabled").addClass('on');
      } else {
        $("input[type='submit']").attr("disabled", "disabled").removeClass('on');
      }
    });
    $(".essential").trigger("change"); 
  });
  // 체크박스 개별 선택
  $(".checkbox_group").on("click", ".normal", function() {
    var is_checked = true;

    $(".checkbox_group .normal").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });

    $("#check_all").prop("checked", is_checked);
  });


  /* 필수 항목 체크 시 버튼 활성화 */
  $("input.essential").on("change", function() {
    let allChecked = true;
    $("input.essential").each(function() {
      if (!$(this).prop("checked")) {
        allChecked = false;
      }
    });

    if (allChecked) {
      $("input[type='submit']").removeAttr("disabled").addClass('on');
    } else {
      $("input[type='submit']").attr("disabled", "disabled").removeClass('on');
    }
  });
  $(".essential").trigger("change"); // 초기 상태 설정

}); /* 제이쿼리 마침 */

