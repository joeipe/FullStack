import React from "react";
import { Link } from "react-router-dom";

function TodoList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.todos?.map((todo) => {
          return (
            <tr key={todo.rowKey}>
              <td>{todo.firstName}</td>
              <td>{todo.lastName}</td>
              <td>{todo.partitionKey}</td>
              <td>
                <Link to={`/todo/${todo.rowKey}`}>Edit</Link>&nbsp;
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoList;
