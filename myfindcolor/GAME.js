/**
 * Created by 韩吉鑫 on 2017/8/7.
 */
window.Findcolor=window.Findcolor||{};
(function () {
     function Game() {

            this.toolView();
         // this.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";

         this.init();
          this.loadView();
          this.timer=null;


     }
     Game.prototype.loadView=function () {
         if(this.gameContent){
             this.gameContent.parentNode.removeChild(this.gameContent);
         }
         var self=this;
         this.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
         var num=this.row*this.row;
         //创建碎片文档
         var temp=document.createDocumentFragment();
         var id=parseInt(Math.random()*num);
         for(var i=0;i<num;i++){

             if(i===id){
                 var item=new Findcolor.colorView({background:this.color,opacity:0.8,row:this.row,containerWidth:"400"}).view;
                 item.onclick=function () {
                     if (!self.timer){return}
                     //    成功
                     ++self.row;
                     ++self.score;
                     self.updateView();
                     self.loadView();
                 }
             }
             else
             {
                 var item=new Findcolor.colorView({background:this.color,opacity:1,row:this.row,containerWidth:"400"}).view;
                 item.onclick=function () {
                     if (!self.timer){return}
                     //    失败
                     self.updateView();
                     self.stop();
                     self.loadView();
                 }
             }
            temp.appendChild(item);
         }
         this.gameContent=document.createElement("div");

         // this.gameContent.setAttribute("disabled",true);
         this.gameContent.style.cssText = "width:400px;height:400px;background-color:#E2E2E2;";
         this.gameContent.appendChild(temp);
         document.body.appendChild(this.gameContent);

         //todo
     }
     Game.prototype.start=function () {
         var self=this;
         this.timer=setInterval(function () {

             --self.currenttime;
             self.updateView();
             if(self.currenttime==0){
                 this.init();

                 this.stop();
             }
         }.bind(this),1000)
     };
     Game.prototype.stop=function () {
         clearInterval(this.timer);
         this.timer=null;
         this.init();

     };
     Game.prototype.updateView=function () {
         this.timeView.textContent = "还剩"+this.currentTime+"秒";
         this.scoreView.textContent = this.score+"分";
     };
     Game.prototype.PK=function () {

     };
     Game.prototype.music=function () {

     };
    Game.prototype.toolView=function () {
       //  var self=this;
       //
       // var start=document.createElement("button");
       //
       //
       // start.textContent="开始";
       // start.onclick=function () {
       //     self.start();
       // }
       //  var timeView = document.createElement("span");
       //  var scoreView = document.createElement("span");
       //  toolContainer.appendChild(timeView);
       //  toolContainer.appendChild(scoreView);
       //
       //  this.timeView = timeView;
       //  this.scoreView = scoreView;
        var toolContainer = document.createElement("div");
        var startButton = document.createElement("button");
        var stopButton = document.createElement("button");
        startButton.textContent = "开始";
        stopButton.textContent = "停止";
        var self = this;
        startButton.onclick = function () {
            self.start();
        };
        stopButton.onclick = function () {
            self.stop();
        };

        toolContainer.appendChild(startButton);
        toolContainer.appendChild(stopButton);
        document.body.appendChild(toolContainer);


        var timeView = document.createElement("span");
        var scoreView = document.createElement("span");
        toolContainer.appendChild(timeView);
        toolContainer.appendChild(scoreView);

        this.timeView = timeView;
        this.scoreView = scoreView;

    };
     Game.prototype.init=function () {
         this.row=2;
         this.currentTime=10;
         this.score = 0;
         this.timeView.textContent = "还剩"+this.currentTime+"秒";
         this.scoreView.textContent = this.score+"分";
         this.loadView();

     }
    Findcolor.Game=Game;

})();