let pcores = document.querySelector("#pcores");
let mcores = document.querySelector("#mcores");
let inputCores = document.querySelector("#cores");

let pram = document.querySelector("#pram");
let mram = document.querySelector("#mram");
let inputRam = document.querySelector("#ram");
const maxcores = 56;
const maxram = 172;
// increment button
pcores.addEventListener("click", () => {
    if (inputCores.value < maxcores) {
        inputCores.value = parseInt(inputCores.value) + 1;
    }
});

// decrement button
mcores.addEventListener("click", () => {
    if (inputCores.value > 1) {
        inputCores.value = parseInt(inputCores.value) - 1;
    }
});

// prevent user from typing an int greater than max
window.addEventListener('load', () => {
    document.getElementById("cores").addEventListener('keyup', checkMaxCpu);
    document.getElementById("ram").addEventListener('keyup', checkMaxRam);

});

function checkMaxCpu(event) {
    var value = this.value;


    if (value > maxcores)
        this.value = maxcores;
    else if (value == 0)
        this.value = 1;

}

function checkMaxRam(event) {
    var value = this.value;


    if (value > maxram)
        this.value = maxram;
    else if (value == 0)
        this.value = 1;

}

// increment button
pram.addEventListener("click", () => {
    if (inputRam.value < maxcores) {
        inputRam.value = parseInt(inputRam.value) + 1;
    }
});

// decrement button
mram.addEventListener("click", () => {
    if (inputRam.value > 1) {
        inputRam.value = parseInt(inputRam.value) - 1;
    }
});

inputRam.addEventListener("input", () => {
    inputRam.value = !!inputRam.value && Math.abs(inputRam.value) >= 0 ? Math.abs(inputRam.value) : null
});
inputCores.addEventListener("input", () => {
    inputCores.value = !!inputCores.value && Math.abs(inputCores.value) >= 0 ? Math.abs(inputCores.value) : null
});



function verifDispo(cpu, ram, storage) {

    var fd = new FormData();
    fd.append("nbcpu", cpu);
    fd.append("nbram", ram);
    fd.append("nbstorage", storage);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./script.php", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText + " : " + cpu);
        }
    }
    xhr.send(fd);

}