/*document.getElementById("boton").onclick = function () {
    document.getElementById("introduccion").innerHTML = experienciavar;
    document.getElementById("experiencia").style.visibility = "visible"
}

var experienciavar = document.getElementById("experiencia")


var introduccionvar = document.getElementById("introduccion")
var experienciavar = document.getElementById("experiencia")
*/

function ocultar (){
    document.getElementById("introduccion").style.display = "none"
    document.getElementById("formacion").style.display = "none"
    document.getElementById("experiencia").style.display = "none"
    document.getElementById("otroscursos").style.display = "none"
    document.getElementById("contacto").style.display = "none"
}
document.getElementById("botonintroduccion").onclick = function () {
    ocultar ();
    document.getElementById("introduccion").style.display = "inline"
}

document.getElementById("botonformacion").onclick = function () {
    ocultar ();
    document.getElementById("formacion").style.display = "inline"
}

document.getElementById("botonexperiencia").onclick = function () {
    ocultar ();
    document.getElementById("experiencia").style.display = "inline"
}

document.getElementById("botonotroscursos").onclick = function () {
    ocultar ();
    document.getElementById("otroscursos").style.display = "inline"
}

document.getElementById("botoncontacto").onclick = function () {
    ocultar ();
    document.getElementById("contacto").style.display = "inline"
}

/*
document.getElementById("botonintroduccion").onclick = function() {
    document.getElementById("introduccion").style.display = "none"
    document.getElementById("experiencia").style.display = "inline"
}


document.getElementById("botonintroduccion").onclick = function () {
    document.getElementById("pantalla").innerHTML = introduccionvar;
    document.getElementById("introduccion").style.visibility = "visible"
}

var introduccionvar = document.getElementById("introduccion")

document.getElementById("botonexperiencia").onclick = function () {
    document.getElementById("pantalla").innerHTML = experienciavar;
    document.getElementById("experiencia").style.visibility = "visible"
}

var experienciavar = document.getElementById("experiencia")
*/