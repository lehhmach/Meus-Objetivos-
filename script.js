function iniciarContador(id, dataFinal) {
    const elemento = document.getElementById(id);
    const fim = new Date(dataFinal).getTime();

    const intervalo = setInterval(() => {
        const agora = new Date().getTime();
        const distancia = fim - agora;

        if (distancia < 0) {
            clearInterval(intervalo);
            elemento.innerHTML = "Objetivo alcançado!";
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        elemento.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
}

// Iniciar contadores
iniciarContador("contador1", "December 1, 2026 00:00:00");
iniciarContador("contador2", "December 1, 2032 00:00:00");
iniciarContador("contador3", "December 1, 2035 00:00:00");
iniciarContador("contador4", "December 1, 2036 00:00:00");           
