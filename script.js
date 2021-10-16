let size=5;
let green_color=document.querySelector(".green");
let blue_color=document.querySelector(".blue");
let red_color=document.querySelector(".red");
let black_color=document.querySelector(".black");
let eraser=document.querySelector(".eraser");

let size5=document.querySelector(".s5");
let size10=document.querySelector(".s10");
let size15=document.querySelector(".s15");
let color='black';




blue_color.addEventListener("click",()=>{
    color='blue';
    blue_color.classList.add("selector");
    green_color.classList.remove("selector");
    red_color.classList.remove("selector");
    black_color.classList.remove("selector");
    eraser.classList.remove("selector");
});
// let green_color=document.querySelector(".green");
green_color.addEventListener("click",()=>{
    color='green';
    blue_color.classList.remove("selector");
    green_color.classList.add("selector");
    red_color.classList.remove("selector");
    black_color.classList.remove("selector");
    eraser.classList.remove("selector");
});
// let red_color=document.querySelector(".red");
red_color.addEventListener("click",()=>{
    color='red';
    blue_color.classList.remove("selector");
    green_color.classList.remove("selector");
    red_color.classList.add("selector");
    black_color.classList.remove("selector");
    eraser.classList.remove("selector");
});
// let black_color=document.querySelector(".black");
black_color.addEventListener("click",()=>{
    color='black';
    blue_color.classList.remove("selector");
    green_color.classList.remove("selector");
    red_color.classList.remove("selector");
    black_color.classList.add("selector");
    eraser.classList.remove("selector");
});
// let eraser=document.querySelector(".eraser");
eraser.addEventListener("click",()=>{
    color='white';
    blue_color.classList.remove("selector");
    green_color.classList.remove("selector");
    red_color.classList.remove("selector");
    black_color.classList.remove("selector");
    eraser.classList.add("selector");
});



size5.addEventListener("click",()=>{
    size=5;
    size5.classList.add("selector");
    size15.classList.remove("selector");
    size10.classList.remove("selector");
})

size10.addEventListener("click",()=>{
    size=10;
    size5.classList.remove("selector");
    size15.classList.remove("selector");
    size10.classList.add("selector");
})

// let size15=document.querySelector(".15");
size15.addEventListener("click",()=>{
    size=15;
    size5.classList.remove("selector");
    size15.classList.add("selector");
    size10.classList.remove("selector");
})
window.addEventListener("load",()=>{
    const canvas=document.querySelector("#canvas");
    const ctx=canvas.getContext("2d");

    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth-500;
    // canvas.style.marginTop='5rem';

      let painting=false;

      function startpanting(e){
          painting=true;
          draw(e);
      }
      function finishpainting()
      {
          painting=false;
          ctx.beginPath();

      }

      function draw(e){
          if(!painting)return;

          ctx.strokeStyle=color;
          ctx.lineWidth=size;
          ctx.lineCap="round";
          ctx.lineTo(e.clientX,e.clientY);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(e.clientX,e.clientY);
      }
    canvas.addEventListener('mousedown',startpanting);
    canvas.addEventListener('mouseup',finishpainting);
    canvas.addEventListener('mousemove',draw);

})

window.addEventListener('resize',()=>{
    const canvas=document.querySelector("#canvas");
    // const ctx=canvas.getContext("2d");

    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
})