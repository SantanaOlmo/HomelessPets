
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

// Configuración del proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5anzloDrlFRR_XiEgIwnucLRnJs6vJP0",
  authDomain: "homelesspets-70a83.firebaseapp.com",
  projectId: "homelesspets-70a83",
  storageBucket: "homelesspets-70a83.appspot.com",
  messagingSenderId: "156296592768",
  appId: "1:156296592768:web:ed47bb5c0aa7b15a55d565",
  measurementId: "G-JBR6M4XMJD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Asociar el storage al app por claridad

// Evento al hacer clic en "Subir imagen"
document.getElementById("subir").addEventListener("click", async () => {
  const archivo = document.getElementById("imagen").files[0];
  const estado = document.getElementById("estado");

  if (!archivo) {
    estado.textContent = "Por favor, selecciona una imagen.";
    return;
  }

  // Crear una referencia organizada en la carpeta 'pruebas'
  const archivoNombre = archivo.name;
  const rutaStorage = `pruebas/${Date.now()}_${archivoNombre}`;
  const archivoRef = ref(storage, rutaStorage); // <== estilo oficial

  try {
    estado.textContent = "Subiendo imagen...";
    await uploadBytes(archivoRef, archivo);
    const url = await getDownloadURL(archivoRef);
    estado.innerHTML = `✅ Imagen subida correctamente. <br><a href="${url}" target="_blank">${url}</a>`;
    console.log("URL de imagen:", url);
  } catch (error) {
    alert("Error al subir la imagen:", error);
    console.error("Error al subir la imagen:", error);
    estado.textContent = "❌ Error al subir la imagen: " + error.message;
  }
});
