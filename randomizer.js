let array = [
    "Vegeth", "Gogeta (Z)", "Gogeta (S)", "Kefla", "Gogeta (GT)", "Goku UI", "Whis", "Beerus", "Willow",
    "Broly (Z)", "C-19", "C-20", "Jiren", "Zamasu", "Zamasu Fuso", "Cell Super Perfetto",
    "Trunks (S)", "Toppo", "Hit", "Vegeta (Scouter)", "Slug", "Anilaza", "Baby", "Hildegarn", "Janemba"
];

let pickedNames = [];

function estraiEAppendiParagrafo() {
    document.getElementById('appendBans').style.display = 'grid';
    let elementiUnici = [...new Set(array)];

    elementiUnici.sort(() => Math.random() - 0.7);

    pickedNames = elementiUnici.slice(0, 7);

    let divTarget = document.getElementById('appendBans');
    if (divTarget) {
        divTarget.innerHTML = '';

        pickedNames.forEach((nome, indice) => {
            let paragrafo = document.createElement('div');
            paragrafo.classList.add('bannedPG');

            let pickNumber = indice + 1;
            let pickLabel = `${pickNumber}º Pick`;

            let spanNome = document.createElement('span');
            spanNome.classList.add('banned', 'name');
            spanNome.textContent = nome;

            paragrafo.textContent = `${pickLabel} : `;
            paragrafo.appendChild(spanNome);

            let rePickButton = document.createElement('button');
            rePickButton.textContent = 're-pick';
            rePickButton.classList.add('re-pick-button');
            rePickButton.style.marginLeft = '10px';

            rePickButton.addEventListener('click', function () {
                rePick(indice, spanNome);
            });

            paragrafo.appendChild(rePickButton);

            paragrafo.style.opacity = 0;

            divTarget.appendChild(paragrafo);

            setTimeout(() => {
                paragrafo.style.transition = 'opacity 1s';
                paragrafo.style.opacity = 1;
            }, indice * 1000);
        });
    } else {
        console.error('Div con id "extraction" non trovato.');
    }

    function rePick(indice, spanNome) {
        let currentName = pickedNames[indice];
        pickedNames[indice] = null;

        let nomiDisponibili = array.filter(nome => !pickedNames.includes(nome));

        if (nomiDisponibili.length === 0) {
            alert('Non ci sono più nomi disponibili per il re-pick.');
            pickedNames[indice] = currentName;
            return;
        }

        let nuovoNome = nomiDisponibili[Math.floor(Math.random() * nomiDisponibili.length)];

        pickedNames[indice] = nuovoNome;

        spanNome.textContent = nuovoNome;

    }
}


window.onload = function () {
    document.getElementById("execute").onclick = estraiEAppendiParagrafo;
}
