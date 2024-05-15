import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMIj-7_8JzLjUCDHOBa-H_R9AQvc8tqS4",
  authDomain: "js-todolist-3d643.firebaseapp.com",
  projectId: "js-todolist-3d643",
  storageBucket: "js-todolist-3d643.appspot.com",
  messagingSenderId: "705618940798",
  appId: "1:705618940798:web:a338f42a053416d0a0192f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

async function saveToDoToFirestore(newTodoObj) {
  try {
    await addDoc(collection(db, "todos"), newTodoObj);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function deleteToDoFromFirestore(id) {
  try {
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

async function deleteToDo(event) {
  const li = event.target.parentElement;
  const id = li.id;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== id);
  await deleteToDoFromFirestore(id);
  loadToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.className = "button-name";
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

async function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now().toString(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  await saveToDoToFirestore(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function loadToDos() {
  onSnapshot(collection(db, "todos"), (snapshot) => {
    toDos = [];
    toDoList.innerHTML = "";
    snapshot.forEach((doc) => {
      const toDo = doc.data();
      toDo.id = doc.id;
      toDos.push(toDo);
      paintToDo(toDo);
    });
  });
}

loadToDos();
