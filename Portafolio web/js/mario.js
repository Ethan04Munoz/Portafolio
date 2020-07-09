function establecerVisibilidadImagen(id, visibilidad) {
    var img = document.getElementById(id);
    img.style.visibility = (visibilidad ? 'visible' : 'hidden');
}