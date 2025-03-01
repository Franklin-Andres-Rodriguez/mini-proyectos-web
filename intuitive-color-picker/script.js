// Obtener referencias al campo de entrada para los valores

const redEl = document.getElementById("red");
const greenEl = document.getElementById("green");
const hlueEl = document.getElementById("blue");
const panelEl = document.getElementById("panel");
const decEl = document.getElementById("dec");
const hexEl = document.getElementById("hex");

// FUNCIONES PRINCIPALES

const calculateColor = function () {
  //variables locales para almacenar los valores RGB procesados
  let red;
  let green;
  let blue;

  // VERIFICAMOS QUE MODO ESTA SELECCIONADO
  if(decEl.checked) {
    // Si el modo decimal está activo, tomamos los valores tal cual
    // pero los convertimos a enteros con parseInt para asegurar que sean números
    red = parseInt(redEl.value);
    green = parseInt(greenEl.value);
    blue = parseInt(blueEl.value);
  }
  else {
    // Si el modo hexadecimal está activo, convertimos de hex a decimal
    // El segundo parámetro 16 en parseInt indica base hexadecimal
    red = parseInt(redEl.value, 16);
    green = parseInt(greenEl.value, 16);
    blue = parseInt(blueEl.value, 16);
  }

  // Verificamos que los valores estén dentro del rango válido (0-255)
  // También comprobamos si alguno es NaN (not a number)
  if(red < 0 || red > 255 || isNaN(red) || green < 0 || green > 255 || isNaN(green)
    || blue < 0 || blue > 255 || isNaN(blue){
    // SI HAY VALORES INVALIDOS, MOSTRAMOS MENSAJE DE ERROR;
    panelEl.innerHTML = "Values should lie between 0 and 255 (0 and FF)";
    // Y PONEMOS EL FONDO EN BLANCO
    panelEl.style.backgroundColor =  "white";
  }
  else {

  }
    
  )




}
