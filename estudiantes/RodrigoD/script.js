$(function () {
  // 1. Pinta tus datos en la página
  $("title").text(PERFIL.nombre + " · Mi tarjeta");
  $("#emoji").text(PERFIL.emoji);
  $("#nombre").text(PERFIL.nombre);
  $("#frase").text(PERFIL.frase);
  $("#perfil")[0].style.setProperty("--color-perfil", PERFIL.colorFavorito);
  $("#perfil")[0].style.setProperty("--color-secundario", PERFIL.colorSecundario);

  PERFIL.gustos.forEach(function (gusto) {
    $("<li>").attr("tabindex", 0).text(gusto).appendTo("#gustos");
  });

  // 2. Botón Saludar: muestra un mensaje con un efecto suave
  $("#saludar").on("click", function () {
    $("#mensaje").text("¡Hola! Soy " + PERFIL.nombre + ".").hide().fadeIn(300);
  });

  // 3. Botón Cambiar tema: alterna entre claro y oscuro
  $("#tema").on("click", function () {
    $("body").toggleClass("oscuro");
  });

  // 4. Haz clic en un gusto para marcarlo como favorito
  $("#gustos").on("click keydown", "li", function (evento) {
    if (evento.type === "keydown" && evento.key !== "Enter") { return; }
    $(this).toggleClass("favorito");
  });
});
