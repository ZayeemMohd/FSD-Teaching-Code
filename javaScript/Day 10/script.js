console.dir(document);

// console.dir(document.all[9].innerText);

// document.all[9].innerText = "Milkyway Galaxy"

// Special DOM method

// step 1: selecting the elements
// step 2: modifying the elements

// let selectedElem = document.all[9].innerText;

// console.log(selectedElem);
// selectedElem.innerText = "Mikway";

// Selection Method
// {
//   //  1. get element by Id
//   //   {
//   //     // console.dir(document.getElementById("heading1"));
//   //     let heading1 = document.getElementById("heading1");
//   //     // console.log(heading1);
//   //     // heading = <h1 id="heading1">The Solar System</h1>
//   //     heading1.innerText = "Mars"; // The Solar System
//   //   }
//   //   {
//   //     let imageObj = document.getElementById("mainImg");
//   //     console.dir(imageObj);
//   //     console.dir(imageObj.src)
//   //     imageObj.src = "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400"
//   //   }
//   //   {
//   //     let heading1 = document.getElementById("heading1");
//   //     let imageObj = document.getElementById("mainImg");
//   //     setInterval(()=>{
//   //         setTimeout(()=>{
//   //             heading1.innerText = "Earth",
//   //             imageObj.src = "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800"
//   //         }, 2000)
//   //         heading1.innerText = "Mars"
//   //         imageObj.src = "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400"
//   //     }, 4000)
//   //   }
//   // 2. get element by class name
//   //   {
//   //     let elementObj = document.getElementsByClassName("oldImg");
//   //     console.log(elementObj);
//   //     // [img.oldImg, img.oldImg, img.oldImg]
//   //     // let firstElem = elementObj[0];
//   //     // console.log(firstElem);
//   //     // firstElem.src = "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800"
//   //     for (let imageObj of elementObj) {
//   //       imageObj.src =
//   //         "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800";
//   //       console.log("You are hacked!, image changed");
//   //     }
//   //     console.log(document.getElementsByClassName("abdasdfdsfdsf"));
//   //   }
//   // 3. get element by tag name
//   //   {
//   //     let paraTags = document.getElementsByTagName("p");
//   //     console.log(paraTags);
//   //     paraTags[0].innerText = "you are hacked!";
//   //      console.log(document.getElementsByTagName("span"));
//   //   }
// }

// Query Selectors
// Allows us to use CSS selectors
// {
//   // 1. document.querySelector("p"); // select first p element
//   {
//     let firstParaTag = document.querySelector("p");
//     console.log(firstParaTag.innerText);
//   }
//   // 2. document.querySelector("#description")
//   {
//     let tagWithId = document.querySelector("#description");
//     console.log(tagWithId);

//     let heading1 = document.querySelector("#heading1");
//     console.log(heading1);
//     console.log(heading1.innerText);
//   }

//   // 3. document.querySelector(".className");
//   {
//     let firstOldImage = document.querySelector(".oldImg");
//     console.log(firstOldImage);
//   }

//   // 4. document.querySelectorAll(".oldImg")
//   {
//     let allOldImages = document.querySelectorAll(".oldImg");
//     console.log(allOldImages);
//   }

//   // 5. CSS terminolgy in queryselector, eg: decendent selector
// //   {
// //     let decendentUL = document.querySelector(".box ul");
// //     console.log(decendentUL);
// //     console.dir(decendentUL);

// //      let decendentALLUL = document.querySelectorAll(".box ul");
// //      console.log(decendentALLUL)
// //   }
// }

// difference between `innerText`,  `innerHTML`, `textContent`
{
  // `innerTest`: shows the visible text contained in a node
  {
    let para1 = document.querySelector("p");
    // console.log(para1.innerText); //
  }

  // `innerHTML`: shows the HTML content of a node as a string
  {
    let para1 = document.querySelector("p");
    // console.log(para1.innerHTML); //

    para1.innerText = "<b>This is bold text</b>"; //
    para1.innerHTML = "<b>This is bold text</b>"; //

    let matter = "hello I am bold text";
    para1.innerHTML = `<b>${matter}</b>`; // "<b>hello I am bold text</b>"
  }

  // `textContent`: shows the full text content of a node
  {
    let para1 = document.querySelector("p");
    // console.log(para1.textContent); //


  }
}
