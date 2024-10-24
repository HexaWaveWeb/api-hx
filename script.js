// Sistema de mensagens diretas
document.getElementById('mensagemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && mensagem) {
        alert(`Mensagem enviada por ${nome}: ${mensagem}`);
        document.getElementById('mensagemForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
