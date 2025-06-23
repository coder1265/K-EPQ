"use strict";
console.log("Blog script loaded");
let id = 0;
const blogContainer = document.getElementById("blog-container");
const bloglist = document.getElementById("blog-list");
class Blog {
  constructor() {
    this.blogs = [];
  }

  addBlog(blog) {
    this.blogs.push(blog);
  }

  getBlogs() {
    return this.blogs;
  }

  findBlogById(id) {
    return this.blogs.find((blog) => blog.id === id);
  }
}
class BlogPost {
  constructor(title, content, author, date) {
    this.id = id;
    id++;
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
  }

  getSummary() {
    return this.title;
  }
}
const text1 = `We are excited to announce the launch of our new website prototype!
This site now has payment capabilities and most pages are functional, however features still outstanding include user registration and login, and the ability to add products to a cart, a propper domain name, server-side functionality, and a products page. 
We are working hard to get these features implemented as soon as possible, so stay tuned for updates.<br>
This site was built using vanilla JavaScript, HTML, and CSS, and is hosted on GitHub Pages.
The development software used has changed quite a bit however the main tools used were:
Code editors:
<ul>
<li>Visual Studio Code
<ul>
<li>Live Server extension</li>
<li>Prettier extension</li>
<li>intelliSense</li>
<li>Emmet</li>
<li>Microsoft Edge DevTools</li>
<li>git hub code spaces</li>
<li>GitHub Copilot</li>
</ul>
</li>
<li>Adobe dreamweaver CC</li>
<li>Notepad</li>
</ul>
Graphics software:
<ul>
<li>Adobe Photoshop CC</li>
<li>Paint</li>
</ul>
Version control:
<ul>
<li>GitHub</li>
<li>file explorer (Zip files)</li>
</ul>
Trialed software:
XAMPP:
<p>It was a free and easy to use local server software, and accessable for everyone in the wifi network, although i didn't know how to make it globaly accessable</p>
Packet riot:
<p>I was a free method of hosting your own website, however it was rather complex and insecure (which i didn't know how to fix)</p>
Localhost:
<p>This was using VS Code to run a local server, it was very similar to XAMPP but more complex and had the same problems (it also didn't have a database)</p>
W3Schools spaces:
<p>This was a free hosting service that allowed you to host your own website, however it was very limited and didn't allow for server-side functionality</p>
GitHub Pages:
<p>This is a free hosting service that allows you to host your own website, however it is limited to static sites and doesn't allow for server-side functionality but it is better than W3 spaces as it allows for version control(using git)</p>
<br>
This site was buit only using HTML, CSS, and JavaScript, and is hosted on GitHub Pages No frameworks were used however stripe intergrations were used fot the payment options.
`;
const text2 = `We have recently purchased 30 new chickens for our farm!<br>
15 of these are burford brown chickens, which are known for their high quality egg production and friendly temperament. <br>
The other 15 are Dekalb white chickens, which are known for their high egg production and hardiness although they are very active. <br>
<br>
<img src="/Images/chicken-profiles/Chicken4.jpg" alt="A picture of a chicken" width="300"><br>
<p> Above is a picture of one of our new burford brown chickens, they are very friendly and love to be around humans (and have lots of treats)</p>
<img src="Images/chicken-profiles/Chicken13.jpg" alt="A picture of a chicken" width="300"><br>
<p>Above is a picture of one of our new Dekalb white chickens, they are very active and love to run around (and have lots of treats)</p>
`;
const blog = new Blog();
const blogPost1 = new BlogPost(
  "New Prototype Launch",
  text1,
  "Kester",
  "2025-06-23"
);
const blogPost2 = new BlogPost(
  "New Chickens bought",
  text2,
  "Kester",
  "2025-06-23"
);

blog.addBlog(blogPost1);
blog.addBlog(blogPost2);
function addToDocument() {
  for (let i = 0; i < blog.getBlogs().length; i++) {
    bloglist.innerHTML += `<p><a id="bl${blog.getBlogs()[i]["id"]}" title="${
      blog.getBlogs()[i]["title"]
    }">${blog.getBlogs()[i]["title"]}</a></p>`;
    document
      .getElementById(`bl${blog.getBlogs()[i]["id"]}`)
      .addEventListener("click", function () {
        console.log(
          `Clicked on blog with ID: ${blog.getBlogs()[i]["id"]}, Title: ${
            blog.getBlogs()[i]["title"]
          }`
        );
        blogContainer.innerHTML = `<h2>${blog.getBlogs()[i]["title"]}</h2>
      <p><strong>Author:</strong> ${blog.getBlogs()[i]["author"]}</p>
      <p><strong>Date:</strong> ${blog.getBlogs()[i]["date"]}</p>
      <p>${blog.getBlogs()[i]["content"]}</p>`;
      });
  }
}

addToDocument();
