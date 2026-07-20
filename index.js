const modal = document.getElementById('whatsappModal');

document
    .getElementById('openWhatsapp')
    .addEventListener('click', () => {
        modal.classList.add('active');
    });

document
    .getElementById('closeWhatsapp')
    .addEventListener('click', () => {
        modal.classList.remove('active');
    });