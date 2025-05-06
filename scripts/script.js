// ------LOGIN------

// Recuperar usuarios desde localStorage o usar los predeterminados
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [
  { username: "Admin", password: "admin" },
  { username: "Carlos", password: "12345" },
  { username: "Cliente", password: "54321" }
];

document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const usuarioExistente = usuariosRegistrados.some(
    user => user.username.toLowerCase() === username.toLowerCase()
  );

  let mensaje = document.getElementById("mensaje");
  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.id = "mensaje";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "10px";
    document.querySelector("main").appendChild(mensaje);
  }

  if (usuarioExistente) {
    mensaje.style.color = "red";
    mensaje.textContent = "El nombre de usuario ya está en uso.";
    return;
  }

  if (password !== confirmPassword) {
    mensaje.style.color = "red";
    mensaje.textContent = "Las contraseñas no coinciden.";
    return;
  }

  // Guardar nuevo usuario
  usuariosRegistrados.push({ username, password, email });
  localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

  mensaje.style.color = "green";
  mensaje.textContent = "Registro completado. Redirigiendo...";

  setTimeout(() => {
    window.location.href = "/../index.html";
  }, 2000);
});

//----INICIO DE SESION-----
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const usernameInput = form.querySelector('input[name="username"]');
  const passwordInput = form.querySelector('input[name="password"]');
  const bienvenidaDiv = document.getElementById("bienvenida");
  const mensajeBienvenida = document.getElementById("mensajeBienvenida");

  // Cargar usuarios desde localStorage
  const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recarga de página
  
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const mensajeError = document.getElementById("login-error");
  
    const usuarioValido = usuariosRegistrados.find(
      user => user.username.toLowerCase() === username.toLowerCase() && user.password === password
    );
  
    if (usuarioValido) {
      form.style.display = "none";
      mensajeBienvenida.textContent = `Bienvenido ${usuarioValido.username}`;
      bienvenidaDiv.style.display = "flex";
      mensajeError.style.display = "none";
    } else {
      mensajeError.textContent = "Usuario o contraseña incorrectos.";
      mensajeError.style.display = "block";
    }
  });
});

/*--------------------------------------------*/
const imagenesFondo = [
    "url('imgs/InicioBackground/perroupscale.png')",
    "url('imgs/InicioBackground/perro.png')",
    "url('imgs/InicioBackground/conejo.png')",
    "url('imgs/InicioBackground/tortoisefull.png')",
  ];


  let index = 0;

 
  function cambiarFondo() {
    const inicio = document.querySelector('main > #Inicio');
    if (inicio) {
      inicio.style.backgroundImage = imagenesFondo[index];
      inicio.style.backgroundSize = "cover";
      inicio.style.backgroundPosition = "60%";
      inicio.style.transition = "background-image 1s ease-in-out"; // transición suave
      index = (index + 1) % imagenesFondo.length;
    }
  }

  setInterval(cambiarFondo, 8000); // cambia cada 8 segundos

  cambiarFondo(); // llama una vez al principio para poner la primera imagen




  const sidebar = document.getElementById('sidebar');

  document.addEventListener('mousemove', function(e) {
    if (e.clientX < 50) { // Si el mouse está a menos de 50px del borde izquierdo
      sidebar.classList.add('active');
    } else if (e.clientX > 250) { // Si se aleja más de 250px, esconder
      sidebar.classList.remove('active');
    }
  });