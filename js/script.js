var numeroAleatorio = 0;
var gameStarted = false;

function refresh() {
    numeroAleatorio = parseInt(Math.random() * 100);
    console.log(numeroAleatorio)
}

function iniciar() {
    alert('O jogo iniciou. Boa sorte!')
    gameStarted = true;
}

function verificarNumero() {
    var numeroEscolhido = document.getElementById('numeroEscolhido').value;
    var log = document.querySelector('div.numeroSorteado')
    
    if(!gameStarted) {
        alert("O jogo ainda não foi iniciado."); //Caso não inicie o jogo
        return;
    }

    if(isNaN(numeroEscolhido)) {
        alert("Por favor, insira um número válido."); //Caso uma letra seja digitada
        return
    }

    if(numeroEscolhido < 1 || numeroEscolhido > 100) {
        alert('Número inválido! Por favor escolha um número entre 1 e 100.');
    }
    else if(numeroEscolhido > numeroAleatorio) {
        log.innerHTML += '<p> <strong> O número '+ numeroEscolhido +' é MAIOR que o número pensado! </strong> </p>';
    } else if(numeroEscolhido < numeroAleatorio) {
        log.innerHTML += '<p> <strong> O número '+ numeroEscolhido +' é MENOR que o número pensado! </strong> </p>';
    } else {
        alert('Parabéns, você acertou!!!')
        location.reload();
    }

    }

    
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#botaoTentar");
      
      btn.click();
    
    }
  });

refresh();
