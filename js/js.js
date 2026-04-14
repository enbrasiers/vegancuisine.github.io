document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración: Tiempo en milisegundos (3000 = 3 segundos)
    const tiempoAutoPlay = 3000;

    const inicializarCarrusel = (idTrack, idPrev, idNext) => {
        const track = document.getElementById(idTrack);
        const prev = document.getElementById(idPrev);
        const next = document.getElementById(idNext);

        if (!track || !prev || !next) return;

        const moverDerecha = () => {
            // Si llega al final, vuelve al principio
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: 330, behavior: 'smooth' });
            }
        };

        const moverIzquierda = () => {
            track.scrollBy({ left: -330, behavior: 'smooth' });
        };

        // Eventos de botones
        next.addEventListener('click', moverDerecha);
        prev.addEventListener('click', moverIzquierda);

        // --- LÓGICA DE MOVIMIENTO AUTOMÁTICO ---
        let intervalo = setInterval(moverDerecha, tiempoAutoPlay);

        // Detener al pasar el mouse (para que el usuario pueda ver bien)
        track.addEventListener('mouseenter', () => clearInterval(intervalo));
        
        // Reanudar al quitar el mouse
        track.addEventListener('mouseleave', () => {
            intervalo = setInterval(moverDerecha, tiempoAutoPlay);
        });
    };

    // Inicializamos el carrusel de tu código (id: galleryGrid)
    // Si agregas los otros 4, solo repite esta línea cambiando el número
    inicializarCarrusel('galleryGrid', 'prevBtn', 'nextBtn');
    
    // Ejemplo para tus otras secciones si las habilitas:
    // inicializarCarrusel('galleryGrid1', 'prevBtn1', 'nextBtn1');
    // inicializarCarrusel('galleryGrid2', 'prevBtn2', 'nextBtn2');

    // Desplazamiento suave para los links del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


