var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: false,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }

    // 如果需要分页器
    // pagination: '.swiper-pagination',
    //
    // // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
})
var page4=document.querySelector(".page4");
var light_click=document.querySelector(".light-click");
var one=document.querySelector("#one");
var two=document.querySelector("#two");
console.log(light_click);
light_click.onclick=function () {
one.style.display="none";
two.style.display="block";

}
function loadMp3 (src) {
//        alert(src)
//        if(!app.getUa.weixin && app.getUa.android){
//            $('<audio preload><source src="'+src+'" /></audio>').appendTo('body');//.on('canplaythrough', setMp3);
//        }
//        else{
    $('<audio loop preload><source src="'+src+'" /></audio>').appendTo('body');//.on('canplaythrough', setMp3);
//        }
    setMp3();
}

function setMp3 () {
    document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            $('audio')[0].play();
        });
    }, false);
    $('audio')[0].play();
    $('.music_btn').on('click', playOrPaused);
}
loadMp3("images/music.mp3")

function playOrPaused(){

    $('.music_btn').removeClass('active');
    setTimeout(function () {
        $('.music_btn').addClass('active')
    }, 0)
    var audio = $('audio')[0];
    var _this = $(this);
    if(audio.paused){
        $(".music_btn").attr("src","images/musicBtn.png");
        _this.removeClass('off');
        audio.play();
        return;
    }
    _this.addClass('off');
    audio.pause();
    $(".music_btn").attr("src","images/musicBtnOff.png");
}