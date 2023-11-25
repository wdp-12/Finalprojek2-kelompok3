const bulanparallax = document.querySelectorAll(".parallax-bulan");

let xValue = 0,
  yValue = 0;

// window.addEventListener("mousemove", (e) => {
//   xValue = e.clientX - window.innerWidth / 2;
//   yValue = e.clientY - window.innerHeight / 2;
//   bulanparallax.forEach((el) => {
//     let speedx = el.dataset.speedx;
//     let speedy = el.dataset.speedy;

//     el.style.transform = `scale(0.7) translateX(calc(40% + ${
//       xValue * speedx
//     }px)) translateY(calc(0% +${yValue * speedy}px))`;
//   });
// });

window.addEventListener("scroll", () => {
  let langit = document.querySelector("#langit");
  let bulan = document.querySelector("#bulan");
  let tanah = document.querySelector("#tanah");
  let text = document.querySelector(".text");
  let value = window.scrollY;
  langit.style.transform = `scale(${value * 0.0005 + 1})`;
  tanah.style.transform = `scale(${
    value * 0.0005 + 1
  }) translateY(60%) translateX(calc(2% * ${value}px))`;
  bulan.style.left = value * -0.3 + "px";
  text.style.top = value * 0.5 + 150 + "px";
});


//progres bar
let calcScrollvalue = ()=> {
  let scrollProgres = document.getElementById("progres");
  let pos = document.documentElement.scrollTop;
  
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calcHeight);

  if(pos > 100) {
    scrollProgres.style.display = "grid";
  }else{
    scrollProgres.style.display = "none";
  }

  scrollProgres.addEventListener("click",()=>{
document.documentElement.scrollTop = 0;
  });
  scrollProgres.style.background = `conic-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
};

window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;




let moon = document.getElementById("moon");

window.addEventListener("scroll",()=>{
  let value = window.scrollY;
  text.style.left = value * 1.5 + "px";
})
