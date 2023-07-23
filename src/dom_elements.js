const contentEl = document.getElementById("content");
const asideEl = document.createElement("div");
const mainEl = document.createElement("div");
const addProjectBtnEl = document.createElement("button");
const addTodoBtnEl = document.createElement("button");
let projectNameEl = document.createElement("h1");
let projectDescriptionEl = document.createElement("p");
contentEl.setAttribute("id", "content");

const renderSkeleton = () => {
  contentEl.setAttribute("id", "content");
  asideEl.classList.add("aside");
  addProjectBtnEl.textContent = "ADD NEW PROJECT";
  addProjectBtnEl.classList.add("site-buttons");
  asideEl.appendChild(addProjectBtnEl);

  projectNameEl.textContent = " ";
  mainEl.appendChild(projectNameEl);
  projectDescriptionEl.textContent = " ";
  mainEl.appendChild(projectDescriptionEl);
  mainEl.classList.add("main");
  addTodoBtnEl.textContent = "ADD NEW TASK";
  addTodoBtnEl.classList.add("site-buttons");
  mainEl.appendChild(addTodoBtnEl);

  contentEl.appendChild(asideEl);
  contentEl.appendChild(mainEl);
};

export {
  renderSkeleton,
  addProjectBtnEl,
  addTodoBtnEl,
  asideEl,
  mainEl,
  projectNameEl,
  projectDescriptionEl,
};
