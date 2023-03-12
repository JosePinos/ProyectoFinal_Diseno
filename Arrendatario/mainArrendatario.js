const cambiarEstrellaBotones = document.querySelectorAll(".cambiar-estrella");

cambiarEstrellaBotones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    if (boton.classList.contains("amarillo")) {
      boton.classList.remove("amarillo");
    } else {
      boton.classList.add("amarillo");
    }
  });
});
const direccionBuscar = document.querySelector(".direccion-buscar");

direccionBuscar.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    window.location.href = "./ubicacionImnueble.html";
  }
});
