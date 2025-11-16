import React from "react";
import ToDosList from "./ToDosList";

const RenderComponent = () => {
  const ToDos = [
    { id: 1, name: "first ToDo" },
    { id: 2, name: "second ToDo" },
    { id: 3, name: "third ToDo" },
    { id: 4, name: "fourth ToDo" },
  ];
  return (
    <div>
      {ToDos.map((todo) => {
        console.log(todo);
        return <ToDosList key={todo.id} todo={todo.name} />;
      })}
    </div>
  );
};

export default RenderComponent;
