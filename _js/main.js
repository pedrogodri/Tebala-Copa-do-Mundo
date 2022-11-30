let tabelaJogos = document.querySelector('.tabelaJogos');

fetch('jogos-fase1.json')
    .then(response => response.json())
    .then(data => data.forEach(jogo => {

        // Criar uma linha de tabela, coloacar ela na tabela
        let linha = document.createElement('tr');
        tabelaJogos.appendChild(linha);
        // Preencher os dados do jogo em cada linnha da tabela
        linha.innerHTML = `
            <td>${jogo.diaSemana}</td>
            <td>${jogo.data}</td>
            <td>${jogo.hora}</td>
            <td>${jogo.grupo}</td>
            <td>${jogo.partida}</td>
            <td id='estadio'>${jogo.estadio}</td>
        `
    }));