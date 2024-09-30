import { stringToDate, sumaElementosRegExp } from './utils.js';

const resultadoDiv = document.getElementById('resultado');

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

const dobleNumeros = (array) => {
   return array.map((numero) => {
      return numero * 2;
   });
};

const TrianguloAsterisco = () => {
   const punto = '*';
   const totalLinea = 5;
   const barraMedia = '-';
   for (let i = 1; i < 6; i++) {
      console.log(punto.repeat(i));
   }
   for (let i = 1; i <= totalLinea; i++) {
      let barras = barraMedia.repeat(totalLinea - i);
      let puntos = punto.repeat(i * 2 - 1);
      console.log(`${barras}${puntos}${barras}`);
   }
};
const texto = document.getElementById('nombres');

const NombresConA = () => {
   const nombres = texto.value.split(',');
   const nombresConA = nombres.filter(
      (nombre) => nombre.charAt(0).toUpperCase() === 'A'
   );
   resultadoDiv.innerHTML = `<p>${nombresConA.join(', ')}</p>`;
};

texto.addEventListener('input', NombresConA);

const Reemplazar = () => {
   const form = document.getElementById('reemplazoForm');
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cadena = document.getElementById('cadena').value;
      const palabraOriginal = document.getElementById('palabraOriginal').value;
      const palabraReemplazo =
         document.getElementById('palabraReemplazo').value;
      const resultadoCadena = cadena.replace(palabraOriginal, palabraReemplazo);
      resultadoDiv.innerHTML = `<p>Resultado: ${resultadoCadena}</p>`;
   });
};

const CortarTexto = () => {
   const texto = document.getElementById('texto');
   const numero = document.getElementById('numero');

   numero.addEventListener('input', () => {
      const resultado = texto.value.substr(0, numero.value);
      resultadoDiv.innerHTML = `<p>Resultado: ${resultado}</p>`;
   });
};

const StringSeparador = () => {
   const texto = document.getElementById('cadenaTexto');

   texto.addEventListener('input', () => {
      const nombres = texto.value.replaceAll(',', '-');
      resultadoDiv.innerHTML = `<p>${nombres}</p>`;
   });
};

const CalculadoraRecaudacion = () => {
   const regExp = /:(\d+(.\d+)?)/g;
   const texto = document.getElementById('cadenaTexto');
   texto.addEventListener(
      'input',
      () =>
         (resultadoDiv.innerHTML = `<p>${sumaElementosRegExp(
            texto.value,
            regExp
         )}</p>`)
   );
};

// CalculadoraRecaudacion();
// StringSeparador();
// CortarTexto();
// Reemplazar();
// NombresConA();
// TrianguloAsterisco();
// console.log(dobleNumeros([1,2,3,4,5]))
// crearObjeto();
// calculadoraEdad();
// pedirfruta();
// compararDatosTipos();
