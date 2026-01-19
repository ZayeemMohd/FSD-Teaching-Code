// const btn = document.querySelector("button");

// console.dir(btn);

// // btn.onclick = sayHi;

// function sayHi() {
//   alert("hi");
// }

// function sayHello(){
//     alert("hello")
// }

// btn.onclick = sayHi; // this will not work
// btn.onclick = sayHello; // override

// 3rd method .addEventListener
// btn.addEventListener("click", function () {
//   console.log("triggered using .addEventListener");
// });

// btn.addEventListener("dblclick", function () {
//   alert("print hello");
// });

// {
//   const btn = document.querySelector("button");

//   btn.addEventListener("click", function () {
//     const headingH4 = document.querySelector("h4");
//     let randomColor = randomColorGenerator();
//     headingH4.innerHTML = randomColor;

//     const div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//   });

//   function randomColorGenerator() {
//     const red = Math.floor(Math.random() * 255); // 0-255
//     // const red = 0;
//     const green = Math.floor(Math.random() * 255); // 0-255
//     // const green = 255;
//     const blue = Math.floor(Math.random() * 255); // 0-255

//     return `rgb(${red}, ${green}, ${blue})`;
//   }
// }

const div = document.querySelector("div");
const btn = document.querySelector("button");
const headingH4 = document.querySelector("h4");
const h1 = document.querySelector("h1");

// div.addEventListener('mouseenter', function(){
//     div.style.backgroundColor = "red"
// })

// div.addEventListener("mouseleave", function(){
//     div.style.backgroundColor = "white"
// })

// div.addEventListener("click", function () {
//   div.style.backgroundColor = "blue";
//   console.log(div.innerHTML);
// });

// btn.addEventListener("click", function () {
//   btn.style.backgroundColor = "blue";
//   console.log(btn.innerHTML);
// });

// headingH4.addEventListener("click", function () {
//   headingH4.style.backgroundColor = "blue";
//   console.log(headingH4.innerHTML);
// });

// h1.addEventListener("click", function () {
//   h1.style.backgroundColor = "blue";
//   console.log(h1.innerHTML);
// });

// const changeColor = function () {
//   this.style.backgroundColor = "blue";
//   console.log(this.innerHTML);
// }

// div.addEventListener("click", changeColor);

// btn.addEventListener("click", changeColor);

// headingH4.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// div.addEventListener("click", function (event){
//     console.log(event)
// })

// btn.addEventListener("dblclick", function(event){
//     console.log(event)
// })

// const inputEl = document.querySelector("input");

// inputEl.addEventListener("keydown", function(event){
//     // console.log(event)
//     console.log(event.code)
//     console.log(event.key)
//     console.log("key pressed")
// })

// inputEl.addEventListener("keyup", function(){
//     console.log("key pressed")
// })

// inputEl.addEventListener("keydown", function (event) {
//   // console.log(event)
//   if (event.code == "ArrowDown") {
//     console.log("arrow down key is pressed");
//   } else {
//     console.log("you pressed the wrong key");
//   }
// });

const form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("submit is clicked, triggered");

//     const inputEl = document.querySelector("input")
//     console.dir(inputEl)
//     // console.log(inputEl.innerHTML)
//     console.log(inputEl.value)

//     const h1 = document.querySelector("h1")
//     console.log(h1.innerHTML)
// })

// const inputEl = document.querySelector("input");


// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// inputEl.addEventListener("change", function(){
//     console.log("input changed");
//     console.log("final value: ", this.value)
// })



const inputEl = document.querySelector("input");
const pEl = document.querySelector("p")

inputEl.addEventListener("input", function () {
  // console.log("input changed");
    pEl.innerHTML = inputEl.value
});
