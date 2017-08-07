/**
 * Created by 韩吉鑫 on 2017/7/20.
 */
//下拉菜单
$(".down-meau").hide();
$(".click-down .down-title").click(function () {
    $(".click-down .down-title").css("background","deepskyblue");
    // $(this).css("background","#f60");

    $(this).next(".down-meau").stop().slideToggle(500);
    $(".click-down .down-title").not(this).next(".down-meau").hide();
})