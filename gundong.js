/**
 * Created by Administrator on 2017/2/16.
 */

//全屏滚动
//获取浏览器的页面高度clientHeight
var clientH = document.body.clientHeight;
//给需要全屏滚动的区域设置高度
$('.page').height(clientH);
// var pg = document.getElementsByClassName('page');
// for (var i = 0; i < pg.length; i++) {
//     pg[i].style.height = clientH + "px";
// }

// 根据浏览器类型，添加鼠标滚轮事件的监听
if ((navigator.userAgent.toLowerCase().indexOf("firefox")!= -1)){
    //表示当前浏览器是FireFox，添加DOMMouseScroll鼠标滚轮事件
    document.addEventListener("DOMMouseScroll",scrollFun,false);
}
else if (document.addEventListener) {
    document.addEventListener("mousewheel",scrollFun,false);
}
else if (document.attachEvent) {
    document.attachEvent("onmousewheel",scrollFun);
}
else{
    document.onmousewheel = scrollFun;
}

var startTime = 0;
var endTime = 0;
//记录滚动页面的索引
var index = 0;
// console.log(11111);
function scrollFun(event){
console.log(22222);
    //获取鼠标滚动方向(上下)
    var delta = event.detail || (-event.wheelDelta);
    console.log(delta);
    //记录当前截获滚轮事件的时间
    startTime = new Date().getTime();
    if((startTime - endTime) > 500){
        if(delta > 0 ){
            //向上移动
            if(index == 6){

                index ++;
            }
            else if(index > 6){
                return false;
            }
        }
        else{
            //向下移动
            if(index == 0){
                index --;
            }
            else if(index < 0 ){
                return false;
            }
        }
    }
}























