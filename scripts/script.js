const imagenesFondo = [
    "url('/imgs/InicioBackground/perrosUpscale.png')",
    "url('/imgs/InicioBackground/perro.png')",
    "url('/imgs/InicioBackground/conejo.png')",
    "url('/imgs/InicioBackground/tortoiseFULL.png')",
  ];

  let index = 0;

 
  function cambiarFondo() {
    const inicio = document.querySelector('main > #Inicio');
    if (inicio) {
      inicio.style.backgroundImage = imagenesFondo[index];
      inicio.style.backgroundSize = "cover";
      inicio.style.backgroundPosition = "center";
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