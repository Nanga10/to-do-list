import {
  addProjectBtnEl,
  asideEl,
  mainEl,
  projectNameEl,
  projectDescriptionEl,
  addTodoBtnEl,
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
      projectNameEl.textContent = arrProjects[index].Name;
      projectDescriptionEl.textContent = arrProjects[index].Description;
      // console.log(arrProjects[index].Name);
    };
    addTodoBtnEl.onclick = () => {
      arrProjects[index].active = true;
      console.log(arrProjects[index].active);
      renderToDo();
    };
    taskBtnSubmit.onclick = () => {
      const todo = new ToDo(
        taskTitleinp.value,
        taskDescinp.value,
        taskDueinp.value,
        taskPriorityinp.value
      );
      arrProjects[index].tasks.push(todo);
      console.log(arrProjects[index].Name);
      console.log(arrProjects[index].tasks);
      overlayElForm.remove();
      taskTitleinp.value = " ";
      taskDescinp.value = " ";
      taskDueinp.value = " ";
      taskPriorityinp.value = "";
    };
  });
};

//Object constructor for a new project
function Project(Name, Description, tasks = []) {
  this.Name = Name;
  this.Description = Description;
  this.tasks = tasks;
  this.active = false;
}

function ToDo(Title, Description, Duedate, Priority) {
  this.Title = Title;
  this.Description = Description;
  this.Duedate = Duedate;
  this.Priority = Priority;
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

const taskForm = document.createElement("div");
const taskTitlelbl = document.createElement("label");
const taskTitleinp = document.createElement("input");
const taskDesclbl = document.createElement("label");
const taskDescinp = document.createElement("input");
const taskDuelbl = document.createElement("label");
const taskDueinp = document.createElement("input");
const taskPrioritylbl = document.createElement("label");
const taskPriorityinp = document.createElement("input");
const taskBtnDiv = document.createElement("div");
const taskBtnSubmit = document.createElement("button");
const taskBtnCancel = document.createElement("button");
const overlayElForm = document.createElement("div");
const taskTitleDiv = document.createElement("div");
const taskDescDiv = document.createElement("div");
const taskDateDiv = document.createElement("div");
const taskPriorityDiv = document.createElement("div");

const renderToDo = () => {
  overlayElForm.classList.add("overlay");
  contentEL.appendChild(overlayElForm);
  taskForm.setAttribute("id", "add-project-div");
  overlayElForm.appendChild(taskForm);

  taskTitleDiv.classList.add("form-div");
  taskForm.appendChild(taskTitleDiv);
  taskTitlelbl.textContent = "Task Title";
  taskTitleDiv.appendChild(taskTitlelbl);
  taskTitleDiv.appendChild(taskTitleinp);

  taskDescDiv.classList.add("form-div");
  taskForm.appendChild(taskDescDiv);
  taskDesclbl.textContent = "Task Description";
  taskDescDiv.appendChild(taskDesclbl);
  taskDescDiv.appendChild(taskDescinp);

  taskDateDiv.classList.add("form-div");
  taskForm.appendChild(taskDateDiv);
  taskDuelbl.textContent = "Task Due Date";
  taskDateDiv.appendChild(taskDuelbl);
  taskDateDiv.appendChild(taskDueinp);

  taskPriorityDiv.classList.add("form-div");
  taskForm.appendChild(taskPriorityDiv);
  taskPrioritylbl.textContent = "Task Priority";
  taskPriorityDiv.appendChild(taskPrioritylbl);
  taskPriorityDiv.appendChild(taskPriorityinp);

  taskBtnDiv.classList.add("form-div");
  taskForm.appendChild(taskBtnDiv);
  taskBtnDiv.appendChild(taskBtnSubmit);
  taskBtnSubmit.classList.add("submitButton");
  taskBtnSubmit.textContent = "Submit";

  taskForm.appendChild(taskBtnDiv);
  taskBtnDiv.appendChild(taskBtnCancel);
  taskBtnCancel.classList.add("cancelButton");
  taskBtnCancel.textContent = "Cancel";
};

taskBtnCancel.addEventListener("click", () => {
  overlayElForm.remove();
});

export { createNewProject };
