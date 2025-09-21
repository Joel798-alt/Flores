const btnSorpresa = document.getElementById("btnSorpresa");
const modal = document.getElementById("modalSorpresa");
const cerrar = document.getElementById("cerrarModal");
const typedText = document.getElementById("typed-text");

// 💌 Mensaje que se escribirá poco a poco
const mensaje = `Amor mío,  
Desde que llegaste a mi vida todo cambió. 
Eres ese pensamiento constante que me acompaña en cada momento del día, 
y la razón por la que sonrío aun cuando nadie me ve.  

Quiero que sepas que en cada latido de mi corazón estás tú, 
y que mis sueños siempre llevan tu nombre.  

Tú eres mi fuerza y mi inspiración. 
Prometo amarte siempre, porque eres la persona con la que quiero caminar cada día de mi vida.  

Eres mi sol, mi refugio y mi razón de ser. 
Gracias por existir, gracias por elegirme, gracias por ser mi todo. 🌻💛`;

let i = 0;
let speed = 40; // ⏳ velocidad de escritura (ms por letra)
let typing;

function typeWriter() {
  if (i < mensaje.length) {
    typedText.textContent += mensaje.charAt(i);
    i++;
    typing = setTimeout(typeWriter, speed);
  }
}

btnSorpresa.addEventListener("click", () => {
  modal.style.display = "flex";
  typedText.textContent = ""; // reset
  i = 0;
  clearTimeout(typing);
  typeWriter();
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
  clearTimeout(typing);
});