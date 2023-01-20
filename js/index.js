// 轮播图
var index = 1;
function lunbo(){
    index ++;
    if(index > 3){
        index = 1;
    }
    var img = document.getElementById("img_lunbo");
    img.src = "image/lunbo"+index+".jpg";
}
// 按钮

setInterval(lunbo,4000);
// 导航栏固定顶部
window.onscroll = function(){
    var topScroll = document.documentElement.scrollTop;
            // 获取导航id
            var nav = document.getElementById("nav");
            // 滚动距离大于多少时执行下面事件
            if (topScroll > 100) {
                // 到了那个距离相当于给了导航定位
                nav.style.position = 'fixed';
                nav.style.top = '0';
            } else {
                // 小于的时候让他恢复原状
                nav.style = ''
}
}