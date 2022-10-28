import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getAllTodo } from "../../api/todoApiService";
import FrkTodoList from "./FrkTodoList"

function FrkTodoListPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodo().then((data) => setTodos(data));
  }, []);

  return (
    <div className="jumbotron">
      <h1>Formik Todo's</h1>
      <Link to='/frktodo/0' className='btn btn-lg btn-primary'>
        &spades; Add
      </Link>
      <FrkTodoList todos={todos}/>
    </div>
  );
}

export default FrkTodoListPage;
