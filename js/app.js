var tl = new TimelineMax({ repeat: -1, repeatDelay: 0.1 });
tl.staggerTo(".box, p", 1, {
  scale: 0.1,
  y: 60,
  yoyo: true,
  repeat: 1,
  ease: Power1.easeInOut,
  rotation: 360,
  stagger: 0.5,
});

/****TweenMax.staggerFrom(".box, p", 0.5, {opacity: 0, y: 200, rotation: 360 }, 0.5); */
