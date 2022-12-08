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
            <td class='centralizar'>
                <img class='imagemP' src='./_img/bandeiras/${jogo.mandante}' alt='Escudo Seleção Mandante'/>
                
                <span class='gols'>${jogo.gols_mandante}</span>
                <span class='partida'>${jogo.partida}</span>
                <span class='gols'>${jogo.gols_visitante}</span>

                <img class='imagemP' src='./_img/bandeiras/${jogo.visitante}' alt='Escudo Seleção Visitante'/>
            </td>
            <td id='estadio'>${jogo.estadio}</td>
        `
    }));