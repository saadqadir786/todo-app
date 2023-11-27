import "../index.css";
import { data } from "./data";
import TaskName from "./TaskName";
import Avatar from "./Avatar";
import { useState } from "react";
import DateCard from "../DateCard";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";

export default function TaskCardList() {
  const [selected, setSelected] = useState(null);
  const [updated, setUpdated] = useState();

  const [todos, setTodos] = useState(data);

  function handleDelete(item) {
    setTodos(todos.filter((x) => x.id !== item));
  }
  function handleUpdate(todoID) {
    const filteredTodo = todos.find((todo) => todo.id === todoID);
    setUpdated(filteredTodo);
  }

  return (
    <>
      <UpdateTask
        existingItem={updated}
        onItemUpdated={(updatedTodo) => {
          setTodos((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === updatedTodo.id ? updatedTodo : todo
            )
          );
          setUpdated(null); // Reset the updated state after the update
          setSelected(null);
        }}
      />
      <AddTask onItemAdded={(todo) => setTodos([...todos, todo])} />
      <DateCard />
      <div className="scroll">
        {todos.map((x, index) => {
          return (
            <div key={index} className="task-card cursor padding">
              <TaskName task={x.task} time={x.time} />
              <Avatar
                selected={selected}
                onChange={(val) => {
                  setSelected(val);
                }}
                id={x.id}
                avatar={x.avatar}
                onItemDelete={(x) => {
                  handleDelete(x);
                }}
                onItemUpdate={(x) => {
                  handleUpdate(x);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
