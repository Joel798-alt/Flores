const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const cerrar = document.querySelector(".cerrar");
const typedText = document.getElementById("typed-text");

// 💌 Mensaje
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
let speed = 40;
let typing;

function typeWriter() {
  if (i < mensaje.length) {
    typedText.textContent += mensaje.charAt(i);
    i++;
    typing = setTimeout(typeWriter, speed);
  }
}

sobre.addEventListener("click", () => {
  carta.style.display = "flex";
  typedText.textContent = "";
  i = 0;
  clearTimeout(typing);
  typeWriter();
});

cerrar.addEventListener("click", () => {
  carta.style.display = "none";
});
