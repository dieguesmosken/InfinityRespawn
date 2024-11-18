// Exemplo de função para validar o envio do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Mensagem enviada com sucesso!");
    document.getElementById('contact-form').reset(); // Reseta o formulário
});
