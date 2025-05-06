document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.favorito').forEach(boton => {
        boton.addEventListener('click', (event) => {
            event.preventDefault();

            const imagen = boton.querySelector('img');

            // Si el corazón está vacío, se marca como favorito
            if (imagen.src.includes('corazonvacio.png')) {
                imagen.src = '../imgs/corazonrojo.png';

                // Añadir la clase de latido
                imagen.classList.add('latido');
            } else {
                // Si el corazón está rojo, se desmarca
                imagen.src = '../imgs/corazonvacio.png';

                // Eliminar la clase latido (sin animación de latido)
                imagen.classList.remove('latido');
            }
        });
    });
});

function pasarDatos(boton) {
    const nombre = encodeURIComponent(boton.getAttribute('data-nombre'));
    const raza = encodeURIComponent(boton.getAttribute('data-raza'));
    const tamano = encodeURIComponent(boton.getAttribute('data-tamano'));
    const edad = encodeURIComponent(boton.getAttribute('data-edad'));

    const url = `form1.html?nombre=${nombre}&raza=${raza}&tamano=${tamano}&edad=${edad}`;
    window.location.href = url;
  }