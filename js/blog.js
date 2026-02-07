"use strict";
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
    "2025-07-04",
  ),
);
posts.push(
  new BlogPost(
    "Our new hens",
    "/Blog%20posts/post2.txt",
    "Kester Franklin",
    "2025-05-09",
  ),
);
posts.push(
  new BlogPost(
    "New plan for free range chickens",
    "/Blog%20posts/post3.txt",
    "Kester Franklin",
    "2025-07-05",
  ),
);
document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blog-container");
  const blogList = document.getElementById("blog-list");

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

  function loadInitialPost() {
    try {
      let url = sessionStorage.getItem("getUrl");
      if (url) {
        console.log(`Loading initial post from: ${url}`);
        getPostData(url);
        sessionStorage.removeItem("getUrl");
      } else {
        console.log("No initial post URL found, loading default post.");
        console.log(`URL: ${url}`);
      }
    } catch (error) {
      console.error("Error loading initial post:", error);
    }
  }
  loadInitialPost();
});
console.log("Blog script initial load");
