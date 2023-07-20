const contentEl = document.getElementById("content");
const asideEl = document.createElement("div");
const mainEl = document.createElement("div");
const addProjectBtnEl = document.createElement("button");
const addTodoBtnEl = document.createElement("button");
const projectName = document.createElement("h1");
contentEl.setAttribute("id", "content");

const renderSkeleton = () => {
  contentEl.setAttribute("id", "content");
  asideEl.classList.add("aside");
  addProjectBtnEl.textContent = "ADD NEW PROJECT";
  asideEl.appendChild(addProjectBtnEl);

  projectName.textContent = "PROJECT NAME";
  mainEl.appendChild(projectName);
  mainEl.classList.add("main");
  addTodoBtnEl.textContent = "ADD NEW TASK";
  mainEl.appendChild(addTodoBtnEl);

  contentEl.appendChild(asideEl);
  contentEl.appendChild(mainEl);
};

export { renderSkeleton, addProjectBtnEl, addTodoBtnEl };
