

// Codigo del cuadrado

const Cuadrado = (e)=>{
    e.preventDefault();
    const input = document.getElementById('inputCuadrado');
    const lado = input.value;

    const perimetro_cuadrado = lado*4;
    const area_cuadrado = lado*lado;

    alert(`El perimetro es: ${perimetro_cuadrado}m, y su area es: ${area_cuadrado}m2`);    
}

//Codigo del triangulo

const Triangulo = (e)=>{
    e.preventDefault();
    const lado1 = document.getElementById('input1').value;
    const lado2 = document.getElementById('input2').value;
    const lado3 = document.getElementById('input3').value;

    let altura;
    const perimetro_triangulo = lado1+lado2+lado3;
    const area_triangulo = (lado1*altura) /2;

    if(lado1==lado2 && lado2==lado3){
        //Triangulo equilatero
        altura = Math.sqrt((lado1**2)-((lado2/2)**2));
        altura = altura.toPrecision(3);
        alert(altura)
    }

}



//Codigo del circulo

const Circulo = (radio) =>{
    const diametro = radio*2;
    const Pi = Math.PI;
    const perimetro = diametro * Pi;
    const area = Pi * (radio*radio);


    console.group('Circulos');
    
    console.log(`El diametro del ciculo es: ${diametro}cm, y su radio es: ${radio}cm`);
    console.log(`El perimetro del circulo es: ${perimetro}cm`);
    console.log(`El area del circulo es: ${area}cm^2`);

    console.groupEnd();

}


const clickBtn = (name)=>{
    
    switch (name){
        case 'cuadrado':
            document.querySelector('#Figures-Square').classList.remove('hidden');
            document.querySelector('#Figures-Triangle').classList.add('hidden');
            document.querySelector('#Figures-Circle').classList.add('hidden');

            
            break;

        case 'triangulo':
            document.querySelector('#Figures-Triangle').classList.remove('hidden');
            document.querySelector('#Figures-Square').classList.add('hidden');
            document.querySelector('#Figures-Circle').classList.add('hidden');
            break;
        case 'circulo':
            document.querySelector('#Figures-Circle').classList.remove('hidden');
            document.querySelector('#Figures-Triangle').classList.add('hidden');
            document.querySelector('#Figures-Square').classList.add('hidden');
            break;

    }
}


