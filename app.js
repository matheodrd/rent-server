let pcores = document.querySelector("#pcores");
let mcores = document.querySelector("#mcores");
let inputCores = document.querySelector("#cores");

pcores.addEventListener("click", ()=>{
    inputCores.value = parseInt(inputCores.value) + 1;
});

mcores.addEventListener("click", ()=>{
    if (inputCores.value > 1) {
        inputCores.value = parseInt(inputCores.value) - 1;
    }
});
