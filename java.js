// 1. Buscamos el bloque con el ID de tu imagen
const container = document.getElementById('letra-mom');
const lineas = container.querySelectorAll('.linea');
// CORRECCIÓN: 'micancion' en minúsculas para que coincida con tu HTML
const audio = document.getElementById('micancion'); 

audio.addEventListener('timeupdate', () => {
  let tiempoActual = audio.currentTime;
  console.log("Tiempo actual: " + tiempoActual);

  lineas.forEach((linea, index) => {
    let tiempoLinea = parseFloat(linea.getAttribute('data-time'));
    let proximoTiempo = lineas[index + 1] ? parseFloat(lineas[index + 1].getAttribute('data-time')) : 999;

    if (tiempoActual >= tiempoLinea && tiempoActual < proximoTiempo) {
      // CORRECCIÓN: Usamos 'l' (de línea) no el número 1
      lineas.forEach(l => l.classList.remove('activa'));
      linea.classList.add('activa');
      
      // Solo marca la línea como activa sin hacer scroll automático
    }
  });
});

// Esto asegura que la música empiece al tocar la flor
document.querySelector('.center').onclick = () => {
    audio.play();
};