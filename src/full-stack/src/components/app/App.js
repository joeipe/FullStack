import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../common/Header";
import NotFoundPage from "../NotFoundPage";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import TodoListPage from "../todo/TodoListPage";
import TodoModifyPage from "../todo/TodoModifyPage";

function App() {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo/:id" element={<TodoModifyPage />} />
          <Route path="/todo" element={<TodoListPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
