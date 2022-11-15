    function calcular() {
        var idade = document.getElementById ('idade');
        var resultado = document.getElementById('resposta');
        var resp = Number(idade.value);


        if (resp >= 18 && resp <= 59) {
            resultado.innerHTML = `Sua idade é: ${resp} - Voto Obrigatório`
        }else if (resp < 16) {
            resultado.innerHTML = `Sua idade é: ${resp} - Não pode votar, aguardar até 16 anos!`
        }else if (resp >= 16 && resp < 18) {
            resultado.innerHTML = `Sua idade é: ${resp} - Voto opcional!`
        }else if (resp >= 60) {
            resultado.innerHTML = `Sua idade é: ${resp} - Voto opcional!`   
         }
    }



