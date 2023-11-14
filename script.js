var page3 = document.querySelector("#page3");
var play = document.querySelector("#play");

page3.addEventListener("mouseenter",function(){
    play.style.opacity = 1;
    play.style.scale = 1;

})
page3.addEventListener("mouseleave",function(){
    play.style.opacity = 0;
    play.style.scale = 0;

})
page3.addEventListener("mousemove",function(dets){
    play.style.left = dets.x + "px";
    play.style.top = dets.y + "px";
})

var bat = document.querySelector(".bat");
var batan = document.querySelector("#batan");


 bat.addEventListener("click",function(){
    batan.style.opacity = 1;
 })
 bat.addEventListener("dblclick",function(){
    batan.style.opacity = 0;
 })
 

