window.onload = () => {
  const taskListContainer = document.getElementById("taskContainer");
  taskListContainer.innerHTML +=
    "<div class='task-item' onclick='addClassDone(event)'> Paint the hall walls</div>";
  taskListContainer.innerHTML +=
    "<div class='task-item' onclick='addClassDone(event)'> Change the broken lightbulb in the livingroom</div>";
};

const addClassDone = (event) => {
  const elementClicked = event.target;
  elementClicked.classList.toggle("done");
};

const enterToTask = (event) => {
  if (event.key === "Enter") {
    const newTaskValue = document.getElementById("newTask").value;
    if (newTaskValue === "") {
      alert("Please write something in the input field first");
    } else {
      const newDiv = document.createElement("div");
      newDiv.classList.add("task-item");
      newDiv.innerText = newTaskValue;
      newDiv.onclick = addClassDone;
      document.getElementById("taskContainer").appendChild(newDiv);
      document.getElementById("newTask").value = "";
    }
  }
};

const addToTask = () => {
  const newTaskValue = document.getElementById("newTask").value;
  if (newTaskValue === "") {
    alert("Please write something in the input field first");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("task-item");
    newDiv.innerText = newTaskValue;
    newDiv.onclick = addClassDone;
    document.getElementById("taskContainer").appendChild(newDiv);
    document.getElementById("newTask").value = "";
  }
};

const removeDoneTasks = () => {
  const taskList = document.getElementById("taskContainer");
  const tasksCompleted = document.querySelectorAll(".done");
  tasksCompleted.forEach((element) => taskList.removeChild(element));
};
