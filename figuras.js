

// Codigo del cuadrado

const Cuadrado = (e)=>{
    e.preventDefault();
    const input = document.getElementById('inputCuadrado');
    const lado = parseFloat(input.value);

    const perimetro_cuadrado = lado*4;
    const area_cuadrado = lado*lado;

    alert(`El perimetro es: ${perimetro_cuadrado}m, y su area es: ${area_cuadrado}m2`);
}

//Codigo del triangulo

const Triangulo = (e)=>{
    e.preventDefault();
    let lado1 = parseFloat(document.getElementById('input1').value);
    let lado2 = parseFloat(document.getElementById('input2').value);
    let lado3 = parseFloat(document.getElementById('input3').value);

    let altura;
    if(lado1==lado2 && lado2==lado3){
        //Triangulo equilatero
        altura = Math.sqrt((lado1**2)-((lado2/2)**2));
        altura = altura.toPrecision(3);
    }

    const perimetro_triangulo = lado1+lado2+lado3;
    const area_triangulo = (lado1*altura) /2;

    alert(`El perimetro es: ${perimetro_triangulo}m y su area es: ${area_triangulo}m2`);

}



//Codigo del circulo

const Circulo = (e) =>{
    e.preventDefault();
    const radio = parseFloat(document.getElementById('radio').value);

    const diametro = radio*2;
    const Pi = Math.PI;
    const perimetro = (diametro * Pi).toPrecision(7);
    const area = (Pi * (radio*radio)).toPrecision(7);

    alert(`El area del ciculo es: ${area}m2 y su perimetro: ${perimetro}m`);
}


const clickBtn = (name)=>{

    if(name){
        document.getElementById('mensaje').classList.add('hidden');
    }

    switch (name){
        case 'cuadrado':

            document.getElementById('cuadrado').classList.add('btn-principal');

            document.getElementById('triangulo').classList.remove('btn-principal');
            document.getElementById('circulo').classList.remove('btn-principal');
            document.querySelector('#Figures-Square').classList.remove('hidden');
            document.querySelector('#Figures-Triangle').classList.add('hidden');
            document.querySelector('#Figures-Circle').classList.add('hidden');

            
            break;

        case 'triangulo':
            document.getElementById('triangulo').classList.add('btn-principal');

            document.getElementById('cuadrado').classList.remove('btn-principal');
            document.getElementById('circulo').classList.remove('btn-principal');
            document.querySelector('#Figures-Triangle').classList.remove('hidden');
            document.querySelector('#Figures-Square').classList.add('hidden');
            document.querySelector('#Figures-Circle').classList.add('hidden');
            break;
        case 'circulo':
            document.getElementById('circulo').classList.add('btn-principal');

            document.getElementById('cuadrado').classList.remove('btn-principal');
            document.getElementById('triangulo').classList.remove('btn-principal');
            document.querySelector('#Figures-Circle').classList.remove('hidden');
            document.querySelector('#Figures-Triangle').classList.add('hidden');
            document.querySelector('#Figures-Square').classList.add('hidden');
            break;

    }
}


