// ejemplo generacion inicio de sesion con WHILE


let usuario = prompt("Por favor ingrese su usuario").toLowerCase();
let contraseña = parseInt(prompt("ingrese su contraseña numerica"));

while ((usuario != "matias") || (contraseña != 1234)) {
    alert("Usuario o contraseña incorrectos");
    usuario = prompt("Por favor ingrese su usuario").toLowerCase();
    contraseña = parseInt(prompt("ingrese su contraseña numerica"));
}
alert("Bienvenido" + " " + usuario + ", " + "espero que disfrutes de la página");





// Ejemplo de bucle FOR para lista de espera con comando TERMINAR para finalizarla y CONTINUAR para saltar un turno
// for (let i = 1; i <= 10; i++) {
//     let nombre = prompt("ingrese su nombre").toLocaleLowerCase();
//     let mensaje = `Turno Nº ${i} Nombre: ${nombre}`;

//     if (nombre === "terminar") {
//         mensaje2 = `Este comando finaliza la entrega de turnos`;
//         alert(mensaje2);
//         break;
//     } else if (nombre === "continuar") {
//         alert("Se usó el comando para saltear turno")
//         continue;
//     }
//     alert(mensaje);
// }









