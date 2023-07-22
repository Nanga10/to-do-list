import {
  addProjectBtnEl,
  asideEl,
  mainEl,
  projectNameEl,
} from "./dom_elements";
let arrProjects = [];

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
const projectTitles = document.createElement("ul");

let projects = document.querySelectorAll("#listItem");

const projectNameEl = document.createElement("h1");

const renderNewProjectForm = () => {
  projectItemEl.classList.add("project-item-div");
  asideEl.appendChild(projectItemEl);

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

const renderProjectTitles = () => {
  let listItem = document.createElement("div");
  listItem.setAttribute("id", "project-item");

  for (let i = 0; i < arrProjects.length; i++) {
    listItem.textContent = arrProjects[i].Name;
  }
  projectTitles.append(listItem);
  projectItemEl.append(projectTitles);

  document.querySelectorAll("#project-item").forEach((div, index) => {
    div.onclick = () => {
      // projectNameEl.textContent = arrProjects[index].Name;
      console.log(arrProjects[index].Name);
    };
  });
};

//Object constructor for a new project
function Project(Name, Description, tasks) {
  this.Name = Name;
  this.Description = Description;
  this.tasks = tasks;
  tasks = [];
}

const addProjectToList = () => {
  const project = new Project(projectTitleInp.value, projectDescInp.value);
  arrProjects.push(project);
};

submitProjectBtn.addEventListener("click", () => {
  addProjectToList();
  renderProjectTitles();
  overlayEl.remove();
  projectTitleInp.value = " ";
  projectDescInp.value = " ";
});

export { createNewProject };
