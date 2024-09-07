document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão de redirecionamento


            // Redireciona para o link após o alerta
            window.location.href = this.href;
        });
    });
});
