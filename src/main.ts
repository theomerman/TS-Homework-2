import { addButton } from "./counter";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section class="flex flex-col gap-5 text-center items-center  mx-auto mt-52 py-6 bg-gray-100 rounded-lg text-white">
    <h1 class="bg-gray-100 w-full text-sky-700 font-bold text-5xl">Todo App!</h1>
    <div id="tasks" class="flex flex-col gap-3 w-full h-full bg-gray-100 overflow-auto text-2xl">
    </div>
    <input id="inputText" type="text" class="w-11/12 h-20 bg-gray-200 text-black text-center text-2xl rounded-lg text-zinc-500" 
        placeholder="Enter your task here" />
    <button id="add-task-button" class="w-11/12 h-20 bg-blue-500 text-2xl rounded-lg">Add Task</button>
</section>
`;
addButton(
  document.querySelector("#add-task-button")!,
  document.querySelector<HTMLHtmlElement>("#tasks")!,
);
