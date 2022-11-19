// alert("Segunda entrega JS - valentin estevez");

// let nombreUsuario = prompt("Ingrese su nombre")
// alert("bienvenid@ "+ nombreUsuario+ " a Fruteria Milenio!")
// alert("a continuacion se le mostrara las opciones disponibles")

// const productos = [
//     {nombre:"tomate", precio: 200},
//     {nombre:"lechuga", precio: 250},
//     {nombre:"brocoli", precio: 300},
//     {nombre:"palta", precio: 350},
//     {nombre:"berenjena", precio: 400},
//     {nombre:"zanahoria", precio: 230},
//     {nombre:"papa", precio: 210},
//     {nombre:"batata", precio: 280},
//     {nombre:"banana", precio: 500},
//     {nombre:"manzana", precio: 450},
//     {nombre:"pera", precio: 480},
//     {nombre:"naranja", precio: 320},
// ];

// let carrito = []

// let seleccion = prompt("desea comprar algun producto? - escriba si o no")

// while(seleccion != "si" && seleccion != "no"){
//     alert("por favor selecciona si o no")
//     seleccion = prompt("Hola desea adquirir algunos de nuestros productos? si - no")
// }

// if(seleccion=="si"){
//     alert("a continuacion te mostraremos la lista de productos")
//     let todosLosProductos = productos.map ((producto)=> producto.nombre + " "+ producto.precio + "$");
//     alert(todosLosProductos.join(" - "))


// } else if (seleccion == "no"){
//     alert("Gracias por ver nuestros productos, hasta luego!")
// }


// while(seleccion != "no"){
//     let producto = prompt("selecciona un producto que quieras adquirir!")
//     let precio = 0

//     if(producto == "tomate" || producto == "lechuga"||producto == "brocoli"||producto == "palta"||producto == "berenjena"||producto == "zanahoria"||producto == "papa"||producto == "batata"||producto == "banana"||producto == "manzana"||producto == "pera"||producto == "naranja"){
//         switch(producto) {
//             case "tomate":
//                 precio = 200;
//                 break
//             case "lechuga":
//                 precio = 250;
//                 break
//             case "brocoli":
//                 precio = 300;
//                 break
//             case "palta":
//                 precio = 350;
//                 break
//             case "berenjena":
//                 precio = 400;
//                 break
//             case "zanahoria":
//                 precio = 230;
//                 break
//             case "papa":
//                 precio = 210;
//                 break
//             case "batata":
//                 precio = 280;
//                 break
//             case "banana":
//                 precio = 500;
//                 break
//             case "manzana":
//                 precio = 450;
//                 break
//             case "pera":
//                 precio = 480;
//                 break
//             case "naranja":
//                 precio = 320;
//                 break
//             default:
//                 break;

//         }
//     let unidades = parseInt(prompt("Cuantos kg quiere llevar?"))


//     carrito.push({producto, unidades, precio})


//     }else {
//         alert("no esta disponible, seleccione el correcto..")
//     }

//     seleccion = prompt("quiere sumar mas productos? si - no")
//     while(seleccion == "no"){
//         alert("gracias por elegirnos!, a continuacion le pasaremos su detalle")
//         carrito.forEach((carritoFinal) => {
//             alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//     break;

    
//     }
// }

// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
// alert(`el total a abonar por su compra es: ${total}, gracias por su compra!`)



const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

let carrito =[];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}"
        <h3>${product.nombre}</h3>
        <p class= "price">$ ${product.precio} </p>
    `;

    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.innerText ="comprar";
    comprar.className = "comprar"; 
    
    content.append(comprar);


    comprar.addEventListener("click",()=>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio

        })
    })



});

verCarrito.addEventListener("click",()=>{
    modalContainer.innerHTML= "";
    modalContainer.style.display="flex";
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML =`
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText ="x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display ="none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
        `;
        modalContainer.append(carritoContent)

    })
    const total =carrito.reduce((acc, el)=> acc + el.precio,0);

    const totalCompra = document.createElement("div")
    totalCompra.className ="total-content"
    totalCompra.innerHTML =`total a pagar: $ ${total}`;
    modalContainer.append(totalCompra);

});