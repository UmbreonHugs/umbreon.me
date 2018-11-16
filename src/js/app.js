// app.js
// coded by Luigi robles
// set default variables

// array of the projects

const projects = [
  {
    name: "Tracy Harbour",
    description: "This is a custom build interactive website for a restaurant located in Tracy, California. It includes a gallery, contact form, a fully searchable menu, and a clean and responsive layout. Coded in React.JS",
    skills: "React, Javascript, SASS, CSS, HTML, Docker, nginx",
    screenshots: ["https://placeimg.com/800/800/tech"]
  },
  {
    name: "Tracy Harbour 2",
    description: "This is a custom build interactive website for a restaurant located in Tracy, California. It includes a gallery, contact form, a fully searchable menu, and a clean and responsive layout. Coded in React.JS",
    skills: "React, Javascript, SASS, CSS, HTML, Docker, nginx",
    screenshots: ["https://placeimg.com/800/800/tech"]
  },
  {
    name: "Tracy Harbour 2",
    description: "This is a custom build interactive website for a restaurant located in Tracy, California. It includes a gallery, contact form, a fully searchable menu, and a clean and responsive layout. Coded in React.JS",
    skills: "React, Javascript, SASS, CSS, HTML, Docker, nginx",
    screenshots: ["https://placeimg.com/800/800/tech"]
  }
]
let sortedProjects = [];
let projectInfo = [];
const listProjectID = document.getElementById("list-projects");
let sorted = false;
listAllProjects = () => {
    listProjectID.innerHTML = projects.map(function(project){
    let html = `<div class="col-md-4 col-sm-6 col-xs-12 mb-4">
              <div class="card text-white">
                <img class="card-img" src="${project.screenshots[0]}" alt="Card image">
                <div class="card-img-overlay card-hover">
                  <h5 class="card-title">${project.name}</h5>
                  <p class="card-text">${project.description}</p>
                </div>
              </div>
            </div>`;
    return html;
  }).join('')
}
listAllProjects()
