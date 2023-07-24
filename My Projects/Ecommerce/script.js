
// var crsr = document.querySelector("#cursor")

// var blur = document.querySelector("#cursor-blur")



// document.addEventListener("mousemove", function (dets) {

//  crsr.style.left = dets.x + "px"
//  crsr.style.top = dets.y + "px"
//  blur.style.left = dets.x - 150 + "px"
//  blur.style.top = dets.y + -150 + "px"


// })




document.addEventListener("mousemove", function (event) {
 var cursor = document.querySelector("#cursor");
 var blur = document.querySelector("#cursor-blur");

 // Set the position of the cursor element based on the mouse position
 cursor.style.left = event.clientX + "px";
 cursor.style.top = event.clientY + "px";

 // Set the position of the blur element slightly offset from the cursor
 blur.style.left = event.clientX - 150 + "px";
 blur.style.top = event.clientY - 150 + "px";
});





gsap.to("#nav", {

 backgroundColor: "#000",

 height: "110px",

 duration: 0.5,

 scrollTrigger: {
  trigger: '#nav',
  scroller: "body",
  markers: true,
  start: "top -10%",
  end: "top -11%",
  scrub: 1


 }



})

gsap.to("#main", {

 backgroundColor: " #000",
 scrollTrigger: {

  trigger: "main",
  scroller: "body",
  markers: true,
  start: "top  -20%",
  end: "top   -70%",
  scrub: 2




 }




})




