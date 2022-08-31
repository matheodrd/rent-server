let pcores = document.querySelector("#pcores");
let mcores = document.querySelector("#mcores");
let inputCores = document.querySelector("#cores");
const maxcores = inputCores.getAttribute("max");

// increment button
pcores.addEventListener("click", ()=>{
    if (inputCores.value < maxcores) {
        inputCores.value = parseInt(inputCores.value) + 1;
    }
});

// decrement button
mcores.addEventListener("click", ()=>{
    if (inputCores.value > 1) {
        inputCores.value = parseInt(inputCores.value) - 1;
    }
});

// prevent user from typing an int greater than max
window.addEventListener('load', function() {
    document.getElementById("cores").addEventListener('keyup', checkMax);
});

function checkMax(event) {
    var value = this.value;

    if (value > maxcores)
        this.value = maxcores;
}