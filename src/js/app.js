// app.js
// coded by Luigi robles
// set default variables

// array of the projects

const projects = [
  {
    id: 1,
    name: "Tracy Harbour",
    description: "Custom built interactive website. It includes a gallery, contact form, a fully searchable menu, and a clean layout.",
    longDescription: "This website was built for a restaurant that is well known for serving the best Fish and Chips in town! I recently rebuilt this website and implemented some amazing features, such as interactive searchable menu, a new press page, a instagram gallery API, and a responsive clean layout that is accessable on any device, and any machine. This was also the first time I have ever used React on a project.",
    skills: "ReactJS, Javascript, SASS, CSS, HTML, Docker, Nginx",
    screenshots: ["img/projects/tracyharbour1.png", "img/projects/tracyharbour1.png", "img/projects/tracyharbour1.png"],
    livePreview: "https://www.tracyharbour.com"
  },
  {
    id: 2,
    name: "Milano Pizza",
    description: "Custom built 1-page website, with a responsive menu, slideshow, and a backend menu editor.",
    longDescription: "I built this website for a famous pizzaria in Tracy! We agreed that the website had to be accessable from all devices so the customer is able to use the coupons on the website, and view the menu. I decided to implement a backend framework via PHP to update the content, coupons, and menu prices. I also used <span class='primary-text'>Bootstrap 4</span> for a cleaner and responsive look. I do have plans on updating the website as I like to keep my work up to date with modern web standards.",
    skills: "HTML, CSS, Javascript, jQuery, Bootstrap, SASS, PHP, MySQL",
    screenshots: ["img/projects/milano1.png", "img/projects/milano2.png", "img/projects/milano3.png"],
    livePreview: "https://milanopizzatracyca.com/"
  },
  {
    id: 3,
    name: "PROJECT: G-Tourneys",
    description: "Project for a tournament software, included admin panel, user authentication, registration, support tickets, and responsive design.",
    longDescription: "Long story, but i'll try to keep it as minimal as possible. This was one of my biggest projects I have ever faced. I was an admin of a gaming community back in 2015, and I had to develop a system for running tourneys in our community. I started by building a tournament website that would integrate with my forum software, and using the latest web technologies at that time. I was using PHP, Bootstrap 3, MySQL, and along the way, I was learning jQuery UI and Laravel Framework for PHP. I was able to implement a registration page, a team control panel (where users can manage, remove, and add team members), a staff control panel (where tournaments are created, and modified), and a support ticket system. Unfortunately, I was not able to finish the project in time due to the lack of funding and interest in the community, therefore I decided to decommission it. Due to legal reasons, I am not allowed to release any source code of the project.",
    skills: "Javascript, PHP, Bootstrap, HTML, CSS, MySQL, JQuery, Nginx",
    screenshots: ["img/projects/gtourneys1.png", "img/projects/gtourneys2.png", "img/projects/gtourneys3.png"]
  },
  {
    id: 4,
    name: "Memory Game",
    description: "Memory matching game, coded in Vanilla Javascript and a bit of jQuery",
    longDescription: "This was my first project for Udacity's Front End Web Developer Nanodegree. ",
    skills: "Javascript, Bootstrap, HTML, CSS, JQuery",
    screenshots: ["img/projects/memory1.png", "img/projects/memory2.png", "img/projects/memory3.png"],
    playNow: "https://umbreonhugs.github.io/memory_game/",
    githubLink: "https://github.com/UmbreonHugs/memory_game"
  },
  {
    id: 5,
    name: "Frogger",
    description: "Frogger Arcade Game Clone, coded in Vanilla Javascript",
    skills: "Javascript, Bootstrap, HTML, CSS",
    screenshots: ["img/projects/frogger1.png", "img/projects/frogger2.png", "img/projects/frogger3.png"]
  },
  {
    id: 6,
    name: "Restaurant Reviews App",
    description: "A small front-end application for a restaurant review website.",
    skills: "Javascript, HTML, CSS, SASS, Nodejs",
    screenshots: ["img/projects/restaurant1.png", "img/projects/restaurant2.png", "img/projects/restaurant3.png"]
  },
  {
    id: 7,
    name: "MyReads Book Tracking App",
    description: "A small front-end application to track the books you have read, and books you are currently reading",
    skills: "Javascript, ReactJS, HTML, CSS, SASS, Nodejs",
    screenshots: ["img/projects/myreads1.png", "img/projects/myreads2.png", "img/projects/myreads3.png"],
    livePreview: "https://umbreonhugs.github.io/myreads-live/",
    githubLink: "https://github.com/UmbreonHugs/myreads-book-tracking-app"
  },
  {
    id: 8,
    name: "Neighborhood Map",
    description: "An app that will help you find the best places to eat in Downtown Tracy!",
    skills: "Javascript, ReactJS, HTML, CSS, SASS, REST API",
    screenshots: ["img/projects/map1.png", "img/projects/map2.png", "img/projects/map3.png"],
    livePreview: "https://umbreonhugs.github.io/neighborhood-map-live/",
    githubLink: "https://github.com/UmbreonHugs/Neighborhood-Map"
  }
]

let sortedProjects = [];
let projectInfo = {};
const listProjectID = document.getElementById("list-projects");
const resetButton = document.getElementById("resetButton");

let listAllProjects = () => {
    listProjectID.innerHTML = projects.map(function(project){

    let html = `<div class="col-md-4 col-sm-6 col-xs-12 mb-4">
              <div class="card text-white">
                <img class="card-img" src="${project.screenshots[0]}" alt="Card image">
                <div class="card-img-overlay card-hover">
                  <h5 class="card-title">${project.name}</h5>
                  <p class="card-text">${project.description}</p>
                  <button type="button" class="btn btn-primary btn-lg btn-block" onclick="triggerPopup(${project.id})">Learn More</button>
                </div>
              </div>
            </div>`;
    return html;
  }).join('')
}
let triggerPopup = (id) => {
  popupProject = projects.find(project => project.id === id)
  projectInfo = popupProject;
  showPopup()
}
let showPopup = () => {
  // we need to check the buttons
  let livePreview, playNow, githubLink;
  if (projectInfo.livePreview) {
    livePreview = `<a href="${projectInfo.livePreview}" target="_blank" class="btn btn-primary btn-lg btn-block mt-2">Live Preview</a>`
  } else {
    livePreview = "";
  }
  if (projectInfo.playNow) {
    playNow = `<a href="${projectInfo.playNow}" target="_blank" class="btn btn-primary btn-lg btn-block mt-2">Play Now</a>`
  } else {
    playNow = "";
  }
  if (projectInfo.githubLink) {
    githubLink = `<a href="${projectInfo.githubLink}" target="_blank" class="btn btn-primary btn-lg btn-block mt-2">View on Github</a>`
  } else {
    githubLink = "";
  }
  let modalHTML = `
  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title" id="exampleModalLongTitle">${projectInfo.name}</h5>
        </div>
        <div class="modal-body">
          <div class="row">
          <div class="col-md-5">
            <div id="carousel-show-${projectInfo.id}" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="carousel-show-${projectInfo.id}" data-slide-to="0" class="active"></li>
                <li data-target="carousel-show-${projectInfo.id}" data-slide-to="1"></li>
                <li data-target="carousel-show-${projectInfo.id}" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="${projectInfo.screenshots[0]}" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="${projectInfo.screenshots[1]}" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="${projectInfo.screenshots[2]}" alt="Third slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carousel-show-${projectInfo.id}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel-show-${projectInfo.id}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            ${livePreview}
            ${playNow}
            ${githubLink}
            </div>
            <div class="col-md-7">
          <p class="lead">${projectInfo.description}</p>
          <p class="primary-text">${projectInfo.skills}</p>
          <hr />
          <p>${projectInfo.longDescription}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
  `;
  $(modalHTML).modal();
}
let sortByTag = (t) => {
  resetButton.innerHTML = "Reset Button";
  // push the sorted results into its array
  let filteredProjects = projects.filter(project => project.skills.includes(t));
  listProjectID.innerHTML = filteredProjects.map(function(project){
  let html = `<div class="col-md-4 col-sm-6 col-xs-12 mb-4">
            <div class="card text-white">
              <img class="card-img" src="${project.screenshots[0]}" alt="Card image">
              <div class="card-img-overlay card-hover">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">${project.description}</p>
                <button type="button" class="btn btn-primary btn-lg btn-block" onclick="triggerPopup(${project.id})">Learn More</button>
              </div>
            </div>
          </div>`;
  return html;
}).join('')
}

listAllProjects()
