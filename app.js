let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(etiqueta, contenido){

   let titulo = document.querySelector(etiqueta);
titulo.innerHTML = contenido;

return;

};  


let numeroSecreto=0;
let intentos = 0;

function verificarIntento() {
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

   
   
   if(numeroUsuario == numeroSecreto){


      asignarTextoElemento('p',`Acertastes. Numero de intentos: ${intentos}`);
      document.getElementById('reiniciar').removeAttribute('disabled');

   } else {

         if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento('p',`EL NUMERO ES MAYOR, NO SEAS NOOB. Numero de intentos: ${intentos}`);
            
         } else {
            asignarTextoElemento('p',`El NUMERO ES MENOR, JAJAJA. Numero de intentos: ${intentos}`);
            

      }


      limpiarSeccion();

   }

   

   intentos++;


   return;
   

};



function limpiarSeccion() {
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = '';
   


}

function condicionesIniciales() {

   asignarTextoElemento("h1", "juego del numero secreto");
   asignarTextoElemento('p', `Numeros del 1 al ${numeroMaximo} ¿Ok?`);
   intentos = 1;
   numeroSecreto = generarNumeroSecreto();

   
}

function reiniciarJuego() {


   limpiarSeccion();
   condicionesIniciales();


document.querySelector('#reiniciar').setAttribute('disabled','true');
   

}



function generarNumeroSecreto() {

  let numeroGenerado = Math.floor((Math.random()* numeroMaximo)) + 1;
   console.log(numeroGenerado);
   console.log(listaNumeroSorteado);


   if (listaNumeroSorteado.length == numeroMaximo){
      asignarTextoElemento('p','Ya se sorteó todos los numeros disponibles');
      
   } else {



      if (listaNumeroSorteado.includes(numeroGenerado)) {
         
         return generarNumeroSecreto();
         
      } else {

            listaNumeroSorteado.push(numeroGenerado);
         return numeroGenerado;
      }
         
   }

};

condicionesIniciales();



asignarTextoElemento("h1", "juego del numero secreto");
asignarTextoElemento('p', "Numeros del 1 al 10 ¿Ok?");


