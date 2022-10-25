import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getAllTodo } from "../../api/todoApiService";
import TodoList from "./TodoList"

function TodoListPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodo().then((data) => setTodos(data));
  }, []);

  return (
    <div className="jumbotron">
      <h1>Todo's</h1>
      <Link to='/todo/0' className='btn btn-lg btn-primary'>
        &spades; Add
      </Link>
      <TodoList todos={todos}/>
    </div>
  );
}

export default TodoListPage;
