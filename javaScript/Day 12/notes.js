// 1. deperecated way of adding event listener
{
  // const button = document.querySelector("button");
  // console.dir(button);
  //   button.onclick = function () {
  //     console.log("button is clicked using separate js");
  //   };
  // function sayHello(){
  //     console.log("button is clicked using separate js");
  // }
  // button.onclick = sayHello;
  //   button.onmouseenter = function () {
  //     alert("you entered the button");
  //   };
}

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
  // {
  //   const box = document.querySelector(".box");
  //   box.addEventListener("mouseenter", function () {
  //     box.style.backgroundColor = "yellow";
  //     console.log("Mouse Entered");
  //   });
  //   box.addEventListener("mouseleave", function () {
  //     box.style.backgroundColor = "";
  //     console.log("Mouse Exited");
  //   });
  //   //   box.addEventListener("mousemove", function () {
  //   //     box.style.backgroundColor = "red";
  //   //   });
  // }
  // Example 2: Click to toggle visibility
  // {
  //   const hideBtn = document.querySelector("#hideBtn");
  //   const content = document.querySelector("#content");
  //   hideBtn.addEventListener("click", function () {
  //     if (content.style.display != "none") {
  //       content.style.display = "none";
  //       hideBtn.innerHTML = "Show";
  //     } else {
  //       content.style.display = "block";
  //       hideBtn.innerHTML = "Hide";
  //     }
  //   });
  // }
  // Example 3: Double click to edit
  // {
  //   const heading = document.querySelector("h1");
  //   heading.addEventListener("dblclick", function () {
  //     heading.innerHTML = "You double-clicked me!";
  //     heading.style.color = "red";
  //   });
  // }
  // Example 4: Interactive card hover
  // {
  //   const card = document.querySelector(".card");
  //   card.addEventListener("mouseenter", function () {
  //     card.style.transform = "scale(1.1)";
  //     card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  //   });
  //   card.addEventListener("mouseleave", function () {
  //     card.style.transform = "scale(1)";
  //     card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  //   });
  // }
}

// 4. The `this` keyword in event listener
{
  // Example 1: Universal color changer
  // {
  //   const h1 = document.querySelector("h1");
  //   const h2 = document.querySelector("h2");
  //   const btn = document.querySelector("button");
  //   function changeColor() {
  //     this.style.backgroundColor = "lightblue";
  //     console.log(this.innerHTML + "was clicked");
  //   }
  //   // same function works for all three
  //   h1.addEventListener("click", changeColor);
  //   h2.addEventListener("click", changeColor);
  //   btn.addEventListener("click", changeColor);
  // }
  // Example 2: Toggle class on click
  // {
  //     const boxes = document.querySelectorAll(".box");
  //     function toggleActive(){
  //       this.classList.toggle("active")
  //     }
  //     // apply to all boxes
  //     for(let box of boxes){
  //       box.addEventListener("click", toggleActive);
  //     }
  // }
  // Example 3: Delete Button
  // {
  //   const deleteBtns = document.querySelectorAll("div button");
  //   console.log(deleteBtns);
  //   function removeItem() {
  //     this.parentElement.remove(); // remove the parent div
  //     console.log("item deleted!");
  //   }
  //   for (let btn of deleteBtns) {
  //     btn.addEventListener("click", removeItem);
  //   }
  // }
  // Example 4: Highlight on Hover (Multiple Elements)
  // {
  //   const menuItems = document.querySelectorAll(".menu-items");
  //   function highlight() {
  //     for (let item of menuItems) {
  //       item.style.fontWeight = "normal";
  //     }
  //     this.style.fontWeight = "bold";
  //   }
  //   for (let item of menuItems) {
  //     item.addEventListener("click", highlight);
  //   }
  // }
}

// 5. Keyboard Events
{
  // Example 1: Display typed character
  // {
  //   const input = document.querySelector("input");
  //   input.addEventListener("keydown", function (value) {
  //     console.log(value.code);
  //     console.log(value.key);
  //   });
  // }
  // Example 2: Arrow key navigation (game controls)
  // {
  //   const player = document.querySelector("div");
  //   player.style.top = "0px";
  //   player.style.left = "0px";
  //   document.addEventListener("keydown", function (event) {
  //     if (event.code === "ArrowUp") {
  //       console.log("Move up");
  //       player.style.top = parseInt(player.style.top) - 50 + "px";
  //       console.log(player.style.top);
  //     } else if (event.code === "ArrowDown") {
  //       console.log("Move down");
  //       player.style.top = parseInt(player.style.top) + 50 + "px";
  //       console.log(player.style.top);
  //     } else if (event.code === "ArrowLeft") {
  //       console.log("Move left");
  //       player.style.left = parseInt(player.style.left) - 50 + "px";
  //       console.log(player.style.left);
  //     } else if (event.code === "ArrowRight") {
  //       console.log("Move right");
  //       player.style.left = parseInt(player.style.left) + 50 + "px";
  //       console.log(player.style.left);
  //     }
  //   });
  // }
  // Example 3: Enter key to submit
  // {
  //   const searchBox = document.querySelector("#search");
  //   searchBox.addEventListener("keydown", function (event) {
  //     if (event.key === "Enter") {
  //       console.log("Searching For: ", searchBox.value);
  //       alert("You searched for: ", searchBox.value);
  //     }
  //   });
  // }
  // Example 4: Keyboard shortcut (Ctrl + S)
  // {
  //   document.addEventListener("keydown", function (event) {
  //     event.preventDefault();
  //     console.log(event.metaKey)
  //     console.log(event.key);
  //     if (event.metaKey && event.key == "s") {
  //       console.log("Save successful");
  //       alert("content saved");
  //     }
  //   });
  // }
  // Example 5: Character limit warning
  // {
  //   const textArea = document.querySelector("textarea");
  //   const counter = document.querySelector("#counter");
  //   counter.innerText = length + "/100 characters";
  //   textArea.addEventListener("keyup", function () {
  //     let length = textArea.value.length;
  //     // console.log(length)
  //     counter.innerText = length + "/100 characters";
  //     if (length > 10) {
  //       this.style.backgroundColor = "red";
  //       counter.style.color = "red";
  //     } else {
  //       this.style.backgroundColor = "";
  //       counter.style.color = "";
  //     }
  //   });
  // }
}

// 6. Form Events and preventDefault()
{
  // Example 1: Basic form submission prevention
  // {
  //   const form = document.querySelector("form");
  //   form.addEventListener("submit", function(event){
  //     event.preventDefault();
  //     console.log("Form submitted manually")
  //   })
  // }
  // Example 2: Login form handler
  // {
  //   const loginForm = document.querySelector("#loginForm ")
  //   loginForm.addEventListener("submit", function(event){
  //     event.preventDefault();
  //     const userName = document.querySelector("#username").value
  //     const password = document.querySelector("#password").value
  //     console.log("username: ", userName, "password: ", password);
  //     alert("Welcome ", userName);
  //   })
  // }
  // Example 3: Form validation
  // {
  //   const signupForm = document.querySelector("#signup")
  //   signupForm.addEventListener("submit", function(value){
  //     value.preventDefault();
  //     let email = document.querySelector("#email").value
  //     let age = document.querySelector("#age").value
  //     if(age < 18){
  //       alert("You must be 18 or older to sign up!")
  //     } else if(!email.includes("@")){
  //       alert("please enter a valid email");
  //     } else {
  //       alert("Signup successful!");
  //       console.log("User registered: ", email, age)
  //       document.querySelector("#email").value = ""
  //       document.querySelector("#age").value = ""
  //     }
  //   })
  // }
  // Example 4: Search form with results display
  // {
  //   const searchForm = document.querySelector("#searchForm");
  //   const resultsDiv = document.querySelector("#results");
  //   searchForm.addEventListener("submit", function(event){
  //     event.preventDefault();
  //     const query = document.querySelector("#searchInput").value;
  //     resultsDiv.innerHTML = `<p>Searching for: <strong>${query}</strong></p>`;
  //     console.log("Search query: ", query);
  //     document.querySelector("#searchInput").value = ""
  //   })
  // }
}

// 7. Extracting form data
{
  // Example 1: Get input value
  // {
  //   const nameInput = document.querySelector('#name')
  //   const btn = document.querySelector("#submitBtn");
  //   btn.addEventListener("click", function(){
  //     let userName = nameInput.value;
  //     console.log("Name Entered: ", userName);
  //   })
  // }
  // Example 2: Multiple input fields
  // {
  //   const form = document.querySelector("form");
  //   form.addEventListener("submit", function (event) {
  //     event.preventDefault();
  //     const firstName = document.querySelector("#firstName").value;
  //     const lastName = document.querySelector("#lastName").value;
  //     const email = document.querySelector("#email").value;
  //     console.log("Full Name: ", firstName + " " + lastName);
  //     console.log("Email: ", email);
  //   });
  // }
  // Example 3: Dropdown selection
  // {
  //   const dropdown = document.querySelector("#country");
  //   const btn = document.querySelector("#selectBtn")
  //   btn.addEventListener("click", function(){
  //     const selected = dropdown.value;
  //     console.log("Selected country: ", selected)
  //   })
  // }
}

// 8. Change vs Input Events
{
  // Example 1: Live character counter(input)
  // {
  //   const textArea = document.querySelector("textarea");
  //   const counter = document.querySelector("#charCount");
  //   counter.innerHTML = textArea.value.length + " characters";
  //   textArea.addEventListener("input", function () {
  //     let count = textArea.value.length;
  //     counter.innerHTML = count + " characters";
  //   });
  // }
  // Example 2: Final submission (change)
  // {
  //     const nameField = document.querySelector("#name");
  //     nameField.addEventListener("change", function(){
  //         console.log("final name: ", nameField.value);
  //         alert("Name saved: " + nameField.value);
  //     })
  // }
  // Example 3: Live search suggestions(input)
  // {
  //   const searchBox = document.querySelector("#search");
  //   const suggestions = document.querySelector("#suggestions");
  //   searchBox.addEventListener("input", function () {
  //     // console.log(searchBox.value);
  //     const query = searchBox.value;
  //     // console.log(query.length);
  //     // console.log(suggestions.innerHTML);
  //     // console.log(query.lenght);
  //     if (query.length > 0) {
  //       suggestions.innerHTML = `
  //       <p>Searching for: ${query}</p>
  //       <p>Result 1: ${query} tutorial</p>
  //       <p>Result 2: ${query} guide</p>
  //       `;
  //     } else {
  //       suggestions.innerHTML = "";
  //     }
  //   });
  // }
  // Example 4: Password strength meter(input)
  // {
  //   const password = document.querySelector("#password");
  //   const strength = document.querySelector("#strength");
  //   password.addEventListener("input", function () {
  //     let length = password.value.length;
  //     if (length < 4) {
  //       strength.innerHTML = "Weak";
  //       strength.style.color = "red";
  //     } else if (length < 8) {
  //       strength.innerHTML = "Medium";
  //       strength.style.color = "orange";
  //     } else {
  //       strength.innerHTML = "Strong";
  //       strength.style.color = "green";
  //     }
  //   });
  // }
  // Example 5: Comparison - Both Events together
  // {
  //   const input = document.querySelector("#myInput");
  //   // fires on every keystroke
  //   input.addEventListener("input", function () {
  //     console.log("Typing...", input.value);
  //   });
  //   // fires only when done (blur or enter)
  //   input.addEventListener("change", function () {
  //     console.log("You entered: ", input.value);
  //   });
  // }
}

// 9. Practice activity; Interactive text editor
{
  const input = document.querySelector("#textInput");
  const display = document.querySelector("#display");
  const clearBtn = document.querySelector("#clearBtn");
  const boldBtn = document.querySelector("#boldBtn");
  const saveBtn = document.querySelector("#saveBtn");

  input.addEventListener("input", function () {
    if (input.value == "") {
      display.innerHTML = "Your text will appear here...";
    } else {
      display.innerHTML = input.value;
    }
  });

  clearBtn.addEventListener("click", function () {
    display.innerHTML = "";
    input.value = "";
  });

  boldBtn.addEventListener("click", function () {
    if (display.style.fontWeight === "bold") {
      display.style.fontWeight = "normal";
    } else {
      display.style.fontWeight = "bold";
    }
  });

  saveBtn.addEventListener("click", function(){
    console.log("Saved text: ", display.innerText);
    input.value = "";
  })
}
