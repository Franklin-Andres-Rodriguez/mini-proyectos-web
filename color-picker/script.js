// GET REFERENCE TO ELEMENTS
const redEl = document.getElementById("red");
const greenEl = document.getElementById("green");
const blueEl = document.getElementById("blue");
const panelEl = document.getElementById("panel");
const decEl = document.getElementById("dec");
const hexEl = document.getElementById("hex");

// FUNCTION TO CALCULATE COLOR
const calculateColor = function() {
  let red;
  let green;
  let blue;
  
  if(decEl.checked) {
    // IF DECIMAL IS CHECKED, TAKE VALUE AS IS
    red = parseInt(redEl.value);
    green = parseInt(greenEl.value);
    blue = parseInt(blueEl.value);
  }
  else {
    // IF HEX IS CHECKED, CONVERT FROM HEX TO DEC
    red = parseInt(redEl.value, 16);
    green = parseInt(greenEl.value, 16);
    blue = parseInt(blueEl.value, 16);
  }
  
  // CHECK FOR 0-255 RANGE
  if(red < 0 || red > 255 || isNaN(red) || green < 0 || green > 255 || isNaN(green) || blue < 0 || blue > 255 || isNaN(blue)) {
    panelEl.innerHTML = "Values should lie between 0 and 255 (0 and FF)";
    panelEl.style.backgroundColor = "white";
  }
  else {
    panelEl.innerHTML = "";
    // SET BACKGROUND COLOR
    panelEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

// FUNCTION TO TOGGLE BETWEEN DECIMAL AND HEX
const toggleDecToHex = function() {
  if (decEl.checked) {
    redEl.value = parseInt(redEl.value, 16);
    greenEl.value = parseInt(greenEl.value, 16);
    blueEl.value = parseInt(blueEl.value, 16);
  }
  else {
    let tmp = parseInt(redEl.value);
    redEl.value = tmp.toString(16);
    tmp = parseInt(greenEl.value);
    greenEl.value = tmp.toString(16);
    tmp = parseInt(blueEl.value);
    blueEl.value = tmp.toString(16);
  }
}

// REGISTER EVENT HANDLERS
redEl.addEventListener("keyup", calculateColor);
greenEl.addEventListener("keyup", calculateColor);
blueEl.addEventListener("keyup", calculateColor);
redEl.addEventListener("change", calculateColor);
greenEl.addEventListener("change", calculateColor);
blueEl.addEventListener("change", calculateColor);
decEl.addEventListener("change", toggleDecToHex);
hexEl.addEventListener("change", toggleDecToHex);

// PERFORM FIRST CALCULATION (ALL VALUES ARE 0 BY DEFAULT)
calculateColor();



