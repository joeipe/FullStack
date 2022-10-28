import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../common/Header";
import NotFoundPage from "../NotFoundPage";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import TodoListPage from "../todo/TodoListPage";
import TodoModifyPage from "../todo/TodoModifyPage";
import FrkTodoListPage from "../todoFormik/FrkTodoListPage";
import FrkTodoModifyPage from "../todoFormik/FrkTodoModifyPage";

function App() {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoListPage />} />
          <Route path="/todo/:id" element={<TodoModifyPage />} />
          <Route path="/frktodo" element={<FrkTodoListPage />} />
          <Route path="/frktodo/:id" element={<FrkTodoModifyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
