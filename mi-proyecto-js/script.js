const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

// función clásica
function promedio(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// función flecha
const validar = (n1, n2, n3) => {
  return n1 >= 1 && n1 <= 7 &&
         n2 >= 1 && n2 <= 7 &&
         n3 >= 1 && n3 <= 7;
};

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  let n1 = Number(document.getElementById("nota1").value);
  let n2 = Number(document.getElementById("nota2").value);
  let n3 = Number(document.getElementById("nota3").value);

  error.innerHTML = "";
  resultado.innerHTML = "";

  if (!validar(n1, n2, n3)) {
    error.innerHTML = "⚠️ Ingresa notas entre 1.0 y 7.0";
    return;
  }

  let prom = promedio(n1, n2, n3);
  let estado = prom >= 4 ? "✔ APROBADO" : "✘ REPROBADO";

  resultado.innerHTML = `
    Promedio: ${prom.toFixed(1)} <br>
    ${estado}
  `;
});