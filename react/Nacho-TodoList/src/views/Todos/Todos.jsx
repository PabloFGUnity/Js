import { useState } from "react";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import { todolist } from "../../api/todolist";

export default function Todos() {
  const [todos, setTodos] = useState(todolist);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const newTodo = {
      userId: 1,
      id: new Date().getTime(),
      title: newTodoTitle,
      completed: false,
    };
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    setNewTodoTitle("");
  }

  return (
    <>
      <h1>Todos View</h1>
      <Form
        onSubmit={onSubmit}
        setState={setNewTodoTitle}
        state={newTodoTitle}
      />
      <List items={todos} setState={setTodos} />
    </>
  );
}
