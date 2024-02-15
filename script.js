function converter(){
    var taxadecambio = 4.96
    var valordolar = parseFloat(document.getElementById("dolar-ini").value);
    
    if (isNaN(valordolar)){
        alert("por favor, insira uma quantia válida")
        return
    }

    var valorfinal = valordolar * taxadecambio

    document.getElementById("resultado").innerText = "Valor em reais: R$" + valorfinal.toFixed(2)

}