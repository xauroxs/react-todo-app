import { useState } from "react";

import "./task-input.styles.scss";

const TaskInput = (props) => {
  const { lastId, addTodo } = props;

  const [taskDescription, setTaskDescription] = useState("");

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      handleAdd();
    }
  };

  const handleChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleAdd = () => {
    if (!taskDescription) return;

    const newTodo = {
      id: lastId + 1,
      task: taskDescription,
      isDone: false,
    };

    addTodo(newTodo);

    setTaskDescription("");
  };

  return (
    <div className="taskInputContainer">
      <input
        className="taskInput"
        type="text"
        onChange={handleChange}
        onKeyDown={handleEnter}
        value={taskDescription}
      />
      <div className="taskInputAdd" onClick={handleAdd}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>
      </div>
    </div>
  );
};

export default TaskInput;
