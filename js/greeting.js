import { firestore } from "./firebase";

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

async function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  await saveUsernameToFirestore(username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username} 님! 오늘도 안 화이팅!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

async function saveUsernameToFirestore(username) {
  const usersCollection = collection(firestore, "users");
  try {
    await addDoc(usersCollection, { username });
    console.log("Username saved to Firestore!");
  } catch (error) {
    console.error("Error saving username to Firestore: ", error);
  }
}

loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
