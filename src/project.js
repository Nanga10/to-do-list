import { addProjectBtnEl } from "./dom_elements";
let arrProjects = [];
const projectItemEl = document.createElement("div");
const addProjectModal = document.createElement("h1");
const contentEL = document.getElementById("content");
const overlayEl = document.createElement("div");
const submitProjectBtn = document.createElement("button");

const renderNewProjectForm = () => {
  overlayEl.classList.add("overlay");
  contentEL.appendChild(overlayEl);
  //form to input projects name and description
  // sumbit button adds project to array and adds projects name to side par
  //close over law when it clickerd
};

const createNewProject = () => {
  addProjectBtnEl.addEventListener("click", () => {
    renderNewProjectForm();
  });
};

export { createNewProject };
