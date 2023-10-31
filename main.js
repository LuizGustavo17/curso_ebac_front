const form = document.getElementById("formulario");
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('oi');
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
    
    if(n1 !== '' && n2 !== ''){
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        if (!isNaN(n1) && !isNaN(n2)) {
            if(n2 > n1){
                alert("Enviado!");
            } else {
                alert("Preenchimento Inválido: O campo A precisa ser menor que o campo B.");
            }
        } else {
            alert("Preenchimento Inválido: Os valores devem ser números válidos.");
        }
    }

    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
});
