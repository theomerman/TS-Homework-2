export function addTask(divTasks: HTMLHtmlElement) {
  let lastTask = divTasks.children.item(divTasks.children.length - 1);
  let newTask = document.createElement("div");
  let id = lastTask?.getAttribute("id");
  let newId = 0;
  if (id) {
    newId = Number(id) + 1;
    newTask.setAttribute("id", newId.toString());
  } else {
    newTask.setAttribute("id", "0");
  }
  newTask.setAttribute(
    "class",
    "flex w-auto min-h-20 bg-slate-300 rounded-lg px-6 mx-6 gap-3 justify-between items-center hover:shadow-lg",
  );
  let taskText = document.createTextNode(
    (document.getElementById("inputText") as HTMLInputElement).value,
  );
  let p = document.createElement("button");
  p.appendChild(taskText);
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  button.setAttribute(
    "class",
    "w-auto h-fit p-2 bg-red-500 rounded-lg hover:drop-shadow-lg",
  );
  button.addEventListener("click", () => removeChild(newId));
  newTask.appendChild(p);
  newTask.appendChild(button);
  divTasks.appendChild(newTask);
  (document.getElementById("inputText") as HTMLInputElement).value = "";
}
function removeChild(id: number) {
  let element = document.getElementById(id.toString());
  element?.remove();
}
export function addButton(
  button: HTMLButtonElement,
  divTasks: HTMLHtmlElement,
) {
  button.addEventListener("click", () => addTask(divTasks));
}
