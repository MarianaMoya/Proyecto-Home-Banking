//Declaración de variables
var nombreUsuario = "Pepe Gonzales";
var saldoCuenta = 100;
var limiteExtraccion = 1500;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Paso 1
function sumarAlSaldo(dinero){
	saldoCuenta +=parseInt(dinero);
}
//Paso 2
function restarASaldo(dinero){
	saldoCuenta-=dinero;
}


//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
	var nuevoLimite = prompt("Ingrese el nuevo límite de extracción: ");
	limiteExtraccion = parseInt(nuevoLimite);
	actualizarLimiteEnPantalla();
	alert("Su nuevo límite de extracción es de: " + limiteExtraccion);

}

function extraerDinero() {
var saldoAnterior = saldoCuenta;
var dineroAExtraer = parseInt(prompt("Ingrese la cantidad de dinero que desea extraer: "));

	if (dineroAExtraer%100 != 0){
		alert("Solo puede extraer billetes de 100.")
	}else if (dineroAExtraer>limiteExtraccion){
		alert("La cantidad de dinero que deseas extraer es superior a tu límite de extracción.")
	}else if (dineroAExtraer>saldoAnterior){
		alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");	
	}else{
		restarASaldo(dineroAExtraer);
		actualizarSaldoEnPantalla();
		alert ("Saldo anterior: " + saldoAnterior + "\nHas extraído: " + dineroAExtraer + "\nSaldo actual: " + saldoCuenta);
	}

}

function depositarDinero() {
var saldoAnterior = saldoCuenta;
var stringDinero = prompt("Ingrese la cantidad de dinero que desea depositar:");
var dineroDepositado = parseInt(stringDinero);

	sumarAlSaldo(dineroDepositado)
	actualizarSaldoEnPantalla()
	alert ("Saldo anterior: " + saldoAnterior + "\nDinero depositado: " + dineroDepositado + "\nSaldo actual: " + saldoCuenta );
}


function pagarServicio() {
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var saldoAnterior = saldoCuenta;


var nroIngresado = prompt("Ingrese el número que corresponda al servicio que quiere pagar: \n1-Agua \n2-Luz \n3-Internet \n4-Teléfono")
	
	switch (nroIngresado) {
		case "1":
			if (agua>saldoAnterior){
				alert("No hay suficiente dinero en su cuenta para pagar este servicio.")
			}else{
				restarASaldo(agua);
				actualizarSaldoEnPantalla();
				alert ("Has pagado el servicio Agua. \nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + agua + "\nSaldo actual: " + saldoCuenta);
			}
			break;
		case "2":
			if (telefono>saldoAnterior){
				alert("No hay suficiente dinero en su cuenta para pagar este servicio.")
			}else{
				restarASaldo(telefono);
				actualizarSaldoEnPantalla();
				alert ("Has pagado el servicio Teléfono. \nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + telefono + "\nSaldo actual: " + saldoCuenta);
			}
			break;
		case "3":
			if (luz>saldoAnterior){
				alert("No hay suficiente dinero en su cuenta para pagar este servicio.")
			}else{
				restarASaldo(luz);
				actualizarSaldoEnPantalla();
				alert ("Has pagado el servicio Luz. \nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + luz + "\nSaldo actual: " + saldoCuenta);
			}
			break;
		case "4":
			if (internet>saldoAnterior){
				alert("No hay suficiente dinero en su cuenta para pagar este servicio.")
			}else{
				restarASaldo(internet);
				actualizarSaldoEnPantalla();
				alert ("Has pagado el servicio Internet. \nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + internet + "\nSaldo actual: " + saldoCuenta);
			}
			break;
		default: 
			alert ("No existe el servicio seleccionado."); 
		}
}

function transferirDinero() {
var cuentaAmiga1 =1234567;
var cuentaAmiga2 =7654321;
var saldoAnterior = saldoCuenta;

var cuentaIngresada = parseInt(prompt("Ingrese el número de la cuenta a la que desea transferir el dinero: "));
var valorTransferencia = parseInt(prompt ("Ingrese el monto que desea transferir: "));

	if (cuentaIngresada != cuentaAmiga1 && cuentaIngresada != cuentaAmiga2 ){
		alert("Solo se puede transferir dinero a cuentas amigas. ")
	}else if (valorTransferencia>saldoAnterior){
		alert("No hay suficiente dinero en su cuenta para realizar la transferencia. ");
	}else{
		restarASaldo(valorTransferencia);
		actualizarSaldoEnPantalla();
		alert ("Se han transferido: " + valorTransferencia + "\nCuenta destino: " + cuentaIngresada);
	}
	}

function iniciarSesion() {
var codigoSeguridad = 8989;
var saldoAnterior = saldoCuenta;

var codigoIngresado = prompt("Ingrese el código de su cuenta: ");

	if (codigoIngresado == codigoSeguridad){
		alert("Bienvenido Pepe Gonzales, ya  puede comenzar a relizar operaciones.")
	}else{
		restarASaldo(saldoAnterior);
		actualizarSaldoEnPantalla();
		alert ("Código incorrecto. Su dinero ha sido retenido por cuestiones de seguridad. ");
	}

}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}