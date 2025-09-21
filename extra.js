const sobre = document.getElementById("btnSorpresa");
const typedText = document.getElementById("typed-text");

// 💌 Texto romántico
const mensaje = `Amor mío,  
Desde que llegaste a mi vida todo cambió...  
Eres mi sol, mi refugio y mi razón de ser.  
Te amaré por siempre. 🌻💛`;

let i = 0;
let speed = 40; // velocidad de escritura
let typing;

function typeWriter() {
  if (i < mensaje.length) {
    typedText.textContent += mensaje.charAt(i);
    i++;
    typing = setTimeout(typeWriter, speed);
  }
}

sobre.addEventListener("click", () => {
  sobre.classList.toggle("abierto"); // abre/cierra el sobre
  if (sobre.classList.contains("abierto")) {
    typedText.textContent = "";
    i = 0;
    clearTimeout(typing);
    typeWriter();
  } else {
    clearTimeout(typing);
    typedText.textContent = "";
  }
});
