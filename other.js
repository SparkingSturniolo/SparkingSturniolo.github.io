window.onload = function () {
    setInterval(() => {
        // Se raggiunge la fine, inverte la direzione
        if (name.scrollLeft >= name.scrollWidth - name.clientWidth) {
            direction = -1;
        }
        // Se è all'inizio, inverte la direzione
        else if (name.scrollLeft <= 0) {
            direction = 1;
        }
        // Aggiorna la posizione di scorrimento
        setTimeout(() => { name.scrollLeft += direction; }, 1000)
    }, 1000);
}