/**
 * Created by wangl on 2017/2/19.
 */

var top_ayaka = document.getElementById('top_ayaka');
var bottom_ayaka = document.getElementById('bottom_ayaka');
var right_balloon = document.getElementById('right_balloon');
var left_balloon = document.getElementById('left_balloon');
var bottom_balloon = document.getElementById('bottom_balloon');
var happy_birthday = document.getElementById('happy_birthday');
/*移除出现动画，添加持续动画*/
//头部彩花
top_ayaka.addEventListener("animationend", function () {
    $("#top_ayaka").removeClass('top_ayaka_appear');
    $("#top_ayaka").addClass("top_ayaka_keep");
});
//底部彩花
bottom_ayaka.addEventListener("animationend", function () {
    $("#bottom_ayaka").removeClass('top_ayaka_appear');
    $("#bottom_ayaka").addClass("bottom_ayaka_keep");
});
//右边气球
right_balloon.addEventListener("animationend", function () {
    $("#right_balloon").removeClass('right_balloon_appear');
    $("#right_balloon").addClass('right_balloon_keep');
});
//左边气球
left_balloon.addEventListener("animationend", function () {
    $("#left_balloon").removeClass('left_balloon_appear');
    $("#left_balloon").addClass('left_balloon_keep');
});
//底部气球
bottom_balloon.addEventListener("animationend", function () {
   $("#bottom_balloon").removeClass('bottom_balloon_appear');
   $("#bottom_balloon").addClass('bottom_balloon_keep');
   $("#happy_birthday").addClass('happy_birthday_appear');
   console.log('两个')
});



//happy_birthday
happy_birthday.addEventListener("animationend", function () {
   $("#cake").addClass('cake_appear')
});

