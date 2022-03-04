let opcion = document.getElementById('opcion');
let causa = document.getElementById('causa');
const elmt = document.querySelectorAll('.not_v');
const txtArea = document.querySelector('.text__area');
console.log('eleentos:',elmt);


let causas = ['Falta de puntualidad a la entrada','Falta de asistencia', 'Días económicos','Retirarse entre horas', 'Consulta médica', 'Salida antes con autorizacion', 'Permiso por lactancia','Robo, extravio o deterioro de gafete/credencial','Falla electrica del reloj o lector optico', 'Enfermedad no profesional', 'Riesgo profesional', 'Por matrimonio', 'Por nacimiento de hijo', 'Examen profesional', 'Fallecimiento de familiar','Comision de servicios', 'Comision sindical'];

function mostrarOpciones(arreglo, opc){
  let elementos = '<option selected disabled>Seleccione</option>'
for (let i = 0; i < arreglo.length; i++) {
  elementos += '<option value="' + [i] +'">' + arreglo[i] +'</option>'
  
}
opc.innerHTML = elementos
}

function recortar(array, inicio, fin, opc) {
    let recortar = array.slice(inicio, fin);
    mostrarOpciones(recortar, opc);
    for (let i = 0; i < elmt.length; i++) {
     elmt[i].classList.remove('not__view');
    
  }
  txtArea.classList.add('txt_not');
}

function otros(){
  //elmt.classList.remove('select__view');
  for (let i = 0; i < elmt.length; i++) {
     elmt[i].classList.add('not__view');
    
  }
  txtArea.classList.remove('txt_not');
}




opcion.addEventListener('change', function (){
  let valor = opcion.value;
  switch (valor) {
    case '1':
      recortar(causas, 0, 7, causa);
      break;
  
    case '2':
      recortar(causas, 7, 9, causa);
      break;
    case '3':
      recortar(causas, 9, 11, causa);
      break;
    case '4':
      recortar(causas, 11, 15, causa);
      break;
    case '5':
      recortar(causas, 15, 17, causa);
      break;
    case '6':
      otros();
      break;
      
  }


});