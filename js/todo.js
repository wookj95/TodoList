import { firestore } from "./firebase";

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const BUTTON_NAME = "button-name";

function deleteToDo(event) {
  const li = event.target.parentElement;
  const todoId = li.id;

  deleteDoc(doc(firestore, "todos", todoId))
    .then(() => {
      li.remove();
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

function paintToDo(todoId, newTodoText) {
  const li = document.createElement("li");
  li.id = todoId;
  const span = document.createElement("span");
  span.innerText = newTodoText;
  const button = document.createElement("button");
  button.className = BUTTON_NAME;
  button.innerText = "  ❌  ";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

async function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodoText = toDoInput.value;
  toDoInput.value = "";
  try {
    const docRef = await addDoc(collection(firestore, "todos"), {
      text: newTodoText,
    });
    paintToDo(docRef.id, newTodoText);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

onSnapshot(collection(firestore, "todos"), (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const todoId = doc.id;
    const todo = doc.data();
    paintToDo(todoId, todo.text);
  });
});
