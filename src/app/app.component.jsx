import { useState } from "react";

import TaskCard from "../components/task-card/task-card.component";
import TaskInput from "../components/task-input/task-input.component";

import "./app.styles.scss";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [lastId, setLastId] = useState(0);

  const addTodo = (todo) => {
    setTodos((todos) => [...todos, todo]);
    setLastId((lastId) => lastId + 1);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const toggleIsDone = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }

      return { ...todo };
    });

    setTodos(newTodos);
  };

  return (
    <div className="appContainer">
      <TaskInput lastId={lastId} addTodo={addTodo} />
      {todos.map((todo) => {
        const { id, task, isDone } = todo;

        return (
          <TaskCard
            id={id}
            key={id}
            task={task}
            isDone={isDone}
            toggleIsDone={toggleIsDone}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default App;
