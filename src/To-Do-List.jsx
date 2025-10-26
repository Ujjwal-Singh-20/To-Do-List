import React, { useState } from "react";
import "./index.css";

function ToDoList() {
  const [tasks, setTasks] = useState(["make a project"]);
  const [darkMode, setDarkMode] = useState(false);

  const taskLists = tasks.map((task, index) => (
    <li key={index}>
      {task}
      <input type="checkbox" name="checkbox" />
      <button onClick={() => deleteItem(index)}>🗑️</button>
    </li>
  ));

  function addTask(formData) {
    const newTasks = formData.get("task");
    newTasks.length > 0
      ? setTasks((prevtasks) => [...prevtasks, newTasks])
      : null;
  }
  function deleteItem(indexToRemove) {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>TO DO LIST</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div className="container">
        <form action={addTask}>
          <input type="text" placeholder="Enter a task" name="task" />
          <button>Add Task</button>
        </form>
        <ol>{taskLists}</ol>
        <hr />
        {taskLists.length === 1 ? (
          <p>You have 1 task in hand</p>
        ) : (
          <p>You have {taskLists.length} tasks in list</p>
        )}
      </div>
    </div>
  );
}
export default ToDoList;
