/**
 * Created by 韩吉鑫 on 2017/8/7.
 */
/**
 * Created by 韩吉鑫 on 2017/8/7.
 */
window.Findcolor=window.Findcolor||{};
(function () {
    /**
     *
     * @param info
     * bg
     * option
     * row
     * containerWidth
     */

    function colorView(info) {
        var _info=info||{};
        this.view = document.createElement("div");
        //宽度 高度 外边距 背景色 不同明度 浮动
        var row=_info.row;
        var spanNum=row+1;
        console.log(_info.containerWidth);
        var space=_info.containerWidth/row/15;
        var width=(_info.containerWidth-space*(spanNum))/row;
        // this.view.style.cssText="background-clor:"+_info.background+";opacity:"+_info.opacity+";float:left;width:"+width+"px;height:"+width+"px;margin-left:"+space+"px;margin-top:"+space+"px;";
        this.view.style.cssText = "background-color:"+_info.background+";opacity:"+_info.opacity+";float:left;width:"+width+"px;height:"+width+"px;margin:"+space+"px 0 0 "+space+"px; border-radius: 10%;";

    }

    Findcolor.colorView=colorView;

})();