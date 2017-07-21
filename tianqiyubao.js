/**
 * Created by 韩吉鑫 on 2017/7/14.
 */

/**
 * 天气预报
 *
 * @constructor
 */
  var  nameserach=document.querySelector("#ipserch");
  var  placename=document.querySelector("#input1");
  var  ipserach=document.querySelector("#ipserch2");
  var container=document.querySelector(".container");
  var jingdianserach=document.querySelector("#ipserch3");
  var youbianserach=document.querySelector("#ipserch4");
  var jingwei=document.querySelector("#ipserch5");
  var hourforecast=document.querySelector("#ipserch6");
  var dayforecast=document.querySelector("#ipserch7");
  var histry=document.querySelector("#ipserch8");
  var   placeID=document.querySelector("#ipserch9");
function FunnyStory() {

}
FunnyStory.HOST="http://route.showapi.com/";
FunnyStory.GETSTORY="9-2";
FunnyStory.prototype.loadData=function (getstory,mode) {
    var GETSTORY=getstory;
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff";
    var request= new XMLHttpRequest();
    var area=mode+placename.value;

    request.open("get",FunnyStory.HOST+GETSTORY+"?"+parm+"&"+area+"&needIndex=1"+"&needMoreDay=1");

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body;
            console.log(datas);
            var time=datas.time;
            var year=time.slice(0,4);
            var month=time.slice(4,6);
            var day=time.slice(6,8);
            var hour=time.slice(8,10);
            var minute=time.slice(10,12);
            var date=year+"年"+month+"月"+day+"日"+hour+":"+minute;
            var city=datas.cityInfo;
            var index=datas.indexInfo;
            var data=[];
            var f1=datas.f1;

            for (var x in city)
            {   data.push(city[x]);
            }
            for (var x in f1)
            {   data.push(f1[x]);
            }
            var content="";
            // data.forEach(function (p1, p2, p3) {
            //     console.log(p1);
            //     content+=p1+"<br/>";
            //
            // })
            content="<h2>"+city.c9+city.c7+city.c5+"<h2/>"+"<p>"+"<img src='"+f1.day_weather_pic+"'/>"+"<br/>"+"白天天气："+f1.day_weather+"<br/>白天温度："+f1.day_air_temperature 	+"</p>"+"<p>"+"<img src='"+f1.night_weather_pic+"'/>"+"<br/>"+"晚上天气："+f1.night_weather+"<br/>晚上温度："+f1.night_air_temperature 	+"</p>"+"<p>"+"日出日落时间"+f1.sun_begin_end+"</p>"+"<p>"+date+"</p>";

            container.innerHTML=content;
     }
    };
    request.send();
}
FunnyStory.prototype.loadData2=function (getstory,mode,me) {
    var GETSTORY=getstory;
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff&";
    var request= new XMLHttpRequest();
    var area=mode;
    var me=me;
    request.open("get",FunnyStory.HOST+GETSTORY+"?"+parm+area+me);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body;
            console.log(datas);
            var time=datas.time;
            var year=time.slice(0,4);
            var month=time.slice(4,6);
            var day=time.slice(6,8);
            var hour=time.slice(8,10);
            var minute=time.slice(10,12);
            var date=year+"年"+month+"月"+day+"日"+hour+":"+minute;

            var city=datas.cityInfo;
            var index=datas.indexInfo;
            var data=[];
            var f1=datas.f1;

            for (var x in city)
            {   data.push(city[x]);
            }
            for (var x in f1)
            {   data.push(f1[x]);
            }
            var content="";
            // data.forEach(function (p1, p2, p3) {
            //     console.log(p1);
            //     content+=p1+"<br/>";
            //
            // })
            content="<h2>"+city.c9+city.c7+city.c5+"<h2/>"+"<p>"+"<img src='"+f1.day_weather_pic+"'/>"+"<br/>"+"白天天气："+f1.day_weather+"<br/>白天温度："+f1.day_air_temperature 	+"</p>"+"<p>"+"<img src='"+f1.night_weather_pic+"'/>"+"<br/>"+"晚上天气："+f1.night_weather+"<br/>晚上温度："+f1.night_air_temperature 	+"</p>"+"<p>"+"日出日落时间"+f1.sun_begin_end+"</p>"+"<p>"+date+"</p>";

            container.innerHTML=content;
        }
    };
    request.send();
}
FunnyStory.prototype.loadData3=function (getstory,mode,me) {
    var GETSTORY=getstory;
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff&";
    var request= new XMLHttpRequest();
    var area=mode+placename.value;
    var me=me;
    request.open("get",FunnyStory.HOST+GETSTORY+"?"+parm+area);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body;
             var name=datas.area;
             var id=datas.areaid;
             var data= datas.hourList;
             var content="<h2>"+name+id+"</h2>";
             data.forEach(function (p1, p2, p3) {
                 var year=p1.time.slice(0,4);
                 var month=p1.time.slice(4,6);
                 var day=p1.time.slice(6,8);
                 var hour=p1.time.slice(8,10);
                 var minute=p1.time.slice(10,12);
                 var date=year+"年"+month+"月"+day+"日"+hour+":"+minute;

                 content+= "<p>"+"天气编码："+p1.weather_code+"</p>"+"<p>"+"风向："+p1.wind_direction+"</p>"+"<p>"+"风力："+p1.wind_power+"</p>"+"<p>"+"天气："+p1.weather+p1.temperature+"</p>"+"<p>"+"时间："+date+"</p>"
             })



            container.innerHTML=content;
        }
    };
    request.send();
}
FunnyStory.prototype.loadData4=function (getstory,mode,me) {
    var GETSTORY=getstory;
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff&";
    var request= new XMLHttpRequest();
    var area=mode+placename.value;
    var me=me;
    request.open("get",FunnyStory.HOST+GETSTORY+"?"+parm+area);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body;
            data=datas.list;
            var content="";
            data.forEach(function (p1, p2, p3) {
            content+="<p>" +  p1.area+"</p>"+"<p>" +  p1.areaid+"</p>";
            })
            container.innerHTML=content;
        }
    };
    request.send();
}
FunnyStory.prototype.loadData5=function (getstory,mode,me) {
    var GETSTORY=getstory;
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff&";
    var request= new XMLHttpRequest();
    var area=mode+placename.value;
    var me=me;
    request.open("get",FunnyStory.HOST+GETSTORY+"?"+parm+area);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body;
            var name=datas.area;
            data=datas.dayList;
            var content="<h2>"+name+"<h2/>";
            data.forEach(function (p1, p2, p3) {
                content+="<p>"+"<img src='"+p1.day_weather_pic+"'/>"+"<br/>"+"白天天气："+p1.day_weather+"<br/>白天温度："+p1.day_air_temperature 	+"</p>"+"<p>"+"<img src='"+p1.night_weather_pic+"'/>"+"<br/>"+"晚上天气："+p1.night_weather+"<br/>晚上温度："+p1.night_air_temperature 	+"</p>"+"<p>"+p1.daytime+"</p>";
            })
            container.innerHTML=content;
        }
    };
    request.send();
}
FunnyStory.prototype.loadData6=function (getstory,mode,me) {
    var GETSTORY=getstory;
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff&";
    var request= new XMLHttpRequest();
    var area=mode+placename.value;
    var me=me;
    request.open("get",FunnyStory.HOST+GETSTORY+"?"+parm+area+me);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body;
            var name=datas.area;
            data=datas.list;
            var content="<h2>"+name+"<h2/>";
            data.forEach(function (p1, p2, p3) {
                content+="<p>"+"日期："+p1.time+"</p>"+"<p>"+"天气情况："+p1.weather+"</p>"+"<p>"+"最高气温："+p1. max_temperature+"</p>"+"<p>"+"最低气温："+p1. min_temperature+"</p>"+"<p>"+"风向："+p1.wind_direction+"</p>"+"<p>"+"风力："+p1.wind_power+"</p>";

            })
            container.innerHTML=content;
        }
    };
    request.send();
}
FunnyStory.prototype.showStory=function () {

}
var han= new FunnyStory();


nameserach.onclick=function () {
    han.loadData("9-2","area=");
}
ipserach.onclick=function () {
    han.loadData("9-4","id=");
}
jingdianserach.onclick=function () {
    han.loadData("9-6","area=");
}
youbianserach.onclick=function () {
    han.loadData("9-10","post_code=");
}
jingwei.onclick=function () {

       var qqq= placename.value.indexOf(",");
       var len=placename.value.length;
       var lat=placename.value.slice(0,qqq);
       var lng=placename.value.slice(qqq+1,len);
       console.log(lat);
       console.log(lng);
       console.log(qqq);
       han.loadData2("9-5","from=5&lng="+lat,"&lat="+lng);
}
hourforecast.onclick=function () {
    han.loadData3("9-8","&area=");
}
placeID.onclick=function () {
    han.loadData4("9-3","&area=");

}
dayforecast.onclick=function () {
    var p=document.querySelector("p");

    han.loadData5("9-9","&area=");

}

histry.onclick=function () {

    han.loadData6("9-7","&area=","&month=201707");

}