/**
 * Created by 韩吉鑫 on 2017/7/19.
 */
$(".list img").click(function () {
    console.log(this);
    $(this).animate({"width":"200px"},{
        queue:false,
        duration:1000
    });
    $(this).prevAll().animate({"width":"100px"},{
        queue:false,
        duration:1000
    });

    $(this).nextAll().animate({"width":"100px"},{
        queue:false,
        duration:1000
    });

})

$(".down-meau").hide();
$(".click-down span").click(function () {



    $(".click-down span").css("background","deepskyblue");
    // $(this).css("background","#f60");

        $(this).next(".down-meau").stop().slideToggle(500);
    $(".click-down span").not(this).next(".down-meau").hide();
})
// function AccordionITemsView(obj) {
//     this.obj=obj;
// }
// AccordionITemsView.prototype.view=function () {
//     var itemView =$("<li></li>")
//     var headView =$("<h3 class='head'></h3>");
//     var bodyView =$("<div class='body'></div>");
//     return $();
// }
// AccordionITemsView.prototype.action=function () {
//     this.bodyView.parent().
//
//
// }
// AccordionITemsView.prototype.init=function () {
//           var container=$("<ul></ul>")
//     this.datas.forEach(function (p1, p2, p3) {
//         var itemView=new AccordionITemsView(p1);
//         container.append(itemView.view())
//     })
//
// }
