function Coin(label, coinValue, informValueID, informValueClass, resultValueID) {

    this.label = label;
    this.coinValue = coinValue;
    this.informValueID = informValueID;
    this.informValueClass = informValueClass;
    this.resultValueID = resultValueID;

}

Coin.prototype.calcLinha = function(quantidade) {

    valor = (this.coinValue * quantidade).toFixed(2);
    // console.log("valor: " + valor);
    document.getElementById(this.resultValueID).value = valor;

}

Coin.prototype.toString = function() {

    console.log(JSON.stringify(this));
}

function testCoin() {

    var coin = new Coin("0,01", 0.01, "_informValueID", "_informValueClass", "_resultValueID");
    console.info("coin: " + coin.label);
    // coin.toString();
    // coin.calcLinha(1);

    coins.forEach(iterateCoins);

}

function iterateCoins(obj, index, array) {

    var text =
        "<div class = \"form-group row\">" +
        "<div class = \"col-3\">" +
        obj.label +
        "</div>" +
        "<div class = \"col-5\">" +
        "<input class = \"form-control " + obj.informValueClass + "\" onkeyup=\"obj.calcLinha(this.value)\" id = \"" + obj.informValueID + "\"/>" +
        "</div>" +
        "<div class = \"col-4\">" +
        "<input class = \"form-control total\" readonly id = \"" + obj.resultValueID + "\" />" +
        "</div>" +
        "</div>";

    console.log("text: " + text);
    document.getElementById("idCoinsList").innerHTML = text;
}

var coins = [
    new Coin("0,01", 0.01, "id_total_001_qt", "class_total_qt", "total_001"),
    new Coin("0,05", 0.05, "id_total_005_qt", "class_total_qt", "total_005"),
    new Coin("0,10", 0.10, "id_total_010_qt", "class_total_qt", "total_010"),
    new Coin("0,25", 0.25, "id_total_025_qt", "class_total_qt", "total_025"),
    new Coin("0,50", 0.50, "id_total_050_qt", "class_total_qt", "total_050"),
    new Coin("1,00", 1.00, "id_total_100_qt", "class_total_qt", "total_100"),
    new Coin("2,00", 2.00, "id_total_200_qt", "class_total_qt", "total_200"),
    new Coin("5,00", 5.00, "id_total_500_qt", "class_total_qt", "total_500"),
    new Coin("10,00", 10.00, "id_total_1000_qt", "class_total_qt", "total_1000"),
    new Coin("20,00", 20.00, "id_total_2000_qt", "class_total_qt", "total_2000"),
    new Coin("50,00", 50.00, "id_total_5000_qt", "class_total_qt", "total_5000"),
    new Coin("100,00", 100.00, "id_total_10000_qt", "class_total_qt", "total_10000"),
    new Coin("200,00", 200.00, "id_total_20000_qt", "class_total_qt", "total_20000"),
];

function loadCoins() {

    let output = "";
    coins.forEach(
        ({ label, coinValue, informValueID, informValueClass, resultValueID }) => (
            (output += `
                <div class = "form-group row">
                    <div class ="col-3">
                        ${label}
                    </div>
                    <div class ="col-5">
                        <input type="number" min="1" pattern="\d*" class="form-control ${informValueClass}" onkeyup="calcLinha(${coinValue}, this.value, '${resultValueID}')" id ="${informValueID}"/>
                    </div>
                    <div class="col-4">
                        <input class="form-control total" readonly id="${resultValueID}"/>
                    </div>
                </div>
            `)
        )
    );
    // console.log("load: " + output);
    document.getElementById("idCoinsList").innerHTML = output;

}

loadCoins();