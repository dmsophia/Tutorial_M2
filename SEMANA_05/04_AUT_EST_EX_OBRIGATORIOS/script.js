var button = document.querySelector('button');
        
        button.onclick = function() {
            var num1 = prompt('Digite o primeiro número para a conta');
            var num2 = prompt('Digite o segundo número para a conta');
            var result = document.getElementById("sum").innerHTML=(num1+=num2)
            var result = document.getElementById("sub").innerHTML= num1-num2
            var result = document.getElementById("multiply").innerHTML= num1*num2
            var result = document.getElementById("divider").innerHTML= num1/num2
            var result = document.getElementById("rest").innerHTML= num1%num2
        }