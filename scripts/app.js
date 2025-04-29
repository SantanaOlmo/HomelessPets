// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Tu configuración de Firebase (cópiala desde la consola de Firebase)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Elementos
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const formSection = document.getElementById("formSection");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const descripcion = document.getElementById("descripcion");
const agregarBtn = document.getElementById("agregarBtn");
const listaPerros = document.getElementById("listaPerros");

// Iniciar sesión
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Sesión iniciada");
  } catch (error) {
    alert("Error: " + error.message);
  }
});

// Cerrar sesión
logoutBtn.addEventListener("click", () => {
  signOut(auth);
});

// Estado de sesión
onAuthStateChanged(auth, user => {
  if (user) {
    formSection.style.display = "block";
    cargarPerros();
  } else {
    formSection.style.display = "none";
    listaPerros.innerHTML = "";
  }
});

// Agregar nuevo perro
agregarBtn.addEventListener("click", async () => {
  try {
    await addDoc(collection(db, "perros"), {
      nombre: nombre.value,
      edad: edad.value,
      descripcion: descripcion.value
    });
    nombre.value = "";
    edad.value = "";
    descripcion.value = "";
    cargarPerros();
  } catch (e) {
    alert("Error al agregar: " + e.message);
  }
});

// Mostrar perros
async function cargarPerros() {
  listaPerros.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "perros"));
  querySnapshot.forEach((doc) => {
    const perro = doc.data();
    const li = document.createElement("li");
    li.textContent = `${perro.nombre} (${perro.edad} años): ${perro.descripcion}`;
    listaPerros.appendChild(li);
  });
}
