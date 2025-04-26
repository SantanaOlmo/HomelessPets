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