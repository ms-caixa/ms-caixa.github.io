function submitForm() {

    var totalClass = document.getElementsByClassName('total');
    var result = 0;
    Array.prototype.filter.call(totalClass, function(total) {
        // console.log( "total.id: " + total.id);

        if (isNumeric(total.value)) {

            result = sum(result, total.value);

        }

        // console.log( "result: " + result);
        document.getElementById("total-amount").value = result;

        retirarCaixa = sum(result, (document.getElementById("aberturaCaixa").value * -1));
        document.getElementById("retirarCaixa").innerHTML = "R$" + retirarCaixa;

    });

}

function isNumeric(n) {

    var b = !isNaN(parseFloat(n)) && isFinite(n);
    return b;
}

function sum(a, b) {

    result = parseFloat(a) + parseFloat(b);

    return result.toFixed(2);
}

function calcLinha(moeda, quantidade, resultID) {

    valor = (moeda * quantidade).toFixed(2);
    document.getElementById(resultID).value = valor;

}

function resetForm() {

    document.getElementById("form-caixa").reset();
    document.getElementById("total-amount").value = "";
    document.getElementById("retirarCaixa").innerHTML = "R$0.00";
    var forms = document.getElementsByClassName('needs-validation');

    Array.prototype.filter.call(forms, function(form) {
        form.classList.remove('was-validated');
    });
}