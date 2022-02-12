const getResult = document.getElementById('result');

function allDelete() {
    getResult.value = '';
}

function calculator(elementValue) {
    getResult.value += elementValue;
}

function result() {
    getResult.value = eval(getResult.value);
}