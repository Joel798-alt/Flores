const carta = document.getElementById("carta");
const ventana = document.getElementById("ventana");
const cerrar = document.getElementById("cerrar");
const typedText = document.getElementById("typed-text");

const mensaje = `Amor de mi vida, Adrimar 💖,
quiero que sepas que eres lo más hermoso que me ha pasado.
Desde que llegaste llenaste mis días de alegría, ternura y esperanza.
Cada detalle que hago, incluso este proyecto en el que me demoré horas,
lo hago con todo mi corazón porque te amo profundamente. 💕

Eres mi novia, mi compañera y mi futura esposa 💍.
No importa el tiempo ni las dificultades,
siempre estaré para ti, porque mi amor por ti no tiene límites. ❤️

Te amo más de lo que las palabras pueden expresar. ✨`;

// Función para escribir el mensaje poco a poco
function escribirTexto(texto, elemento, velocidad = 40) {
  let i = 0;
  elemento.innerHTML = "";
  const intervalo = setInterval(() => {
    elemento.innerHTML += texto.charAt(i);
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, velocidad);
}

// Abrir ventana y escribir el mensaje
carta.addEventListener("click", () => {
  ventana.style.display = "flex";
  escribirTexto(mensaje, typedText, 40); // velocidad: 40ms por letra
});

// Cerrar con la X
cerrar.addEventListener("click", () => {
  ventana.style.display = "none";
});

// Cerrar clickeando fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === ventana) {
    ventana.style.display = "none";
  }
});
