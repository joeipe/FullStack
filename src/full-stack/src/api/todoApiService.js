import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://localhost:44346/api/Person";

export function getAllTodo() {
  return fetch(`${baseUrl}/GetAllTodo`)
  .then(handleResponse)
  .catch(handleError);
}

export function getTodoById(pk, id) {
  return fetch(`${baseUrl}/GetTodoById/${pk}/${id}`)
    .then(handleResponse)
    .catch(handleError);
}

export function addTodo(todo) {
  return fetch(`${baseUrl}/AddTodo`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateTodo(todo) {
  console.log('todo is, ', JSON.stringify(todo));
  return fetch(`${baseUrl}/UpdateTodo`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then((res) => {
      console.log(`response is, ${res}`);
    })
    .catch((err) => {
      console.log(`response is, ${err}`);
    });
}

export function deleteTodo(pk, id) {
  return fetch(`${baseUrl}/DeleteTodo/${pk}/${id}`, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
