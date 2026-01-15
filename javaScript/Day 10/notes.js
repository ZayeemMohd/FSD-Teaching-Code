// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// In JavaScript, you can manipulate the DOM using various methods and properties. Here are some common tasks you can perform with the DOM:

// 1. Accessing Elements:
{
  // You can access elements in the DOM using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.

  // Selecting elements by ID. Syntax: document.getElementById("id_name");
  {
    // Example 1: Select the Main Image
    // {
    //     const mainImage = document.getElementById("mainImg");
    //     console.log(mainImage);
    //     // Output: <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800" id="mainImg"></img>
    //     // (to see this exact output use this code in global scope)
    // }
    // Example 2: Select the Heading
    // {
    //     const heading = document.getElementById("heading1");
    //     console.log(heading);
    //     // Output: <h1 id="heading1">The Solar System</h1>
    // }
    // Example 3: Check if element exists
    // {
    //     const element = document.getElementById("nonexistent");
    //     console.log(element);
    //     // Output: null (element doesn't exist)
    // }
  }

  // Slecting elements by Class Name. Syntax: document.getElementByClassName("class_name")
  {
    // Example 1: Select all small Images
    // {
    //   const oldImages = document.getElementsByClassName("oldImg");
    //   console.log(oldImages); // Output: HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]
    //   console.log(oldImages.length); // 3
    // }
    // Example 2: Access individual elements
    // {
    //   const oldImages = document.getElementsByClassName("oldImg");
    //   console.log(oldImages[0]);
    //   console.log(oldImages[1]);
    //   console.log(oldImages[2]);
    // }
    // Example 3: Loop through the collection
    // {
    //   const oldImages = document.getElementsByClassName("oldImg");
    //   for (let i = 0; i < oldImages.length; i++) {
    //     console.log(oldImages[i]);
    //   }
    // }
    // Example 4: Select box links
    // {
    //   const boxLinks = document.getElementsByClassName("boxLink");
    //   console.log(boxLinks);
    // }
  }

  // Selecting elements by Tag Name. Syntax: document.getElementsByTagName("tag_name")
  {
    // Example 1: Select all paragraphs
    // {
    //     const paragraphs = document.getElementsByTagName("p");
    //     console.log(paragraphs);
    // }
    // Example 2: Count Elements
    // {
    //     const elements = document.getElementsByTagName("p");
    //     console.log(elements.length);
    // }
    // Example 3: Select All links
    // {
    //     const allLinks = document.getElementsByTagName("a")
    //     console.log(allLinks);
    //     console.log(allLinks.length);
    // }
    // Example 4: Select all images
    // {
    //     const allImages = document.getElementsByTagName("img");
    //     console.log(allImages);
    // }
  }

  // Query Selectors:  1. querySelector(), 2. querySelectorAll()
  {
    // Example 1: Select by ID
    // {
    //     const heading = document.querySelector("#heading1")
    //     console.log(heading);
    // }
    // Example 2: Select by Class (First match only)
    // {
    //   const firstOldImage = document.querySelector(".oldImg");
    //   console.log(firstOldImage);
    // }
    // Example 3: Select all elements with querySelectoAll()
    // {
    //   const allOldImages = document.querySelectorAll(".oldImg");
    //   console.log(allOldImages);
    // }
    // Example 4: Select by Tag
    // {
    //   const firstParagraph = document.querySelector("p");
    //   console.log(firstParagraph);
    // }
    // Example 5: Complex Selectors (Links inside a specific div)
    // {
    //   const boxLinks = document.querySelectorAll(".box a");
    //   console.log(boxLinks);
    // }
  }
}

// 2. Reading and Changing Content:
{
  // innerText
  {
    // Example 1: Get Visible Text
    // {
    //   const para = document.querySelector("#description");
    //   console.log(para.innerText);
    // }
    // Example 2: Change Heading Text
    // {
    //     const heading = document.querySelector('#heading1');
    //     heading.innerText = "Our Amazing Solar System"
    // }
    // Example 3: Get text from multiple elements
    // {
    //     const firstPara = document.querySelector("p")
    //     console.log(firstPara.innerText);
    // }
  }

  // textContent
  {
    // Example 1: Get all text content
    // {
    //   const para = document.querySelector("#description")
    //   console.log(para.textContent)
    // }
    // Example 2: Change text content
    // {
    //   const heading = document.querySelector("h1")
    //   heading.textContent = "Welcome to space!"
    // }
    // Example 3: Compare with innerText
    // {
    //   const element = document.querySelector('#description')
    //   console.log(element.innerText)
    //   console.log(element.textContent)
    // }
  }

  // innerHTML
  {
    // Example 1: see the HTML Structure
    // {
    //   const para = document.querySelector("p")
    //   console.log(para.innerHTML)
    // }
    // Example 2: Add HTML Tag
    // {
    //   const heading = document.querySelector("#heading1")
    //   heading.innerHTML = "<u>The Solar System</u>"
    // }
    // Example 3: Add complex HTML
    // {
    //   const heading = document.querySelector("#heading1")
    //   heading.innerHTML = `The <span style="color: gold">Solar</span> System`
    // }
    // Example 4: read links from paragraph
    // {
    //   const para = document.querySelector("p")
    //   console.log(para.innerHTML)
    // }
  }
}

// Practice Exercises
{
  // Exercise 1: Selection practice
  {
    // 1. select the main image by its ID
    // {
    //   const mainImg = document.querySelector("#mainImg");
    //   console.log(mainImg)
    // }
    // 2. Select all images with class "oldImg"
    // {
    //   const allImg = document.querySelectorAll(".oldImg")
    //   console.log(allImg)
    // }
    // 3. Select all paragraph elements
    // {
    //   const allPara = document.querySelectorAll("p");
    //   console.log(allPara)
    // }
    // 4. Select the description paragraph using querySelector
    // {
    //   const para  = document.querySelector("#description")
    //   console.log(para)
    // }
    // 5. Select all links inside the .box div
    // {
    //   const allLinks = document.querySelectorAll(".box a")
    //   console.log(allLinks)
    // }
  }

  // Exercise 2: Content manipulation
  {
    // 1. Get the text of the main heading
    // {
    //   const mainHeading = document.querySelector("#heading1")
    //   console.log(mainHeading.innerText);
    // }
    // 2. Change the heading to "Exploring our solar system"
    // {
    //   const mainHeading = document.querySelector("#heading1")
    //   mainHeading.innerText = "Exploring Our Solar System"
    // }
    // 3. Get the innerHTML of the first paragraph
    // {
    //   const firstPara = document.querySelector("p")
    //   console.log(firstPara.innerText)
    // }
    // 4. Change the first h2 to include a star emoji
    // {
    //   const firstH2 = document.querySelector("h2");
    //   firstH2.innerText += " ⭐️";
    // }
    // 5. Log the innerText of the description paragraph
    // {
    //   const para = document.querySelector('#description')
    //   console.log(para.innerText)
    // }
  }

  // Exercise 3: Combining skills
  {
    // 1. Select all images with class "oldImg"
    // {
    //   const allImg = document.querySelectorAll(".oldImg")
    //   console.log(allImg)
    // }

    // 2. Log how many images you found
    // {
    //   const allImg = document.querySelectorAll(".oldImg");
    //   console.log(allImg.length);
    // }

    // 3. Select the first paragraph and get its text
    // {
    //   const firstPara = document.querySelector("p");
    //   console.log(firstPara.innerText);
    // }

    // 4. Change the main heading using innerHTML to include <storng> tags
    // {
    //   const mainHeading = document.querySelector("h1")
    //   mainHeading.innerHTML = `<strong>${mainHeading.innerHTML}</strong>` 
    // }

    // 5. Select all boxLinks and log their count
    // {
    //   const allLinks = document.querySelectorAll(".box a")
    //   console.log(allLinks.length)
    // }
  }
}
