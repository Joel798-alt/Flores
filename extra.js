document.addEventListener('DOMContentLoaded', () => {
  const sobre = document.getElementById("sobre");
  const carta = document.getElementById("carta");
  const cerrarBtn = document.querySelector(".carta .cerrar");
  const typedText = document.getElementById("typed-text");

  const mensaje = `Amor mío,
Desde que llegaste a mi vida todo cambió. Eres ese pensamiento constante que me acompaña en cada momento del día, y la razón por la que sonrío aun cuando nadie me ve.

Quiero que sepas que en cada latido de mi corazón estás tú, y que mis sueños siempre llevan tu nombre.

Tú eres mi fuerza y mi inspiración. Prometo amarte siempre, porque eres la persona con la que quiero caminar cada día de mi vida.

Eres mi sol, mi refugio y mi razón de ser. Gracias por existir, gracias por elegirme, gracias por ser mi todo. 🌻💛`;

  let i = 0;
  let speed = 28;
  let typing;

  function typeWriter() {
    if (i < mensaje.length) {
      typedText.textContent += mensaje.charAt(i);
      i++;
      typing = setTimeout(typeWriter, speed);
    }
  }

  // abrir carta (al hacer click en el sobre)
  sobre.addEventListener('click', () => {
    // mostrar modal
    carta.style.display = "flex";
    typedText.textContent = "";
    i = 0;
    clearTimeout(typing);
    // un pequeño delay para que el overlay aparezca y luego escribir
    setTimeout(typeWriter, 200);
  });

  // cerrar con el botón X
  cerrarBtn.addEventListener('click', () => {
    carta.style.display = "none";
    clearTimeout(typing);
  });

  // cerrar si se hace click fuera de la caja
  carta.addEventListener('click', (e) => {
    if (e.target === carta) {
      carta.style.display = "none";
      clearTimeout(typing);
    }
  });
});
