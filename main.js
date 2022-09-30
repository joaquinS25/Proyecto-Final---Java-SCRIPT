let articulo = prompt("Ingrese el articulo que desea comprar");
let cantidad = prompt("Ingrese la cantidad que desea comprar");
while(articulo != "s" && cantidad != 0){
    switch (articulo) {
        case "Laptop":
            alert("El total a pagar de la laptop lenovo es:"+1850*cantidad);
            break;
        case "All in one":
            alert("Total a pagar de la All in one es: "+650*cantidad);
            break;
        case "Teclado y mouse inalambrico":
            alert("El Total a pagar del teclado y mouse es: "+75*cantidad);
            break;
        case "Monitor":
            alert("El Total a pagar del Monitor es: "+2000*cantidad);
            break;
        case "Computadora gamer":
            alert("El Total a pagar de la computadora gamer es: "+3000*cantidad);
            break;
        case "Parlantes":
            alert("El Total a pagar de los parlantes es: "+100*cantidad);
            break;
        case "m.2":
            alert("El Total a pagar del m.2 es: "+400*cantidad);
            break;
        case "RAM":
            alert("El Total a pagar la RAM es: "+200*cantidad);
            break;
        case "HDD":
            alert("El Total a pagar del HDD es: "+150*cantidad);
            break;
        case "Televisor":
            alert("El Total a pagar del Televisor es: "+1950*cantidad);
            break;
        default :
            alert("Articulo sin stock");
    }
    articulo = prompt("Ingrese el articulo que desea comprar (s para salir)");
    cantidad = prompt("Ingrese la cantidad que desea comprar");
}

