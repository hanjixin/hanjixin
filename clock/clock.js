(function () {
   function Clock(supeurview) {
     var canvas=document.createElement("canvas");
     this.ctx=canvas.getContext("2d");
     supeurview.appendChild(canvas);
     canvas.width=500;
     canvas.height=500;
     canvas.style.cssText="background:white;";
     this.ctx.clearRect(0,0,500,500);

   }
   Clock.prototype.bg=function () {


       this.ctx.restore();
       this.ctx.save();
       this.ctx.clearRect(0,0,500,500);


       var img=new Image();
       img.src="clock.png";
       //img_elem,dx_or_sx,dy_or_sy,dw_or_sw,dh_or_sh,dx,dy,dw,dh
       this.ctx.drawImage(img,0,0,500,481,0,0,500,481);
   };
   Clock.prototype.shizhen=function () {
       // this.ctx.clearRect(0,0,500,500);
       var date=new Date();


      var du=Math.PI*2/60;
       this.ctx.translate(255,210);
       this.ctx.rotate(Math.PI+du*date.getSeconds());

      var shizhen= this.ctx.fillRect(-2.5,0,5,80);
         this.ctx.restore();
         this.ctx.save();
       this.ctx.translate(255,210);

       this.ctx.rotate(Math.PI+date.getMinutes()*du+du*date.getSeconds()/60);

      this.ctx.fillRect(-2.5,0,5,70);
       this.ctx.restore();
       this.ctx.save();
       this.ctx.translate(255,210);
       if(date.getHours()<=12){
           var hour=date.getHours();
       }
       else {
           hour=date.getHours()-12;

       }
       var du2=Math.PI*2/12;

       this.ctx.rotate(Math.PI+hour*du2+date.getMinutes()*du/60/12+du*date.getSeconds()/60/60/12);

       this.ctx.fillRect(-2.5,0,5,50);
       console.log(date.getSeconds());
       // this.ctx.translate(0,0);


   }

   window.Clock=Clock;
    var clock=new Clock(document.body);
    setInterval(function () {


        clock.bg();
        clock.shizhen();
    },1000);

})();