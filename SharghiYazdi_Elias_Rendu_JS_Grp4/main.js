// Cible le bouton et le body
const lightModeButton = document.getElementById('ModeBouton');
const body = document.body;

// action au clique
lightModeButton.addEventListener('click', () => {
    body.classList.toggle('mode');
});
