console.log("primer entrega JS - valentin estevez");

let nombreUsuario = prompt("Ingrese su nombre")
alert("bienvenid@ "+ nombreUsuario+ " a Qubit Solution!")
alert("a continuacion se le mostrara las opciones disponibles")



let seleccionUsuario

while (seleccionUsuario != 'notebooks' &&seleccionUsuario != 'micropocesador' &&seleccionUsuario != 'motherboard' &&seleccionUsuario != 'memoria' &&seleccionUsuario != 'almacenamiento' && seleccionUsuario != 'gabinetes' && seleccionUsuario != 'monitores') {
    seleccionUsuario = prompt('Seleccione una opcion: notebooks, microprocesador, motherboard, memoria, almacenamiento, gabinetes, monitores').toLowerCase();
    switch (seleccionUsuario) {
        case 'notebooks':
            alert('Usted selecciono notebooks');
            break;           
           


        case 'micropocesador':
            alert('Usted selecciono microprocesador');
            break;
        case 'motherboard':
            alert('Usted selecciono motherboard');
            break;
        case 'memoria':
            alert('Usted selecciono memoria');
            break;        
        case 'almacenamiento':
            alert('Usted selecciono almacenamiento');
            break;
        case 'gabinetes':
            alert('Usted selecciono gabinetes');
            break;

        case "monitores":
            alert("usted selecciono MONITORES")
            seleccionUsuario = prompt('Seleccione una marca: Samsung, Lg, Aorus, Noblex').toLowerCase();           
            while (seleccionUsuario != 'samsung' &&seleccionUsuario != 'Lg' &&seleccionUsuario != 'Aorus' &&seleccionUsuario != 'Noblex') {
                seleccionUsuario = prompt('Seleccione una opcion: Samsung, Lg, Aorus, Noblex,').toLowerCase();
                switch (seleccionUsuario) {                    
                    case 'samsung':
                        alert('Usted compro un monitor Samsung');
                        break;
                    case 'lg':
                        alert('Usted compro un monitor LG');
                        break;
                    case 'aorus':
                        alert('Usted compro un monitor Aorus');
                        break;
                    case 'noblex':
                        alert('Usted compro un monitor Noblex');
                        break;                    
                   /*  default:
                        alert('Usted ingreso un valor incorrecto');
                        break; */
                         
                }

            }
        default:
            alert('Usted ingreso un valor incorrecto');
            break; 
    }
}