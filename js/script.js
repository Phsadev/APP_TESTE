document.addEventListener('DOMContentLoaded', function() {
  // Confirma autenticação
  if (sessionStorage.getItem('authenticated') !== 'true') {
    window.location.href = "login.html";
  }

  // Converte o texto para uppercase
  function toUpperCase(input) {
    input.value = input.value.toUpperCase();
  }

  // Salva todos os dados e redireciona para a view
  function saveDataAndRedirect() {
    saveData();
    alert('Dados salvos com sucesso!');
    window.location.href = "view.html";
  }

  // Salva os dados gerais (incluindo os dos modais) no localStorage
  function saveData() {
    const data = {
      date: document.getElementById('data') ? document.getElementById('data').value : '',
      rehearsalTime: document.getElementById('ensaio') ? document.getElementById('ensaio').value : '',
      worshipTime: document.getElementById('culto') ? document.getElementById('culto').value : '',
      baixo: document.getElementById('baixo') ? document.getElementById('baixo').value : '',
      bateria: document.getElementById('bateria') ? document.getElementById('bateria').value : '',
      guitarra: document.getElementById('guitarra') ? document.getElementById('guitarra').value : '',
      teclado1: document.getElementById('teclado1') ? document.getElementById('teclado1').value : '',
      teclado2: document.getElementById('teclado2') ? document.getElementById('teclado2').value : '',
      violao: document.getElementById('violao') ? document.getElementById('violao').value : '',
      vocal1: document.getElementById('vocal1') ? document.getElementById('vocal1').value : '',
      vocal2: document.getElementById('vocal2') ? document.getElementById('vocal2').value : '',
      vocal3: document.getElementById('vocal3') ? document.getElementById('vocal3').value : '',
      vocal4: document.getElementById('vocal4') ? document.getElementById('vocal4').value : '',
      rehearsalDate: document.getElementById('rehearsalDate') ? document.getElementById('rehearsalDate').value : '',
      rehearsalTimeModal: document.getElementById('rehearsalTime') ? document.getElementById('rehearsalTime').value : '',
      eventDate: document.getElementById('eventDate') ? document.getElementById('eventDate').value : '',
      eventTime: document.getElementById('eventTime') ? document.getElementById('eventTime').value : '',
      videoLinks: document.getElementById('videoLinks') ? document.getElementById('videoLinks').value : '',
      chordLinks: document.getElementById('chordLinks') ? document.getElementById('chordLinks').value : ''
    };
    localStorage.setItem('scaleData', JSON.stringify(data));
  }

  // -------------------
  // Gerenciamento de Participantes via modal
  // -------------------

  function addParticipant() {
    const participantName = document.getElementById('participantName').value;
    const participantRole = document.getElementById('participantRole').value;

    if (participantName && participantRole) {
      // Temos o select identificado pelo valor de participantRole (ex: "baixo", "bateria", etc.)
      const selectElement = document.getElementById(participantRole);
      const option = document.createElement('option');
      option.value = participantName.toUpperCase();
      option.text = participantName.toUpperCase();
      selectElement.add(option);

      // Limpa os campos do modal
      document.getElementById('participantName').value = '';
      document.getElementById('participantRole').value = 'baixo';
      $('#editParticipantModal').modal('hide');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

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
      document.getElementById('participantName').value = '';
      document.getElementById('participantRole').value = 'baixo';
      $('#editParticipantModal').modal('hide');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

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
    document.getElementById('participantName').value = '';
    document.getElementById('participantRole').value = 'baixo';
  }

  // -------------------
  // Salvar dados pelo modal: Datas/Horários e Links
  // -------------------

  function saveDates() {
    let data = JSON.parse(localStorage.getItem('scaleData')) || {};
    data.rehearsalDate = document.getElementById('rehearsalDate').value;
    data.rehearsalTimeModal = document.getElementById('rehearsalTime').value;
    data.eventDate = document.getElementById('eventDate').value;
    data.eventTime = document.getElementById('eventTime').value;
    localStorage.setItem('scaleData', JSON.stringify(data));
    alert('Datas e horários salvos com sucesso!');
    $('#editDatesModal').modal('hide');
  }

  function saveLinks() {
    let data = JSON.parse(localStorage.getItem('scaleData')) || {};
    data.videoLinks = document.getElementById('videoLinks').value;
    data.chordLinks = document.getElementById('chordLinks').value;
    localStorage.setItem('scaleData', JSON.stringify(data));
    alert('Links salvos com sucesso!');
    $('#editLinksModal').modal('hide');
  }

  // Expor as funções para o escopo global
  window.toUpperCase = toUpperCase;
  window.saveDataAndRedirect = saveDataAndRedirect;
  window.addParticipant = addParticipant;
  window.editParticipant = editParticipant;
  window.deleteParticipantFromModal = deleteParticipantFromModal;
  window.saveDates = saveDates;
  window.saveLinks = saveLinks;
});
