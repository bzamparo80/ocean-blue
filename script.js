
const nav = document.querySelector(".navbar-nav");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelectorAll(".nav-link");

const navToggleFunc = function () {
    nav.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);

for (let i = 0; i < navLinks.length; i++) {

    navLinks[i].addEventListener("click", navToggleFunc);
}


    // JavaScript para iniciar la reproducción automática y el bucle
    const iframe = document.getElementById('youtube-iframe');

    // Agregar parámetros de URL para autoplay y loop
    const src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + '&autoplay=1&mute=1&loop=1');



// Función para observar cuando el elemento .box entra y sale del área visible
function watchForEntry(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!entry.target.classList.contains('animate')) {
                entry.target.querySelector('.box').classList.add('animate'); // Agrega la clase solo si no está presente
            }
        } else {
            entry.target.querySelector('.box').classList.remove('animate'); // Quita la clase cuando sale de la vista
        }
    });
}
// Crea un observador
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01, // Cuanto del elemento tiene que estar visible para que se active
};

const observer = new IntersectionObserver(watchForEntry, options);

// Observa la sección con el id "about-section"
const aboutSection = document.getElementById('about-section');
if (aboutSection) {
    observer.observe(aboutSection);
}



//servicios

// Función para verificar si el usuario está dentro de la sección de servicios
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0 &&
      rect.left <= window.innerWidth &&
      rect.right >= 0
    );
  }
  
  // Función para activar o desactivar la animación en los elementos de servicios
  function handleAnimation() {
    var servicesSection = document.querySelector('.services.section');
    var boxes = document.querySelectorAll('.box-services');
  
    if (isElementInViewport(servicesSection)) {
      boxes.forEach(function (box) {
        box.classList.add('scale-up-center');
      });
    } else {
      boxes.forEach(function (box) {
        box.classList.remove('scale-up-center');
      });
    }
  }
  
  // Detectar el evento de desplazamiento para manejar la animación
  window.addEventListener('scroll', handleAnimation);
  
  // Ejecutar la función inicialmente para manejar la animación en la carga de la página
  handleAnimation();