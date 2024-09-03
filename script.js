function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  .//hacker/1.png
  .//hacker/2.png
  .//hacker/3.png
  .//hacker/4.png
  .//hacker/5.png
  .//hacker/6.png
  .//hacker/7.png
  .//hacker/8.png
  .//hacker/9.png
  .//hacker/10.png
  .//hacker/11.png
  .//hacker/12.png
  .//hacker/13.png
  .//hacker/14.png
  .//hacker/15.png
  .//hacker/16.png
  .//hacker/17.png
  .//hacker/18.png
  .//hacker/19.png
  .//hacker/20.png
  .//hacker/21.png
  .//hacker/22.png
  .//hacker/23.png
  .//hacker/24.png
  .//hacker/25.png
  .//hacker/26.png
  .//hacker/27.png
  .//hacker/28.png
  .//hacker/29.png
  .//hacker/30.png
  .//hacker/31.png
  .//hacker/32.png
  .//hacker/33.png
  .//hacker/34.png
  .//hacker/35.png
  .//hacker/36.png
  .//hacker/37.png
  .//hacker/38.png
  .//hacker/39.png
  .//hacker/40.png
  .//hacker/41.png
  .//hacker/42.png
  .//hacker/43.png
  .//hacker/44.png
  .//hacker/45.png
  .//hacker/46.png
  .//hacker/47.png
  .//hacker/48.png
  .//hacker/49.png
  .//hacker/50.png
  .//hacker/51.png
  .//hacker/52.png
  .//hacker/53.png
  .//hacker/54.png
  .//hacker/55.png
  .//hacker/56.png
  .//hacker/57.png
  .//hacker/58.png
  .//hacker/59.png
  .//hacker/60.png
  .//hacker/61.png
  .//hacker/62.png
  .//hacker/63.png
  .//hacker/64.png
  .//hacker/65.png
  .//hacker/66.png
  .//hacker/67.png
  .//hacker/68.png
  .//hacker/69.png
  .//hacker/70.png
  .//hacker/71.png
  .//hacker/72.png
  .//hacker/73.png
  .//hacker/74.png
  .//hacker/75.png
  .//hacker/76.png
  .//hacker/77.png
  .//hacker/78.png
  .//hacker/79.png
  .//hacker/80.png
  .//hacker/81.png
  .//hacker/82.png
  .//hacker/83.png
  .//hacker/84.png
  .//hacker/85.png
  .//hacker/86.png
  .//hacker/87.png
  .//hacker/89.png
  .//hacker/90.png
  .//hacker/91.png
  .//hacker/92.png
  .//hacker/93.png
  .//hacker/94.png
  .//hacker/95.png
  .//hacker/96.png
  .//hacker/97.png
  .//hacker/98.png
  .//hacker/99.png
 `;
  return data.split("\n")[index];
}

const frameCount = 99;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) { 
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();



function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//Apple vision canvas images/1.png
.//Apple vision canvas images/2.png
.//Apple vision canvas images/3.png
.//Apple vision canvas images/4.png
.//Apple vision canvas images/5.png
.//Apple vision canvas images/6.png
.//Apple vision canvas images/7.png
.//Apple vision canvas images/8.png
.//Apple vision canvas images/9.png
.//Apple vision canvas images/10.png
.//Apple vision canvas images/11.png
.//Apple vision canvas images/12.png
.//Apple vision canvas images/13.png
.//Apple vision canvas images/14.png
.//Apple vision canvas images/15.png
.//Apple vision canvas images/16.png
.//Apple vision canvas images/17.png
.//Apple vision canvas images/18.png
.//Apple vision canvas images/19.png
.//Apple vision canvas images/20.png
.//Apple vision canvas images/21.png
.//Apple vision canvas images/22.png
.//Apple vision canvas images/23.png
.//Apple vision canvas images/24.png
.//Apple vision canvas images/25.png
.//Apple vision canvas images/26.png
.//Apple vision canvas images/28.png
.//Apple vision canvas images/29.png
.//Apple vision canvas images/30.png
.//Apple vision canvas images/31.png
.//Apple vision canvas images/32.png
.//Apple vision canvas images/33.png
.//Apple vision canvas images/34.png
.//Apple vision canvas images/35.png
.//Apple vision canvas images/36.png
.//Apple vision canvas images/37.png
.//Apple vision canvas images/38.png
.//Apple vision canvas images/39.png
.//Apple vision canvas images/40.png
.//Apple vision canvas images/41.png
.//Apple vision canvas images/42.png
.//Apple vision canvas images/43.png
.//Apple vision canvas images/44.png
.//Apple vision canvas images/45.png
.//Apple vision canvas images/46.png
.//Apple vision canvas images/47.png
.//Apple vision canvas images/48.png
.//Apple vision canvas images/49.png
.//Apple vision canvas images/50.png
.//Apple vision canvas images/51.png
.//Apple vision canvas images/52.png
.//Apple vision canvas images/53.png
.//Apple vision canvas images/54.png
.//Apple vision canvas images/55.png
.//Apple vision canvas images/56.png
.//Apple vision canvas images/57.png
.//Apple vision canvas images/58.png
.//Apple vision canvas images/59.png
.//Apple vision canvas images/60.png

`;
return data.split("\n")[index];
}

const frameCount = 60;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.20,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#lock",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#ai",{
  opacity:0
})




gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})
