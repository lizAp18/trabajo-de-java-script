function Notas() {
    
    var NumeroNotas = 0;
    var SumaNotas = 0;
    var NotaFinal = 0;

    while (NumeroNotas != 5) {
    
     var Nota = parseFloat(prompt("Ingresa tu nota:"));

      if (!isNaN(Nota) && Nota >= 1 && Nota <= 5 ) {  

        NumeroNotas = NumeroNotas + 1
        SumaNotas = SumaNotas + Nota

        console.clear()
        console.log("Contador: "+NumeroNotas);
        console.log("Suma del promedio: "+SumaNotas);
        console.log("Promedio: "+NotaFinal);

        
     } else {
          alert("El valor ingresado no es un numero o esta fuera de rango. (1 - 5)");
        }
    }

    NotaFinal = SumaNotas / NumeroNotas
    NotaFinal = NotaFinal.toFixed(1)
    
    console.clear()
    console.log("Contador: "+NumeroNotas);
    console.log("Suma del promedio: "+SumaNotas);
    console.log("Promedio: "+NotaFinal);

    if (NotaFinal >= 3) {
        alert("Tu nota final es: "+NotaFinal+ ". Aprobaste.");
    } else {
        alert("Tu nota final es: "+NotaFinal+ ". Reprobaste.");
    }
}