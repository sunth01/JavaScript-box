//为了保证兼容性，这里取两个值，哪个有值取哪一个
//scrollTop就是触发滚轮事件时滚轮的高度
window.addEventListener("scroll", function (event) {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 450) {
       // 鼠标滑动到一定距离后，公共导航栏显示出来
       document.querySelector('.button').style.opacity = 1
       //不加display滑动头部栏会覆盖掉之前的导航栏hover效果
       document.querySelector('.button').style.display = 'block'
 
    } else {
       document.querySelector('.button').style.opacity = 0
       document.querySelector('.button').style.display = 'none'
 
    }
 });