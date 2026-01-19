// 1. deperecated way of adding event listener
// {
//   const button = document.querySelector("button");
//   console.dir(button);

//   //   button.onclick = function () {
//   //     console.log("button is clicked using separate js");
//   //   };

//   // function sayHello(){
//   //     console.log("button is clicked using separate js");
//   // }

//   // button.onclick = sayHello;

// //   button.onmouseenter = function () {
// //     alert("you entered the button");
// //   };
// }

// 2. Event Listeners with addEventListener
{
  // What it solves?
  // a. You can add multiple event listeners to the same element for the same event
  // b. You can remove event listeners
  //   {
  //     const button = document.querySelector("button");
  //     button.onclick = sayHi;
  //     button.onclick = sayHello;
  //     function sayHi() {
  //       console.log("Hi when button clicked");
  //     }
  //     function sayHello() {
  //       console.log("hello when button clicked");
  //     }
  //   }
  // Example 1: Basic button click
  //   {
  //     const btn = document.querySelector("button");
  //     btn.addEventListener("click", function () {
  //       console.log("button was clicked");
  //       alert("you touched me!");
  //     });
  //   }
  // Example 2: Multiple listeners on Same Element
  //   {
  //     const btn = document.querySelector("button")
  //     // First Listener
  //     btn.addEventListener("click", function() {
  //         console.log("first action")
  //     })
  //     // Second listener (doesn't overwrite the first!)
  //     {
  //         btn.addEventListener("click", function() {
  //             console.log("second action")
  //         })
  //     }
  //   }
  // Example 3: Paragraph click counter
  //   {
  //     const para = document.querySelector("p");
  //     let count = 0;
  //     para.addEventListener("click", function () {
  //       count++;
  //       //    console.log(para.innerText)
  //       console.log(para.innerText.split("("));
  //       para.innerText = `${para.innerText.split("(")[0].trim()} (clicks: ${count})`;
  //     });
  //   }
}

// 3. Mouse and pointer events
{
  // Example 1: Hover color change
  {
    const box = document.querySelector(".box");
    box.addEventListener("mouseenter", function () {
      box.style.backgroundColor = "yellow";
      console.log("Mouse Entered");
    });
    box.addEventListener("mouseleave", function () {
      box.style.backgroundColor = "";
      console.log("Mouse Exited");
    });
    //   box.addEventListener("mousemove", function () {
    //     box.style.backgroundColor = "red";
    //   });
  }

  // Example 2: Click to toggle visibility
  {
    const hideBtn = document.querySelector("#hideBtn");
    const content = document.querySelector("#content");

    hideBtn.addEventListener("click", function () {
      if (content.style.display != "none") {
        content.style.display = "none";
        hideBtn.innerHTML = "Show";
      } else {
        content.style.display = "block";
        hideBtn.innerHTML = "Hide";
      }
    });
  }

  // Example 3: Double click to edit
  {
    const heading = document.querySelector("h1");

    heading.addEventListener("dblclick", function () {
      heading.innerHTML = "You double-clicked me!";
      heading.style.color = "red";
    });
  }

  // Example 4: Interactive card hover
  {
    const card = document.querySelector(".card");

    card.addEventListener("mouseenter", function () {
      card.style.transform = "scale(1.1)";
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    });
  }
}

// 4. The `this` keyword in event listener
{
    // Example 1: Universal color changer
    {
        const h1 = document.querySelector("h1")
        const h2 = document.querySelector("h2")
        const btn = document.querySelector("button")

        function changeColor() {
            this.style.backgroundColor = "lightblue"
            console.log(this.innerHTML + "was clicked")
        }

        // same function works for all three
        h1.addEventListener("click", changeColor)
        h2.addEventListener('click', changeColor)
        btn.addEventListener('click', changeColor)
    }

    // Example 2: Toggle class on click
    {
        const boxes = document.querySelectorAll(".box");

        function toggleActive(){
            this.classList.toggle("active")
        }

        // apply to all boxes
        for(let box of boxes){
            box.addEventListener('click', toggleActive)
        }
    }
}