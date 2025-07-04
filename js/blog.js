"use strict";
console.log("Blog script loaded");
const blogContainer = document.getElementById("blog-container");
const blogList = document.getElementById("blog-list");

class BlogPost {
  constructor(title, contentUrl, author, date) {
    this.title = title;
    this.contentUrl = contentUrl;
    this.author = author;
    this.date = date;
  }
}

let posts = [];
posts.push(
  new BlogPost(
    "New Prototype website",
    "/Blog%20posts/post1.txt",
    "Kester Franklin",
    "2025-7-04"
  )
);
posts.push(
  new BlogPost(
    "Our new hens",
    "/Blog%20posts/post2.txt",
    "Kester Franklin",
    "2025-05-09"
  )
);

function addToDocument() {
  for (const post of posts) {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-title");
    postElement.innerHTML = `<p>${post.title}</p>`;
    blogList.appendChild(postElement);
    postElement.addEventListener("click", () => {
      getPostData(post.contentUrl);
    });
    console.log(`Added post: ${post.title}`);
  }
}

addToDocument();

async function getPostData(input) {
  console.log("Fetching data...");
  const url = input || "Blog%20posts/postNotFound";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const text = await response.text();
    blogContainer.innerHTML = text;
    console.log("Data fetched successfully");
  } catch (error) {
    console.error(error.message);
  }
}
