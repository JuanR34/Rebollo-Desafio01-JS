function saludar  ( nombre = prompt ("Hola. Cual es tu nombre?")) {
    let frase = (`Bienvenido ${nombre} a DivExChange. Tenemos las mejores cotizaciones del mercado! `);
    alert (frase);
    document.write (frase);  
}

saludar();

let cotizacion = prompt ("Elija tipo de cotizacion: oficial o blue");

if (cotizacion === "oficial") {
    alert ("Recuerde: para la compra de dolares al valor oficial, se le recargan los impuestos país y el solidario")
}
let dolarOficial = 106;
let dolarBlue = 201;
let operacion = prompt ("Usted quiere comprar o vender dólares?");

if (operacion === "vender") {
    alert ("La venta de dolares se toman al tipo de cambio del dolar blue")
}

let monto = parseInt (prompt ("ingrese su monto en dólares"));


// COMPRA DE DOLARES 

while (monto > 0 && operacion === ("comprar")) { 
   if  (cotizacion === "oficial") {
   resultado =  dolarOficial * monto;
   resultadoA = resultado + (resultado * 0.63);
    alert ("El monto en pesos a pagar es  $" + resultadoA);
    document.write ( " El monto en pesos a pagar es  $" + resultadoA);
    break
   } else if (cotizacion === "blue") {
       resultadoB = dolarBlue * monto;
       alert("El monto en pesos a pagar es  $" + resultadoB);
       document.write ( " El monto en pesos a pagar es  $" + resultadoB);
       break
   }
}


//VENTA DE DOLARES

while (monto > 0 && operacion === ("vender")) { 
    if (cotizacion === "blue" || cotizacion === "oficial") {
        resultadoB = monto * dolarBlue;
        alert("El monto a recibir en pesos es $ " + resultadoB);
        document.write ( " El monto a recibir en peso  $" + resultadoB);
        break
    } 
 }


