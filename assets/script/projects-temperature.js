'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const inputTemperature = select('.temperature-input');
const calcButton = select('.calculate');
const selectFahrenheit = select('#fahrenheit');
const selectCelsius = select('#celsius');
const resultOutput = select('.output');
const toggleMode = select('.mode-toggle');

// fahrenheit to celsius
function toCelsius(input) {
    input = (parseFloat(input) - 32) / 1.8;
    return input;
}

// celsius to fahrenheit
function toFahrenheit(input) {
    input = parseFloat(input) * 1.8 + 32;
    return input;
}

// number validatoin
function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input))
        return true;

    return false;
}

// calculator button
onEvent('click', calcButton, function() {
    let num = inputTemperature.value;

    if (isNumber(num)) {
        if (selectFahrenheit.checked) {
            resultOutput.innerText = `${toCelsius((num)).toFixed(2)}° Celsius`;
        } else if (selectCelsius.checked) {
            resultOutput.innerText = `${toFahrenheit((num)).toFixed(2)}° Fahrenheit`;
        } else {
            resultOutput.innerText = `Select unit conversion`
        }
    } else {
        resultOutput.innerText = `Please input a number`;
    }
});

// dark/light toggle

onEvent('click', toggleMode, function() {
    let element = document.body;
    element.classList.toggle("light-mode");
});