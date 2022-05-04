let ingresarUsuario = prompt("ingrese Usuario");
let ingresarApellido = prompt("ingrese Apellido");
let ingresarNumeroV = parseInt(prompt("Ingresar Numero de visita"));


while ((ingresarUsuario !== "ESC") && (ingresarApellido !== "ESC")) {
    alert("bienvenido" + " " + ingresarUsuario + " " + ingresarApellido)
    if ((ingresarUsuario == "ESC") && (ingresarApellido == "ESC")) {
        alert("Usuario equivocado")
        break;
    }
    for (let x = ingresarNumeroV; x < 100;) {
        if (x > 0) {
            alert("Numero" + x);
        } else {
            (x < 0);
            alert("Numero equivocado")

        }
        break;
    }
    break;
}

ingresarUsuario = prompt("ingrese Usuario");
ingresarApellido = prompt("ingrese Apellido");
ingresarNumeroV = parseInt(prompt("Ingresar Numero de visita"));