document.addEventListener("DOMContenteloaded", () => {
  fetch("../database/jugadores").then(function (jugadores) {
    if (response.ok) {
      let parrafo = document.createElement("p");
      jugadores.forEach((element) => {
        parrafo.innerHTML = element.nombre;
      });
    }
  });
});
