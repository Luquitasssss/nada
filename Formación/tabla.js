document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
        if (!this.classList.contains('expandida')) {
            document.querySelectorAll('.tarjeta').forEach(t => t.classList.remove('expandida'));
            this.classList.add('expandida');
            document.querySelectorAll('.tarjeta').forEach(t => {
                if (!t.classList.contains('expandida')) {
                    t.style.display = 'none';
                }
            });
        } else {
            this.classList.remove('expandida');
            document.querySelectorAll('.tarjeta').forEach(t => t.style.display = 'block');
        }
    });

    tarjeta.querySelector('.close').addEventListener('click', function(e) {
        e.stopPropagation();
        tarjeta.classList.remove('expandida');
        document.querySelectorAll('.tarjeta').forEach(t => t.style.display = 'block');
    });
});