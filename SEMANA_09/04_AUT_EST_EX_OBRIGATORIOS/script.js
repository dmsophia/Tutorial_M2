function calc(){
    var num = document.getElementById("num").value
    var divider = num.split("")
    
    if(divider[0] % 2 == 0){
        alert(divider[0] + " é par!")
    }
    else{
        alert(divider[0] + " é impar!")
    }
}

function sum(){

    var algarism = document.getElementById("algarism").value
    var algarismDivider = algarism.split("")
    var sum = 0
    for (var i = 0; i< algarismDivider.lenght; i++){
        sum += parseInt(algarismDivider[i]);
    }
    alert("A soma dos algarismos é " + sum + "!")
}

function order(){
    var names = documento.getElementById("name").value
    var space = names.split(",")
    var order = space.sort()
    document.getElementById("SophiaDias").innerHTML = order
}

function fibonacci(){
    let num = document.getElementById("fibo").value
    var fibo = [0,1]
    for (let i = 1; i< num; i++){
        var x = fibo[i-1]+fibo[i]
        fibo.push(x)
    }
}

function primos(){
    const n1= document.getElementById("1")
    const n2 = document.getElementById("2")
    const h1 = document.getElementById("h")

    let n
    let nums=[]
    let primos=[]

    if(n1<n2){
        for (let i = 1; i < n2 - 1; i++){
            n=n1+i
            nums.push(meio)           
        }
    }
    else{
        for (let i = 1; i<n1-1; i++){
            n=n1-i
            nums.push(n)
        }
    }
    nums.map((num) => {
        let d = 0
        for (let count = 1; count <= num; count++){
            if (num % count ==0){
                d++
            }
        }
            if(d==2){
            console.log(`${num} é primo`)
            primos.push(num)
    } else
    console.log(`${num} não é primo`)
    })
    body.innerHTML = `Os números primos dentre o intervalo são:${primos}`
}