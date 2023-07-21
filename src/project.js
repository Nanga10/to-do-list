import { addProjectBtnEl, asideEl } from "./dom_elements";
let arrProjects = [];

//Add project form  DOM elements
const projectItemEl = document.createElement("div");
const contentEL = document.getElementById("content");
const overlayEl = document.createElement("div");
const submitProjectBtn = document.createElement("button");
const addProjectFormEl = document.createElement("div");
const projectTitleEl = document.createElement("label");
const projectDescEl = document.createElement("label");
const projectTitleInp = document.createElement("input");
const projectDescInp = document.createElement("input");
const cancelProjectBtn = document.createElement("button");
const projectTitleDiv = document.createElement("div");
const projectDescDiv = document.createElement("div");
const projectBtnDiv = document.createElement("div");
const projectTitle = document.createElement("h2");

const renderNewProjectForm = () => {
  asideEl.append(projectItemEl);
  projectItemEl.classList.add("project-item-div");

  overlayEl.classList.add("overlay");
  contentEL.appendChild(overlayEl);
  addProjectFormEl.setAttribute("id", "add-project-div");
  overlayEl.appendChild(addProjectFormEl);

  projectTitleDiv.classList.add("form-div");
  addProjectFormEl.appendChild(projectTitleDiv);

  projectTitleEl.textContent = "Project Name";
  projectTitleDiv.appendChild(projectTitleEl);
  projectTitleDiv.appendChild(projectTitleInp);

  projectDescDiv.classList.add("form-div");
  addProjectFormEl.appendChild(projectDescDiv);

  projectDescEl.textContent = "Project Description";
  projectDescDiv.appendChild(projectDescEl);
  projectDescDiv.appendChild(projectDescInp);

  projectBtnDiv.classList.add("form-div");
  addProjectFormEl.appendChild(projectBtnDiv);
  projectBtnDiv.appendChild(submitProjectBtn);
  submitProjectBtn.classList.add("submitButton");
  submitProjectBtn.textContent = "Submit";

  projectBtnDiv.appendChild(cancelProjectBtn);
  cancelProjectBtn.classList.add("cancelButton");
  cancelProjectBtn.textContent = "Cancel";
};

const createNewProject = () => {
  addProjectBtnEl.addEventListener("click", () => {
    renderNewProjectForm();
  });
};

cancelProjectBtn.addEventListener("click", () => {
  overlayEl.remove();
});

//Object constructor for a new project
function Project(Name, Description) {
  this.Name = Name;
  this.Description = Description;
}

submitProjectBtn.addEventListener("click", () => {
  const project = new Project(projectTitleInp.value, projectDescInp.value);
  console.log(project);
  arrProjects.push(project);
  projectTitle.innerHTML += `${projectTitleInp.value} <br>`;
  projectItemEl.append(projectTitle);
  console.log(arrProjects);
  overlayEl.remove();
  projectTitleInp.value = " ";
  projectDescInp.value = " ";
});

export { createNewProject };
