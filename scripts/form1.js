// Espera a que el DOM esté cargado
window.onload = () => {
  // Rellena datos de la mascota desde los parámetros de la URL
  document.getElementById('mascota-nombre').value = getParametro('nombre');
  document.getElementById('mascota-raza').value = getParametro('raza');
  document.getElementById('mascota-tamano').value = getParametro('tamano');
  document.getElementById('mascota-edad').value = getParametro('edad');

  // Maneja el envío del formulario
  const form = document.querySelector('.form-container');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío real

    let mensaje = document.getElementById("mensaje");
    mensaje.style.color = "green";
    mensaje.textContent = "Formulario completado. Redirigiendo...";

    // Redirige después de 2 segundos
    setTimeout(() => {
      window.location.href = "/../index.html";
    }, 2000);
  });
};

// Función auxiliar para obtener parámetros de la URL
function getParametro(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre) || '';
}
