
//Array de descuentos 

const cupones = [
    {
        cupon: 'LFNR-030506',
        descuento: 30
    },
    {
        cupon: 'RRNM-192930',
        descuento: 18
    },
    {
        cupon: 'JGRN-102930',
        descuento: 12
    },
    {
        cupon: 'DRFN-019202',
        descuento: 10
    }
]


//Funcion que calcula el precio final
const CalcularDescuento = (precioOriginal, descuento, cupon = 0)=>{

    descuento = parseInt(descuento);

    switch(cupon){
        case 'LFNR-030506':
            cupon = cupones[0].descuento;
            break;
        case 'RRNM-192930':
            cupon = cupones[1].descuento;
            break;
        case 'JGRN-102930':
            cupon = cupones[2].descuento;
            break;
        case 'DRFN-019202':
            cupon = cupones[3].descuento;
            break;

    }

    descuento+=cupon;
    console.log(descuento);

 
    const porcentajeConDescuento = 100 - descuento;

    const precioFinal = (precioOriginal*porcentajeConDescuento)/100;

    return precioFinal;
}

const onPrice = ()=>{
    const precio = document.getElementById('precio').value;
    const descuento = document.getElementById('descuento').value;
    const cupon = document.getElementById('cupones').value;

    const precio_final = CalcularDescuento(precio, descuento, cupon);

    let mensaje = document.getElementById('precio-final');
    mensaje.textContent = `${precio_final}`;

}
