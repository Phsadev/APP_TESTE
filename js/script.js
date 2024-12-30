document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está autenticado
    if (sessionStorage.getItem('authenticated') !== 'true') {
        window.location.href = "login.html";
    }

    // Função para transformar texto em uppercase
    function toUpperCase(input) {
        input.value = input.value.toUpperCase();
    }

    // Função para salvar os dados e redirecionar
    function saveDataAndRedirect() {
        saveData();
        window.location.href = "view.html";
    }

    // Função para salvar os dados (pode ser expandida conforme necessário)
    function saveData() {
        const data = {
            date: document.getElementById('data').value,
            rehearsalTime: document.getElementById('ensaio').value,
            worshipTime: document.getElementById('culto').value,
            baixo: document.getElementById('baixo').value,
            bateria: document.getElementById('bateria').value,
            guitarra: document.getElementById('guitarra').value,
            teclado1: document.getElementById('teclado1').value,
            teclado2: document.getElementById('teclado2').value,
            violao: document.getElementById('violao').value,
            vocal1: document.getElementById('vocal1').value,
            vocal2: document.getElementById('vocal2').value,
            vocal3: document.getElementById('vocal3').value,
            vocal4: document.getElementById('vocal4').value,
            rehearsalDate: document.getElementById('rehearsalDate').value,
            rehearsalTimeModal: document.getElementById('rehearsalTime').value,
            eventDate: document.getElementById('eventDate').value,
            eventTime: document.getElementById('eventTime').value,
            videoLinks: document.getElementById('videoLinks').value,
            chordLinks: document.getElementById('chordLinks').value
        };
        localStorage.setItem('scaleData', JSON.stringify(data));
        alert('Dados salvos com sucesso!');
    }

    // Função para adicionar participante pelo modal
    function addParticipant() {
        const participantName = document.getElementById('participantName').value;
        const participantRole = document.getElementById('participantRole').value;

        if (participantName && participantRole) {
            const selectElement = document.getElementById(participantRole);
            const option = document.createElement('option');
            option.value = participantName.toUpperCase();
            option.text = participantName.toUpperCase();
            selectElement.add(option);

            // Limpar os campos do modal
            document.getElementById('participantName').value = '';
            document.getElementById('participantRole').value = 'baixo';
            
            // Fechar o modal
            $('#editParticipantModal').modal('hide');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    // Função para editar um participante
    function editParticipant() {
        const participantName = document.getElementById('participantName').value.toUpperCase();
        const participantRole = document.getElementById('participantRole').value;

        if (participantName && participantRole) {
            const selectElement = document.getElementById(participantRole);
            for (let i = 0; i < selectElement.options.length; i++) {
                if (selectElement.options[i].value === participantName) {
                    selectElement.options[i].text = participantName;
                    break;
                }
            }

            // Limpar os campos do modal
            document.getElementById('participantName').value = '';
            document.getElementById('participantRole').value = 'baixo';
            
            // Fechar o modal
            $('#editParticipantModal').modal('hide');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    // Função para excluir um participante no modal
    function deleteParticipantFromModal() {
        const participantRole = document.getElementById('participantRole').value;
        const participantName = document.getElementById('participantName').value.toUpperCase();
        const selectElement = document.getElementById(participantRole);

        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value === participantName) {
                selectElement.remove(i);
                break;
            }
        }

        // Limpar os campos do modal
        document.getElementById('participantName').value = '';
        document.getElementById('participantRole').value = 'baixo';
    }

    // Função para salvar datas e horários do modal
    function saveDates() {
        const rehearsalDate = document.getElementById('rehearsalDate').value;
        const rehearsalTime = document.getElementById('rehearsalTime').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;

        // Salvar as informações de datas e horários (expandir conforme necessário)
        // Exemplo:
        console.log(`Data do Ensaio: ${rehearsalDate}, Horário do Ensaio: ${rehearsalTime}, Data do Evento: ${eventDate}, Horário do Evento: ${eventTime}`);
        
        alert('Datas e horários salvos com sucesso!');
        
        // Fechar o modal
        $('#editDatesModal').modal('hide');
    }

    // Função para salvar links do modal
    function saveLinks() {
        const videoLinks = document.getElementById('videoLinks').value;
        const chordLinks = document.getElementById('chordLinks').value;

        // Salvar as informações dos links (expandir conforme necessário)
        // Exemplo:
        console.log(`Links dos Vídeos: ${videoLinks}, Links das Cifras: ${chordLinks}`);

        alert('Links salvos com sucesso!');

        // Fechar o modal
        $('#editLinksModal').modal('hide');
    }

    // Torna as funções acessíveis no escopo global
    window.toUpperCase = toUpperCase;
    window.saveDataAndRedirect = saveDataAndRedirect;
    window.addParticipant = addParticipant;
    window.editParticipant = editParticipant;
    window.deleteParticipantFromModal = deleteParticipantFromModal;
    window.saveDates = saveDates;
    window.saveLinks = saveLinks;
});
