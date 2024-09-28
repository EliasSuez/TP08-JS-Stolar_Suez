import { stringToDate } from './utils.js';

const calculadoraEdad = () => {
   const nombre = prompt('Ingrese su nombre');
   const fecha = prompt('Ingrese fecha');
   alert(`Hola ${nombre}, tienes ${stringToDate(fecha)} años!`);
};

const pedirfruta = () => {
   const frutas = [
      'banana',
      'manzana',
      'mandarina',
      'naranja',
      'kiwi',
      'ciruela',
      'uva',
      'arandanos',
      'sandoa',
      'melon'
   ];
   frutas.forEach((e) => console.log(e));
   const frutaPedida = prompt('Ingrese una fruta a buscar');
   if (frutas.includes(frutaPedida)) alert(`Si, tenemos ${frutaPedida}!`);
   else alert(`No, no tenemos ${frutaPedida}!`);
};

const compararDatosTipos = () => {
   alert(10 == '10'); // True
   alert(10 === '10'); // False
   alert(typeof 10.6); // Number
   alert(true == 1); // True
};

const crearObjeto = () => {
   class Ciudad {
      constructor(n, f, p, e) {
         this.nombre = n;
         this.fechaFundacion = f;
         this.poblacion = p;
         this.extension = e;
      }
   }
   const c = new Ciudad('A', '1234-5-6', 40_000, 1_000);
   for (const i in c) {
      console.log(i, ':', c[i]);
   }
};

const dobleNumeros = (array) =>{
   return array.map((numero) => {
      return numero * 2;
   } )
} 

const TrianguloAsterisco = () => {
   const punto = "*";
   const totalLinea = 5;
   const barraMedia = "-";
   for (let i = 1; i < 6; i++) {
      console.log(punto.repeat(i))
   }
   for (let i = 1; i <= totalLinea; i++) {
      let barras = barraMedia.repeat(totalLinea - i);
      let puntos = punto.repeat(i * 2 - 1);             
      console.log(`${barras}${puntos}${barras}`);       
   }
}

const NombresConA = () => {

   const texto = document.getElementById('nombres').value; 
   const nombres = texto.split(',');  
   
   const nombresConA = nombres.filter(nombre => nombre.charAt(0).toUpperCase() === 'A');
   
   const resultado = document.getElementById('resultado');
   resultado.innerHTML = `<p>${nombresConA.join(', ')}</p>`;
   
}

const Reemplazar = () => {
   
   const cadena = document.getElementById('cadena').value;
   const palabraOriginal = document.getElementById('palabraOriginal').value;
   const palabraReemplazo = document.getElementById('palabraReemplazo').value;

   const resultadoCadena = cadena.replace(palabraOriginal, palabraReemplazo);

   const resultadoDiv = document.getElementById('resultado');
   resultadoDiv.innerHTML = `<p>Resultado: ${resultadoCadena}</p>`;
}

// Reemplazar() -------------REVISAR
// NombresConA(); ------------REVISAR

// TrianguloAsterisco();
// console.log(dobleNumeros([1,2,3,4,5]))
// crearObjeto();
// calculadoraEdad();
// pedirfruta();
// compararDatosTipos();
