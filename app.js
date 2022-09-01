let pcores = document.querySelector("#pcores");
let mcores = document.querySelector("#mcores");
let inputCores = document.querySelector("#cores");
const maxcores = 56;

// increment button
pcores.addEventListener("click", ()=>{
    if (inputCores.value < maxcores) {
        inputCores.value = parseInt(inputCores.value) + 1;
    }
	console.log("inputCores");
});

// decrement button
mcores.addEventListener("click", ()=>{
    if (inputCores.value > 1) {
        inputCores.value = parseInt(inputCores.value) - 1;
    }
	console.log("inputCores");
});

// prevent user from typing an int greater than max
window.addEventListener('load', function() {
    document.getElementById("cores").addEventListener('keyup', checkMax);
});

function checkMax(event) {
    var value = this.value;
	
	console.log("maxcores");

    if (value > maxcores)
        this.value = maxcores;
	else if (value == 0)
		this.value = 1;

}