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
    skills: "reactjs, Javascript, SASS, CSS, HTML, Docker, nginx",
    screenshots: ["img/projects/tracyharbour1.png"],
    livePreview: "https://www.tracyharbour.com"
  },
  {
    id: 2,
    name: "Milano Pizza",
    description: "Custom built 1-page website, with a responsive menu, slideshow, and a backend menu editor.",
    skills: "HTML, CSS, Javascript, jQuery, Bootstrap, SASS, PHP, MySQL",
    screenshots: ["img/projects/milano1.png"],
    livePreview: "https://milanopizzatracyca.com/"
  },
  {
    id: 3,
    name: "PROJECT: G-Tourneys",
    description: "Project for a tournament software, included admin panel, user authentication, registration, support tickets, and responsive design.",
    skills: "Javascript, PHP, Bootstrap, HTML, CSS, MySQL, nginx",
    screenshots: ["img/projects/gtourneys1.png"]
  },
  {
    id: 4,
    name: "Memory Game",
    description: "Memory matching game, coded in Vanilla Javascript",
    skills: "Javascript, Bootstrap, HTML, CSS",
    screenshots: ["https://placeimg.com/800/800/tech"]
  },
  {
    id: 5,
    name: "Frogger",
    description: "Frogger Arcade Game Clone, coded in Vanilla Javascript",
    skills: "Javascript, Bootstrap, HTML, CSS",
    screenshots: ["https://placeimg.com/800/800/tech"]
  },
  {
    id: 6,
    name: "Restaurant Reviews App",
    description: "A small front-end application for a restaurant review website.",
    skills: "Javascript, Bootstrap, HTML, CSS,, SASS",
    screenshots: ["https://placeimg.com/800/800/tech"]
  }
]

let sortedProjects = [];
let projectInfo = {};
const listProjectID = document.getElementById("list-projects");
let sorted = false;
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
  let modalHTML = `
  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content text-center">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">${projectInfo.name}</h5>
        </div>
        <div class="modal-body">
          <img src="${projectInfo.screenshots[0]}" class="img-fluid rounded col-md-4" />
          <span class="skill html">HTML</span> <span class="skill css">CSS</span> <span class="skill sass">SASS</span> <span class="skill react">SASS</span>
          <p class="lead">${projectInfo.description}</p>
          <p>${projectInfo.longDescription}</p>
          <button type="button" class="btn btn-primary btn-lg" onclick="resetGame()" data-dismiss="modal">Play again</button>
        </div>
      </div>
    </div>
  </div>
  `;
  $(modalHTML).modal();
}
let sortByTag = (t) => {
  sorted = true;
  // push the sorted results into its array
  let filteredProjects = projects.filter(project => project.skills.includes(t));
  listProjectID.innerHTML = filteredProjects.map(function(project){
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
