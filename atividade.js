function redirectUm(){
    window.location.href = "http://127.0.0.1:5500/Inicio.html";
}
function redirectDois(){
    window.location.href = "http://127.0.0.1:5500/Livro%20do%20Dragão.html";
}
function redirectTres(){
    window.location.href = "http://127.0.0.1:5500/Atividade.html";
}

/*teste*/
let moedas = 0; // Variável para armazenar a pontuação do usuário

// Função para verificar a resposta
function verificarResposta(button, isCorrect) {
    if (isCorrect) {
        moedas += 10; // Adiciona 10 moedas para cada resposta correta
        button.style.backgroundColor = 'lightgreen'; // Destaque para resposta correta
    } else {
        moedas -= 5; // Subtrai 5 moedas para cada resposta incorreta
        button.style.backgroundColor = 'lightcoral'; // Destaque para resposta incorreta
    }
    button.disabled = true; // Desativa o botão após o clique para evitar cliques múltiplos
    atualizarMoedas(); // Atualiza o contador de moedas
}

// Função para atualizar a pontuação na interface
function atualizarMoedas() {
    document.getElementById("moedas").innerText = `Moedas: ${moedas}`;
}

// Função para mostrar o resultado final
function mostrarResultado() {
    alert(`Sua pontuação final é de ${moedas} moedas!`);
}

// Função para destacar respostas corretas
function mostrarRespostasCorretas() {
    const perguntas = document.querySelectorAll('.question');
    perguntas.forEach((pergunta) => {
        const botoes = pergunta.querySelectorAll('button');
        botoes.forEach((botao) => {
            if (botao.onclick.toString().includes('true')) {
                botao.style.backgroundColor = 'lightgreen'; // Destaca as respostas corretas
            }
        });
    });
}
