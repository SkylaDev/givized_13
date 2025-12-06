// Handles the nav bar socials dropdown
function navDropSocialsToggle() {
    state = document.getElementById('navDropSocials').classList.toggle('hidden');
    document.getElementById('navDropSocialsBtn').getElementsByClassName('drop-icon')[0].textContent = String.fromCodePoint(state ? '0x25BE' : '0x25B4');
}