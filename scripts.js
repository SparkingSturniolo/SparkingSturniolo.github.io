function rankRender() {
    const req = new XMLHttpRequest();
    req.open('GET', './players.json', true);
    req.send();
    req.onload = () => {
        const result = JSON.parse(req.responseText);
        result.players.sort((a, b) => b.points - a.points);
        let steps = 0;
        for (let i = 0; i < result.players.length; i++) {
            steps++;
            let row = document.createElement('div');
            row.setAttribute('class', 'rankRow');
            let rankNumb = document.createElement('p');
            let actualRank = i + 1;
            if (i != 0 && result.players[i].points == result.players[i - 1].points) {
                rankNumb.innerHTML = actualRank - steps;
            } else {
                if ((i + 1) >= 51) {
                    return
                }
                rankNumb.innerHTML = i + 1;
                steps = 0;
            }
            row.appendChild(rankNumb);
            let name = document.createElement('p');
            name.innerHTML = result.players[i].name;
            row.appendChild(name);
            let point = document.createElement('p');
            point.innerHTML = result.players[i].points;
            row.appendChild(point);
            let victory = document.createElement('p');
            victory.innerHTML = result.players[i].victories;
            row.appendChild(victory);
            let pOfGrad = document.createElement('p');
            let grad = document.createElement('img');
            switch (result.players[i].grade) {
                case 'sm':
                    grad.setAttribute('src', './imgs/saibamen.png');
                    grad.setAttribute('title', 'Saibamen');
                    break;
                case 'hm':
                    grad.setAttribute('src', './imgs/umano.png');
                    grad.setAttribute('title', 'Umano');
                    break;
                case 'sj':
                    grad.setAttribute('src', './imgs/sayan.png');
                    grad.setAttribute('title', 'Sayan');
                    break;
                case 'mj':
                    grad.setAttribute('src', './imgs/majin.png');
                    grad.setAttribute('title', 'Majin');
                    break;
                case 'pr':
                    grad.setAttribute('src', './imgs/prescelto.png');
                    grad.setAttribute('title', 'Prescelto');
                    break;
                case 'ddd':
                    grad.setAttribute('src', './imgs/GOD.png');
                    grad.setAttribute('title', 'Dio Della Distruzione');
                    break;
            }
            pOfGrad.appendChild(grad);
            row.appendChild(pOfGrad);
            if (result.players[i].actual == "yes") {
                row.setAttribute('id', 'Lastwinner');
            }
            document.getElementById("actualRank").appendChild(row);
        }
    }
}

window.onload = function () {
    rankRender();
}