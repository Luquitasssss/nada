document.addEventListener('DOMContentLoaded', () => {
    const tarjetasData = [
        { title: "Hospital", id: "hospital" },
        { title: "20° aniversario", id: "aniversario-20" },
        { title: "50° aniversario", id: "aniversario-50" }
    ];

    const container = document.getElementById('tarjetas');

    tarjetasData.forEach(tarjeta => {
        const tarjetaDiv = document.createElement('div');
        tarjetaDiv.className = `tarjeta ${tarjeta.id}`; // Añadir clase específica
        
        const title = document.createElement('h2');
        title.textContent = tarjeta.title;
        tarjetaDiv.appendChild(title);

        // Obtener el contenido de la tarjeta por su ID
        const content = document.getElementById(tarjeta.id);
        content.style.display = 'none'; // Inicialmente oculto
        tarjetaDiv.appendChild(content);

        // Añadir tarjetaDiv al contenedor principal
        container.appendChild(tarjetaDiv);

        tarjetaDiv.addEventListener('click', () => {
            const isExpanded = tarjetaDiv.classList.contains('expandida');

            // Ocultar todos los contenidos y contraer tarjetas expandidas
            document.querySelectorAll('.tarjeta.expandida .tarjeta-content').forEach(t => {
                t.style.display = 'none';
                t.parentElement.classList.remove('expandida');
            });

            // Si la tarjeta no estaba expandida, expandirla
            if (!isExpanded) {
                tarjetaDiv.classList.add('expandida');
                content.style.display = 'block';
            }
        });
    });

    // Aplicar la clase para la transición después de un breve retraso
    setTimeout(() => {
        document.querySelectorAll('.tarjeta').forEach(tarjeta => {
            tarjeta.classList.add('visible');
        });
    }, 15);
});
