/**
TweenMax.staggerFrom(".box, p", 0.4, {opacity: 0, y: 200, scale: 2}, 0.4);
**/
 
TweenMax.staggerFrom(".box, p", 2, {scale: 0.5, opacity:0, delay: 0.5, ease:Elastic.easeOut, force3D: true}, 0.5);
/** 
TweenMax.staggerFrom("p", 2, {scale: 0.5, opacity:0, delay: 0.5, ease:Elastic.easeOut, force3D: true}, 0.2);
***/

/** 
$(".box").click(function(){
  TweenMax.staggerTo(".box", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
});
**/