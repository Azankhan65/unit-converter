
function showConverter(converterId) {
  const converters = document.querySelectorAll('.converter');
  converters.forEach(converter => {
    converter.classList.remove('active');
  });
  document.getElementById(converterId).classList.add('active');

  const buttons = document.querySelectorAll('.nav-bar button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  event.target.classList.add('active');
}





// Km to Mi
function convertKmToMi() {
  const km = parseFloat(document.getElementById('km').value);
  if (isNaN(km)) return;
  document.getElementById('mile').value = (km * 0.621371).toFixed(2);
}

function convertMiToKm() {
  const mile = parseFloat(document.getElementById('mile').value);
  if (isNaN(mile)) return;
  document.getElementById('km').value = (mile / 0.621371).toFixed(2);
}

// Kg to Lbs
function convertKgToLbs() {
  const kg = parseFloat(document.getElementById('kg').value);
  if (isNaN(kg)) return;
  document.getElementById('lbs').value = (kg * 2.20462).toFixed(2);
}

function convertLbsToKg() {
  const lbs = parseFloat(document.getElementById('lbs').value);
  if (isNaN(lbs)) return;
  document.getElementById('kg').value = (lbs / 2.20462).toFixed(2);
}

// Celsius to Fahrenheit 
function convertCelsiusToFahrenheit() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (isNaN(celsius)) return;
  document.getElementById('fahrenheit').value = ((celsius * 9/5) + 32).toFixed(2);
}

function convertFahrenheitToCelsius() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  if (isNaN(fahrenheit)) return;
  document.getElementById('celsius').value = ((fahrenheit - 32) * 5/9).toFixed(2);
}

// Liter to Gallon
function convertLiterToGallon() {
  const liter = parseFloat(document.getElementById('liter').value);
  if (isNaN(liter)) return;
  document.getElementById('gallon').value = (liter * 0.264172).toFixed(2);
}

function convertGallonToLiter() {
  const gallon = parseFloat(document.getElementById('gallon').value);
  if (isNaN(gallon)) return;
  document.getElementById('liter').value = (gallon / 0.264172).toFixed(2);
}

// Meter to Feet 
function convertMeterToFeet() {
  const meter = parseFloat(document.getElementById('meter').value);
  if (isNaN(meter)) return;
  document.getElementById('feet').value = (meter * 3.28084).toFixed(2);
}

function convertFeetToMeter() {
  const feet = parseFloat(document.getElementById('feet').value);
  if (isNaN(feet)) return;
  document.getElementById('meter').value = (feet / 3.28084).toFixed(2);
}

// Time Conversion
function convertHoursToMinutes() {
  const hours = parseFloat(document.getElementById('hours').value);
  if (isNaN(hours)) return;
  document.getElementById('minutes').value = (hours * 60).toFixed(2);
}

function convertMinutesToHours() {
  const minutes = parseFloat(document.getElementById('minutes').value);
  if (isNaN(minutes)) return;
  document.getElementById('hours').value = (minutes / 60).toFixed(2);
}

// Pressure Conversion
function convertPascalToPsi() {
  const pascal = parseFloat(document.getElementById('pascal').value);
  if (isNaN(pascal)) return;
  document.getElementById('psi').value = (pascal / 6894.76).toFixed(2);
}

function convertPsiToPascal() {
  const psi = parseFloat(document.getElementById('psi').value);
  if (isNaN(psi)) return;
  document.getElementById('pascal').value = (psi * 6894.76).toFixed(2);
}

// Energy Conversion
function convertJoulesToCalories() {
  const joules = parseFloat(document.getElementById('joules').value);
  if (isNaN(joules)) return;
  document.getElementById('calories').value = (joules * 0.239006).toFixed(2);
}

function convertCaloriesToJoules() {
  const calories = parseFloat(document.getElementById('calories').value);
  if (isNaN(calories)) return;
  document.getElementById('joules').value = (calories / 0.239006).toFixed(2);
}
// GB to MB conversion
function convertGBtoMB() {
  const gb = parseFloat(document.getElementById('gb').value);
  if (isNaN(gb)) return;  

  const mb = gb * 1024;  
  document.getElementById('mb').value = mb.toFixed(2); 

  updateDigitalStorageResult(gb, mb); 
}

// MB to GB conversion
function convertMBtoGB() {
  const mb = parseFloat(document.getElementById('mb').value);
  if (isNaN(mb)) return; 

  const gb = mb / 1024; 
  document.getElementById('gb').value = gb.toFixed(2);  

  updateDigitalStorageResult(gb, mb);  
}

