document.addEventListener('DOMContentLoaded', function() {
    // Carregar os dados salvos no localStorage
    const data = JSON.parse(localStorage.getItem('scaleData'));

    if (data) {
        // Cria uma função para exibir um campo
        function displayField(label, fieldValue) {
            if (fieldValue !== undefined && fieldValue !== '') {
                const p = document.createElement('p');
                p.innerHTML = `<strong>${label}:</strong> ${fieldValue}`;
                document.getElementById('scaleView').appendChild(p);
            }
        }

        // Preencher os campos com os dados carregados
        displayField('Data do Evento', data.date);
        displayField('Horário do Evento', data.worshipTime);
        displayField('Baixo', data.baixo);
        displayField('Bateria', data.bateria);
        displayField('Guitarra', data.guitarra);
        displayField('Teclado 1', data.teclado1);
        displayField('Teclado 2', data.teclado2);
        displayField('Violão', data.violao);
        displayField('Vocal 1', data.vocal1);
        displayField('Vocal 2', data.vocal2);
        displayField('Data do Ensaio', data.rehearsalDate);
        displayField('Hora do Ensaio', data.rehearsalTimeModal);
        displayField('Links dos Vídeos', formatLinks(data.videoLinks));
        displayField('Links das Cifras', formatLinks(data.chordLinks));
    } else {
        alert('Nenhum dado salvo encontrado.');
    }

    // Função para formatar os links
    function formatLinks(links) {
        return links.split(',').map(link => `<a href="${link.trim()}" target="_blank">${link.trim()}</a>`).join('<br>');
    }
});
