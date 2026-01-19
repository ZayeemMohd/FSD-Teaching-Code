// 1. Manipulating Attributes: getAttribute(attr), setAttribute(attr, value)
{
  // Example 1: Get the ID of an element
  // {
  //   const solarImg = document.querySelector("img");
  //   const idName = solarImg.getAttribute("id");
  //   console.log(idName);
  // }
  // Example 2: Change the ID
  // {
  //   const solarImg = document.querySelector("img");
  //   solarImg.setAttribute("id", "galxyImg");
  //   console.log(solarImg);
  // }
  // Example 3: Change the image source
  // {
  //   const solarImg = document.querySelector("img");
  //   solarImg.setAttribute(
  //     "src",
  //     "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=400"
  //   );
  //   console.log(solarImg);
  // }
  // Example 4: Get and change a link's href
  // {
  //   const link = document.querySelector("a");
  //   console.log(link.getAttribute("href"));
  //   link.setAttribute("href", "https://nasa.gov");
  //   console.log(link.getAttribute("href"));
  // }
  // Example 5: Check if an attribute exists
  // {
  //   const heading = document.querySelector("h1");
  //   const headClass = heading.getAttribute("class");
  //   console.log(headClass);
  //   const headId = heading.getAttribute("id");
  //   console.log(headId);
  // }
}

// 2. Manipulating Style (inline) .style.property = value
{
  // Example 1: Change text color
  // {
  //   const heading = document.querySelector("h1")
  //   heading.style.color = "red"
  // }
  // Example 2: Change the background color (camelCase!)
  // {
  //   const heading = document.querySelector("h1");
  //   heading.style.backgroundColor = "black";
  // }
  // Example 3: Change multiple styles
  // {
  //   const para = document.querySelector("p");
  //   para.style.color = "white";
  //   para.style.fontSize = "20px"
  //   para.style.padding = '10px'
  // }
  // Example 4: Change image size
  // {
  //   const img = document.querySelector("img")
  //   img.style.width = "500px"
  //   img.style.borderRadius = "15px"
  // }
  // Example 5: Hide an element
  // {
  //   const box = document.querySelector(".box")
  //   box.style.display = "none"
  // }
}

// 3. The classList Property (add(), remove(), contains(), toggle())
{
  // Example 1: Add a class
  // {
  //   const para = document.querySelector("p");
  //   para.classList.add("green");
  // }

  // Example 2: Remove a class
  // {
  //   const para = document.querySelector("p");
  //   para.classList.remove("green");
  // }

  // Example 3: Check if a class exists
  // {
  //   const para = document.querySelector("p");
  //   const classContain = para.classList.contains("green");
  //   console.log(classContain);
  // }

  // Example 4: Toggle a class
  // {
  //   const para = document.querySelector("p");
  //   para.classList.toggle("green");
  //   para.classList.toggle("green");
  // }

  // Example 5: Toggle on button click
  // {
  //   const box = document.querySelector(".box");
  //   const button = document.querySelector("button");

  //   button.addEventListener("click", () => {
  //     box.classList.toggle("highlight");
  //   });
  // }
}

// 4. Navigation (DOM Traversal) (parentElement, children, nextElementSibling, previousElementSibling)
{
  // Example 1: Find all children of an element
  // {
  //   const box = document.querySelector(".box");
  //   const boxChildren = box.children;
  //   console.log(boxChildren);
  // }

  // Example 2: Navigate from child to parent
  // {
  //   const list = document.querySelector("ul");
  //   const ulParent = list.parentElement;
  //   console.log(ulParent);
  // }

  // Example 3: Get the next sibling
  // {
  //   const list = document.querySelector("ul")
  //   console.log(list)
  //   const firstItem = list.children[0]; // first li
  //   console.log(firstItem)
  //   const secondItem = firstItem.nextElementSibling;
  //   console.log("next li: ", secondItem)
  //   console.log(secondItem.innerText)
  // }

  // Example 4: Access first and last child
  // {
  //   const box = document.querySelector(".box")
  //   const firstChild = box.children[0];
  //   console.log(firstChild);

  //   const lastChild = box.children[box.children.length - 1];
  //   console.log(lastChild)
  // }

  // Example 5: Navigate through multiple siblings
  // {
  //   const heading1 = document.querySelector("#heading1")
  //   const nextEl = heading1.nextElementSibling
  //   console.log(nextEl)
  //   const afterThat = nextEl.nextElementSibling;
  //   console.log(afterThat)
  //   console.log(afterThat.innerText)
  // }
}

// 5. Adding Elements to the page (document.createElement("tagName"), appendChild(Element), append(element), prepend(element), insertAdjacentElement(position, element))
{
  // Example 1: Create and add a button
  // {
  //   // step 1: Create
  //   const newBtn = document.createElement("button")
  //   newBtn.innerText = "Expore Universe"

  //   // step 2: Add to page
  //   const box = document.querySelector(".box")
  //   box.appendChild(newBtn)
  // }

  // Example 2: Add element to the start
  // {
  //   const heading = document.createElement("h3")
  //   heading.innerHTML = "Wecome to Space!"

  //   const body = document.querySelector("body")
  //   body.prepend(heading)
  // }

  // Example 3: Create a paragraph with styling
  // {
  //   const newPara = document.createElement("p")
  //   newPara.innerText = "The universe is vast and mysterious"
  //   newPara.style.color = "cyan"
  //   newPara.style.fontSize = "19px"

  //   const body = document.querySelector("body")
  //   body.prepend(newPara)
  // }

  // Example 4: Using insertAdjacentElement (precise placement)
  // {
  //   const badge = document.createElement('span')
  //   badge.innerText = "⭐️ New!"

  //   const heading = document.querySelector("h1")
  //   heading.insertAdjacentElement("beforebegin", badge)
  // }

  // Example 5: Add multiple elements
  // {
  //   const list = document.querySelector("ul")

  //   const item1 = document.createElement("li")
  //   item1.innerText = "Neptune: Ice Giant"

  //   const item2 = document.createElement("li")
  //   item2.innerText = "Uranus: Ice Gaint"

  //   list.appendChild(item1)
  //   list.appendChild(item2)
  // }
}

// 6. insertAdjacentElement positions
{
  // Example 1: Add before an element
  {
    const warning = document.createElement("p")
    warning.innerText =  `⚠️ Content may change`

    const desc = document.querySelector("#description")
    desc.insertAdjacentElement("beforebegin", warning)
  }

  // Example 2: Add inside, at the start
  {
    const icon = document.createElement("span")
    icon.innerText = "🌎 ";

    const heading = document.querySelector("h1")
    heading.insertAdjacentElement("afterbegin", icon)
  }

  // Example 3: Add inside at the end
  {
    const arrow = document.createElement("span")
    arrow.innerText = " ➡️"

    const heading = document.querySelector("h2")
    heading.insertAdjacentElement("beforeend", arrow)
  }
}

// 7. Removing elements from page (element.remove(), parent.removeChild(child))
{
  // Example 1: Remove an element (modern)
  // {
  //   const oldImg = document.querySelector(".oldImg")
  //   oldImg.remove()
  // }

  // Example 2: Remove using parent (Old way)
  // {
  //   const imageContainer = document.querySelector(".images")
  //   const oldImg = document.querySelector(".oldImg")
  //   imageContainer.removeChild(oldImg)
  // }

  // Example 3: Remove all images with a class
  // {
  //   const images = document.querySelectorAll(".oldImg")
  //   for(let img of images){
  //     img.remove()
  //   }
  // }

  // Example 4: Remove on button click
  // {
  //   const button = document.createElement("button")
  //   button.innerText = "delete"
  //   const box = document.querySelector(".box")
  //   box.insertAdjacentElement("afterbegin", button)

  //   button.addEventListener("click", ()=>{
  //     box.remove()
  //   })
  // }

  // Example 5: Remove a specific child
  // {
  //   const list = document.querySelector("ul")
  //   const firstItem = list.children[0];
  //   firstItem.remove()
  // }
}

// 8. Practice Exercises
{
  // Exercise 1: Change Attributes
  // {
    
  //     // 1. Select the main image
  //     const mainImg = document.querySelector("#mainImg")
  //     console.log(mainImg)

  //     // 2. Change its src to a different space image URL
  //     mainImg.setAttribute("src", "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=400")

  //     // 3. Change its id to "spaceImage"
  //     mainImg.setAttribute("id", "spaceImage")
  // }

  // Exercise 2: Style Elements
  // {
  //   // 1. Select the h1 heading
  //   const heading = document.querySelector("h1")
  //   // 2. Change its color to cyan
  //   heading.style.color = "cyan"
  //   // 3. Add a background color of black
  //   heading.style.backgroundColor = "black"
  //   // 4. Add padding of 20px
  //   heading.style.padding = "24px"
  //   heading.style.borderRadius = "15px"
  // }

  // Exercise 3: Use classList
  // {
  //   // 1. Select the first paragraph
  //   const para = document.querySelector("p")
  //   // 2. Add a class called "highlight"
  //   para.classList.add("highlight")
  //   // 3. Check if it contains "highlight"
  //   const isPresent = para.classList.contains("highlight")
  //   console.log(isPresent)
  //   // 4. Toggle the class twice
  //   para.classList.toggle("highlight")
  //   para.classList.toggle('highlight')
    
  // }
  
  // Exercise 4: Navigate the DOM
  // {
  //   // 1. Select the .box div
  //   const box = document.querySelector(".box")
  //   // 2. Get all its children
  //   console.log(box.children)
  //   // 3. Find the parent of ul
  //   const ul = document.querySelector("ul")
  //   console.log(ul.parentElement)
  //   // 4. Get the next sibling of the h1
  //   const h1 = document.querySelector("h1")
  //   console.log(h1.nextSibling)
  // }

  // Exercise 5: Add and Remove Element
  // {
  //   // 1. Create a new h3 with text "Created by JS"
  //   const newH3 = document.createElement("h3")
  //   newH3.innerText = "Created by JS"
  //   // 2. Add it before the #description paragraph 
  //   document.querySelector("#description").insertAdjacentElement("beforebegin", newH3)
  //   // 3. Create a button with text "Click Me"
  //   const button = document.createElement("button")
  //   button.innerText = "Click Me"
  //   // 4. Add it to teh .box div
  //   document.querySelector(".box").append(button);
  //   // 5. Remove all images with class .oldImg
  //   document.querySelectorAll(".oldImg").forEach((elem)=>elem.remove());
  // }
}