import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as todoApiService from "../../api/todoApiService";
import TodoModifyForm from "./TodoModifyForm";
import { CreateUUID } from "../../utils/uuidUtil";

function TodoModifyPage() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [actionName] = useState(id !== "0" ? "Edit" : "Add");
  const [todo, setTodo] = useState({
    partitionKey: null,
    rowKey: null,
    firstName: null,
    lastName: null,
  });

  const getTodo = useCallback(() => {
    todoApiService.getTodoById("Admin", id).then((data) => setTodo(data));
  }, [id]);

  useEffect(() => {
    if (actionName === "Edit") {
      getTodo();
    }
  }, [actionName, getTodo]);

  function handleChange({ target }) {
    setTodo({
      ...todo,
      [target.name]: target.value,
    });
  }

  const handleBack = () => {
    navigate("/todo");
  };

  function handleSubmit() {
    if (actionName === "Edit") {
      //handleBack();
      console.log(todo);
      todoApiService.updateTodo(todo).then(() => {
        handleBack();
      });
    } else {
      todo.rowKey = CreateUUID();
      todoApiService.addTodo(todo).then(() => {
        handleBack();
      });
    }
  }

  function handleDelete() {
    todoApiService.deleteTodo("Admin", id).then(() => {
      handleBack();
    });
  }

  return (
    <div className="jumbotron">
      <h1>{actionName} Todo</h1>
      <Link to="/todo" className="btn btn-lg btn-primary">
        &laquo; Back
      </Link>
      <TodoModifyForm
        todo={todo}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default TodoModifyPage;
