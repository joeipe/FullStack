import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as todoApiService from "../../api/todoApiService";
import FrkTodoModifyForm from "./FrkTodoModifyForm";
import { CreateUUID } from "../../utils/uuidUtil";

function FrkTodoModifyPage() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
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

  const formIsValid = () => {
    const _errors = {};

    if (!todo.partitionKey) _errors.role = "Role is required";
    if (!todo.firstName) _errors.firstName = "First Name is required";
    if (!todo.lastName) _errors.lastName = "Last Name is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  const handleBack = () => {
    navigate("/frktodo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid()) return;

    if (actionName === "Edit") {
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

  const handleDelete = () => {
    todoApiService.deleteTodo("Admin", id).then(() => {
      handleBack();
    });
  }

  return (
    <div className="jumbotron">
      <h1>{actionName} Formik Todo</h1>
      <Link to="/frktodo" className="btn btn-lg btn-primary">
        &laquo; Back
      </Link>
      <FrkTodoModifyForm
        todo={todo}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default FrkTodoModifyPage;
