function Notas() {
    
    var Nota = parseFloat(prompt("Ingresa tu nota:"));

    if (!isNaN(Nota) && Nota >= 1 && Nota <= 5 ) {  
        if (Nota >= 3) {
            alert("Tu nota es " +Nota+ ". Aprobaste.");
        } else {
            alert("Tu nota es " +Nota+ ". Reprobaste.");
        }
    } else {
        alert("El valor ingresado no es un numero o esta fuera de rango. (1 - 5)");
    }
}