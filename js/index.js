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
    console.log("n: " + n + " ; b: " + b);
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

function calcAmount(moeda, resultID, qtfieldID, factor) {

    count = document.getElementById(qtfieldID).value;
    if (count == '') {
        count = 0;
    }

    // console.info("moeda: " + moeda + " ; count: " + count);
    count = parseInt(count) + parseInt(factor);
    if (count < 0) {
        count = 0;
    }

    // console.info("count: " + count);
    document.getElementById(qtfieldID).value = count;

    result = count * parseFloat(moeda);
    document.getElementById(resultID).value = parseFloat(result).toFixed(2);

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

$(document).ready(function() {

    console.info("ready");
    $('.class_total_qt').attr('type', 'number');
    $('.class_total_qt').attr('pattern', '\d*');

});