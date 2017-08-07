/**
 * Created by 韩吉鑫 on 2017/7/19.
 */

// function css() {
//    $(".content").click(function () {
//
//       setTimeout(function () {
//           $(this) .css("color","red");
//           alert( $(this) .css("color"));
//       }.bind(this),3000)
//    })
// }
//
// function event() {
//     $(".content").hover(function () {
//          $(this).css("background","yellow")
//     },function () {
//         $(this).css("background","blue")
//     })
//     $(".content").on("dblclick",function () {
//         alert("shuangji ");
//     }
// }
// event();
// // addEventListener()给某个元素添加事件间听者
// /**
//  * div onclick
//  */
// function lister() {
//         $ (".content").on("click",function () {
//             alert(1);
//         })
// }
// lister();
// $(".content").css("background","red").slideToggle(2000);
// $(".content").nextAll().addBack().css("background","red");
// function ajax() {
//     $.get("http://route.showapi.com/955-1",{
//         showapi_appid:"42238",
//         showapi_sign:"01abfedfe161472ca338b8d30e100e12",
//          type:"dp",
//         page:"1"
//     },function (result) {
//         console.log(result)
//     })
// }
// // ajax();
// $(".control").click(function () {
    // $(".content").hide(3000,"swing",function () {
    //     $(this).show("slow","swing");
    // });
 $("li").click(function () {

     $(".content li").prevAll().stop().animate({"width":"90px"},{
         queue:false,
         duration:300
     }).children("img").stop().animate({"left":"-60px"},{
         queue:false,
         duration:300
     });
     $(".content li").nextAll().stop().animate({"width":"90px"},{
         queue:false,
         duration:300
     }).children("img").stop().animate({"left":"-60px"},{
         queue:false,
         duration:300
     });

     $(this).stop().animate({
         "width":"180px"

     },{
         queue:false,
         duration:300
     }).children("img").stop().animate({"left":"0"},{
         queue:false,
         duration:300
     })
 })