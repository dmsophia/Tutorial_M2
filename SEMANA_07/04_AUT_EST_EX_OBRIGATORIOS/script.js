function sum(){
    var input = Number(document.getElementById("quantidade").value)
    var resultado = input + 1
    console.log(resultado)

    document.getElementById("quantidade").value = resultado
}

function sub() {
    var input = Number(document.getElementById("quantidade").value)

    var resultado = input - 1

    document.getElementById("quantidade").value = resultado

}

function chenge(){
    var button1 = document.getElementById("botao1").value
    var button2 = document.getElementById("botao2").value


    document.getElementById("botao1").value = button2
    document.getElementById("botao2").value = button1
}

function calc(){
    var infoInput = getElementById("info").value
    var turno = document.getElementById("turno").value
    var preco 

    var info = Number(infoInput)

    var div = document.getElementsByClassName('resultado')

    if (turno == "diurno"){
        preco = 200 * info
        
        if (info > 50){
            preco = (200*info)*0,6
        }    
    }
    else {
        preco = 100 * info

        if (info > 50){
            preco = (100*info)*0,8
        }
    }
    const h3 = document.createElement("h3")
    h3.innerHTML = `O seu preco ${preco}`
    div.appendChild(h3)
    alert(preco)
}