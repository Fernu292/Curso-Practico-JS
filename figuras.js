
// Codigo del cuadrado

const Cuadrado = (lado)=>{
    const perimetro_cuadrado = lado*4;
    const area_cuadrado = lado*lado;

    console.group('Cuadrado');//Permite agrupar console.logs en un grupo especifico

    console.log(`Los lados del cuadrado miden: ${lado} cm`);
    console.log(`El perimetro del cuadrado es: ${perimetro_cuadrado} cm`);
    console.log(`El area del cuadrado es: ${area_cuadrado} cm^2`);

    console.groupEnd();//Cierra el agrupamiento de console.log

}

//Codigo del triangulo

const Triangulo = (lado1, lado2, lado3, altura)=>{

    const perimetro_triangulo = lado1+lado2+lado3;
    const area_triangulo = (lado1*altura) /2;

    console.group('Triangulo');

    console.log(`Los lados del triangulo miden: ${lado1}cm, ${lado2}cm, ${lado3}cm`);
    console.log(`La altura del triangulo es: ${altura}`);
    console.log(`El perimetro del triangulo es: ${perimetro_triangulo}cm`);
    console.log(`El area del triangulo es: ${area_triangulo}cm^2`);

    console.groupEnd();

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

Cuadrado(5);
Triangulo(4,5,6,8);
Circulo(5);
