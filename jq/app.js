/**
 * Created by 韩吉鑫 on 2017/7/18.
 */
// console.log($("#aa").css("color","red"));
// console.log($("#aa p").css("color","blue"));

/*
* jq :简单化掉了操作步骤
*既然时使用了jq就不要使用js
* jQuery中获取dom 方法
* jQuery不是dom
*jQuery对象是类似于数组的对象；不是真正的数组
* 
* jQuery的对象的放法 只能由jQuery调用
* */

/*(function () {
    function OBJ() {

    }
    OBJ.prototype.click=function (callback) {

        for(var i=0;i<this.length;i++){
        this[i].onclick=function () {
            callback();
        } }
        return this;

    };
    OBJ.prototype.text = function (value) {
        if (value){
            for (key in this){
                //如果属性名 是一个 数字 -> dom元素
                if (/\d/g.exec(key)){
                    //this[key] 可以获得到每一个dom元素
                    this[key].textContent = value;
                }
            }
            return this;
        }else {

            var content = "";
            for (key in this){
                if (/\d/g.exec(key)){
                    content += this[key].textContent;
                }
            }

            return content;
        }
    };

    OBJ.prototype.text=function (callback) {
        if (typeof callback=="funtion")
        {
        for(var i=0;i<this.length;i++){
            this[i].textContent=callback();

        }
        }
        else{
            if (arguments.length==1){
            for(var i=0;i<this.length;i++){


                this[i].textContent=callback;
                }return this;
                }
                else {
                var content="";
                for(var i=0;i<this.length;i++){

                     content+=this[i].textContent;
               }
               return content;
            }


        }
    }
    function HAN(selector) {
          var dom=document.querySelectorAll(selector);
          var obj=new OBJ();
          for (key in dom){
           if (/\d/g.exec(key))

            obj[key]=dom[key];
              obj.length=dom.length;
          }
    return  obj;
    }

    window.HAN=window.$$=HAN;
    console.log($$("div").click(function () {
        alert("点击成功");
        // $$("div");
        // console.log($$("div").text());
    }).text("5555"));
    console.log($$("div").text());

})();*/
$(".right").css("display","none");
var num=0;
$(".creat").click(function () {
    console.log($(".title").val());
    console.log($(".text").val());
    var datas= new Date();

     num++;
     var data="";
     data=datas.getFullYear()+"年"+(datas.getMonth()+1)+"月"+datas.getDate()+"日"+datas.toLocaleTimeString();
    console.log( data);
    if($(".title").val()!=""){
     var div=$("<div>"+"<h6>标题："+$(".title").val()+"</h6>"+"<p>"+$(".text").val()+"</p>"+"<p>"+data+"</p>");
     var button =$("<button class='delete'>删除"+"</button>");
     $(".right").css("display","block");
    $(".right").append(div);

     $(".right div").eq(num-1).append(button);
     button.click(function () {
         num=num-1;
            div.remove();
        })
    $(".title").val("");
    $(".text").val("");

    }
   else {
        alert("亲输入标题后在保存")
    }

    // for( var i=0;i<=$(".delete").length;i++){
    //     console.log($(".delete").length);
    //
    //     $(".delete").eq(i-1).click(function () {
    //
    //         $(".delete").eq(i-1).parent().remove();
    //
    //
    //     })}

});
Date.toDBnum=function (num) {
   return num>10?num+"":"0"+num;
}
Date.prototype.getTimeString=function () {
    var mmnum=this.getMonth()+1;
    var mm=Date.toDBnum(mmnum);
    var dnum=Date.toDBnum(this.getDate());
    var hour=Date.toDBnum(this.getHours());
    var hh

}