document.addEventListener('DOMContentLoaded', function() {
    // Tenta carregar os dados salvos no localStorage
    const data = JSON.parse(localStorage.getItem('scaleData'));

    // Função para formatar os links, transformando-os em âncoras clicáveis
    function formatLinks(links) {
        return links.split(',')
                    .map(link => `<a href="${link.trim()}" target="_blank">${link.trim()}</a>`)
                    .join('<br>');
    }

    // Função auxiliar para exibir cada campo na tela
    function displayField(label, fieldValue) {
        if (typeof fieldValue !== 'undefined' && fieldValue !== '') {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${label}:</strong> ${fieldValue}`;
            document.getElementById('scaleView').appendChild(p);
        }
    }

    if (data) {
        // Exibe dados gerais
        displayField('Data do Evento', data.date);
        displayField('Horário do Evento', data.worshipTime);
        displayField('Data do Ensaio', data.rehearsalDate);
        displayField('Hora do Ensaio', data.rehearsalTimeModal);

        // Exibe participantes
        displayField('Baixo', data.baixo);
        displayField('Bateria', data.bateria);
        displayField('Guitarra', data.guitarra);
        displayField('Teclado 1', data.teclado1);
        displayField('Teclado 2', data.teclado2);
        displayField('Violão', data.violao);
        displayField('Vocal 1', data.vocal1);
        displayField('Vocal 2', data.vocal2);
        displayField('Vocal 3', data.vocal3);
        displayField('Vocal 4', data.vocal4);

        // Exibe os links
        displayField('Links dos Vídeos', formatLinks(data.videoLinks));
        displayField('Links das Cifras', formatLinks(data.chordLinks));

        // Exibe atividade, se houver
        if (data.atividade) {
            displayField('Atividade', data.atividade);
        }
    } else {
        alert('Nenhum dado salvo encontrado.');
    }
});
