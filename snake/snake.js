/**
 * Created by 韩吉鑫 on 2017/7/22.
 */

function Snake() {
   this.init();



}
Snake.prototype.addviwe=function (x,y) {
    //创建窗口
    $("#table").empty();

    for(var i=0;i<x;i++){
        $("#table").append("<tr id='tr"+i+"'></tr>");
        console.log(i);
        for(var j=0;j<y;j++){
            $("#tr"+i).append("<td id='"+i+"td"+j+"'></td>");
        };
    }}
Snake.prototype.addsnake=function (a,b) {
    //创建蛇身
    $("#"+b).attr("class","snakehead");
    for(var i=0;i<a.length;i++) {
        $("#" + a[i]).attr("class", "snakebody");
    }
}
Snake.prototype.addfood=function () {
    //食物随机出现
       var foodx=Math.floor(Math.random()*20);
       var foody=Math.floor(Math.random()*20);

    for(var i=0;i<body.length;i++) {
        if((foodx+"td"+foody)== body[i]||(foodx+"td"+foody) == head)
        {
            foodx=Math.floor(Math.random()*20);
            foody=Math.floor(Math.random()*20);
        }
         else {
            $("#"+foodx+"td"+foody).attr("class","foot");
        }
        add=foodx+"td"+foody;
            }
   console.log(foodx);
}
Snake.prototype.snakemove=function (e) {
    //开始移动并检查按键
         var a=body.pop();
         $("#"+a).removeClass("snakebody");
         body.unshift(head);
        if(e=="right"){
            head=parseInt(head.split("td")[0])+"td"+(parseInt(head.split("td")[1])+1);
        }if(e=="left"){
            head=parseInt(head.split("td")[0])+"td"+(parseInt(head.split("td")[1])-1);
        }
        if(e=="up"){
            head=(parseInt(head.split("td")[0])-1)+"td"+(parseInt(head.split("td")[1]));
        }
        if(e=="down"){
            head=(parseInt(head.split("td")[0])+1)+"td"+(parseInt(head.split("td")[1]));
        }
        if(head==add){
            body.push(a);
            this.addfood();
        }
            this.send(body,head);
            this.addsnake(body,head);
}
var int=null;
Snake.prototype.send=function (body,head) {
    var a=parseInt(head.split("td")[0]);
    var b=parseInt(head.split("td")[1]);
    if(a<0||a>19||b<0||b>19||body.indexOf(head)>=0){
        this.init();
        window.clearInterval(int);
        $("#start").attr("disabled",false);
    }
}

Snake.prototype.start=function () {
    $("#start").attr("disabled",true);
    var  self=this;
    int =setInterval(function () {
        self.snakemove(e);
    },200);
    document.onkeydown=function (event) {
        var a = event || window.event || arguments.callee.caller.arguments[0];
        if(a.keyCode==37&&e!="right") {
            e = "left";
        }else if(a.keyCode==38&&e!="down"){
            e="up";
        }else if(a.keyCode==39&&e!="left"){
            e="right";
        }else if(a.keyCode==40&&e!="u"){
            e="down";
        }
    }
}
Snake.prototype.init=function () {

    e="right";
    body = [];
    body.unshift("0td0");
    body.unshift("0td1");
    body.unshift("0td2");
    head = "0td3";
    this.addviwe(20,20)
    this.addsnake(body,head);
    this.addfood();
    var self=this;
   $(document).keydown(
       function (evt) {
           if (evt.keyCode==13){
               window.clearInterval(int);
               self.start();

           }
       }
   )
}
    var han = new Snake();
