const contentEl = document.getElementById("content");
const asideEl = document.createElement("div");
const mainEl = document.createElement("div");
const addProjectBtnEl = document.createElement("button");
const addTodoBtnEl = document.createElement("button");
const projectNameEl = document.createElement("h1");
contentEl.setAttribute("id", "content");

const renderSkeleton = () => {
  contentEl.setAttribute("id", "content");
  asideEl.classList.add("aside");
  addProjectBtnEl.textContent = "ADD NEW PROJECT";
  addProjectBtnEl.classList.add("site-buttons");
  asideEl.appendChild(addProjectBtnEl);

  projectNameEl.textContent = " ";
  mainEl.appendChild(projectNameEl);
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
};
