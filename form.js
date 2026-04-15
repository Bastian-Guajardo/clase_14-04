document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let edad = document.querySelector("input[type='number']").value;
    let valido = true;
    let mensaje = '';

    if(edad < 18) {
        valido = false;
        mensaje = "debes tener al menos 18 años";
        console.log(">>>" + edad)
    }
});