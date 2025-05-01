// Función para obtener parámetros de la URL
function getParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre) || '';
  }

  // Cuando se cargue la página, rellenar el formulario
  window.onload = () => {
    document.getElementById('mascota-nombre').value = getParametro('nombre');
    document.getElementById('mascota-raza').value = getParametro('raza');
    document.getElementById('mascota-tamano').value = getParametro('tamano');
    document.getElementById('mascota-edad').value = getParametro('edad');
  };