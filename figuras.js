
// Codigo del cuadrado
const lado_cuadrado = 5;
const perimetro_cuadrado = 5 * 4;
const area_cuadrado = lado_cuadrado * lado_cuadrado;

console.group('Cuadrado');//Permite agrupar console.logs en un grupo especifico

console.log(`Los lados del cuadrado miden: ${lado_cuadrado} cm`);
console.log(`El perimetro del cuadrado es: ${perimetro_cuadrado} cm`);
console.log(`El area del cuadrado es: ${area_cuadrado} cm^2`);

console.groupEnd();

//Codigo del triangulo

const lado1_triangulo = 6;
const lado2_triangulo = 4;
const lado3_triangulo = 6;
const altua_triangulo = 5.5;

const perimetro_triangulo = lado1_triangulo+lado2_triangulo+lado3_triangulo;
const area_triangulo = (lado1_triangulo * altua_triangulo) /2;

console.group('Triangulo');

console.log(`Los lados del triangulo miden: ${lado1_triangulo}cm, ${lado2_triangulo}cm, ${lado3_triangulo}cm`);
console.log(`La altura del triangulo es: ${altua_triangulo}`);
console.log(`El perimetro del triangulo es: ${perimetro_triangulo}cm`);
console.log(`El area del triangulo es: ${area_triangulo}cm^2`);

console.groupEnd();

//Codigo del circulo
