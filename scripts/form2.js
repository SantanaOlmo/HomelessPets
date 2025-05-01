import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5anzloDrlFRR_XiEgIwnucLRnJs6vJP0",
  authDomain: "homelesspets-70a83.firebaseapp.com",
  projectId: "homelesspets-70a83",
  storageBucket: "homelesspets-70a83.appspot.com",
  messagingSenderId: "156296592768",
  appId: "1:156296592768:web:ed47bb5c0aa7b15a55d565",
  measurementId: "G-JBR6M4XMJD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("formulario");
const estado = document.getElementById("estado");
const contenedor = document.getElementById("contenedor");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const archivo = document.getElementById("imagen").files[0];
  if (!archivo) {
    estado.textContent = "Selecciona una imagen.";
    estado.style.color = "red";
    return;
  }

  const reader = new FileReader();
  reader.onloadend = async () => {
    const base64Image = reader.result;

    const data = {
      nombre: document.getElementById("nombre").value,
      apellidos: document.getElementById("apellidos").value,
      fechaNacimiento: document.getElementById("fecha").value,
      direccion: document.getElementById("direccion").value,
      telefonos: document.getElementById("telefonos").value,
      email: document.getElementById("email").value,
      perroNombre: document.getElementById("perro-nombre").value,
      perroRaza: document.getElementById("perro-raza").value,
      perroTamano: document.getElementById("perro-tamano").value,
      perroEdad: document.getElementById("perro-edad").value,
      respuesta1: document.getElementById("p1").value,
      respuesta2: document.getElementById("p2").value,
      respuesta3: document.getElementById("p3").value,
      respuesta4: document.getElementById("p4").value,
      imagenBase64: base64Image,
      fechaEnvio: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, "formulariosAdopcion"), data);
      estado.textContent = "✅ Formulario enviado correctamente.";
      estado.style.color = "green";

      // Crear el nuevo perro en el HTML
      const newPerro = document.createElement("div");
      newPerro.classList.add("cajaentera");

      newPerro.innerHTML = `
        <div class="visible">
            <img class="fotoanimal" src="${base64Image}" alt="Foto perro">
            <h2 class="nombre">${data.perroNombre}</h2>
            <p class="descripcion">Descripción del perro.</p>
            <button class="adoptar" onclick="pasarDatos(this)"
                data-nombre="${data.perroNombre}"
                data-raza="${data.perroRaza}"
                data-tamano="${data.perroTamano}"
                data-edad="${data.perroEdad}">adoptar</button>
            <button class="favorito"><img src="../imgs/corazonvacio.png" alt="favorito"></button>
        </div>
        <div class="oculto">
            <p>Edad: ${data.perroEdad} años</p>
            <p>Raza: ${data.perroRaza}</p>
            <p>Tamaño: ${data.perroTamano}</p>
            <p>Descripción: ${data.respuesta1}</p>
        </div>
      `;

      contenedor.appendChild(newPerro);

      form.reset();  // Limpiar el formulario
    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
      estado.textContent = "❌ Error al enviar el formulario.";
      estado.style.color = "red";
    }
  };

  reader.readAsDataURL(archivo);
});
