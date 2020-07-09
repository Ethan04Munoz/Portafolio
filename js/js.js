const colorSwitch = document.querySelector('.interruptor input[type="checkbox"]');
//el if else es parte de la funcion
function switchColor(e) {
    if (e.target.checked) {
        //.checked quiere decir que el checkbox fue selecccionado, por ello
        //la función evalua cada que se selecciona o deselecciona checkbox
        document.documentElement.setAttribute('data-theme', 'dark');
        //La linea anterior le da a todo el documento la propiedad dark del theme. El cual esta en el css
        document.querySelector(".small").innerHTML = "¿Demasiado oscuro?";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        //Esta linea pone el color claro siempre y cuando el checkbox este desactivado
        document.querySelector(".small").innerHTML = "¿Demasiado claro?";
    }
}

colorSwitch.addEventListener('change', switchColor, false);