document.addEventListener('DOMContentLoaded', function () {
    const profilesContainer = document.getElementById('profilesContainer');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');

    // Exemplu de date pentru profile
    const profilesData = [
        { name: 'John Doe', item: 'Telefon', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', item: 'Laptop', image: 'https://via.placeholder.com/150' },
        { name: 'Bob Johnson', item: 'Consolă de jocuri', image: 'https://via.placeholder.com/150' }
    ];

    // Funcție pentru a crea un profil și a-l adăuga la container
    function createProfile(profile) {
        const profileElement = document.createElement('div');
        profileElement.classList.add('profile');

        const profileInfo = `
            <img src="${profile.image}" alt="${profile.name}">
            <div class="profile-details">
                <h2>${profile.name}</h2>
                <p>Vinde: ${profile.item}</p>
            </div>
            <div class="buttons">
                <button onclick="buyItem('${profile.item}')">Sunt interesat</button>
                <button onclick="rejectItem('${profile.item}')">Nu vreau</button>
            </div>
        `;
        profileElement.innerHTML = profileInfo;
        profilesContainer.appendChild(profileElement);
    }

    // Funcție pentru a gestiona cumpărăturile
    function buyItem(item) {
        alert(`Ai cumpărat: ${item}`);
    }

    function rejectItem(item) {
        alert(`Ai respins: ${item}`);
    }

    // Adăugăm profilele la container folosind datele de exemplu
    profilesData.forEach(profile => createProfile(profile));

    // Funcție pentru trimiterea unui mesaj
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            displayMessage(messageText, 'sent');
            messageInput.value = '';
        }
    }

    // Funcție pentru afișarea unui mesaj în interfața de chat
    function displayMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.innerText = message;
        chatMessages.appendChild(messageElement);
    }

    // Exemplu de mesaje primite
    displayMessage('Bună! Aș dori să discutăm despre obiectul tău de vânzare.', 'received');
    displayMessage('Desigur, ce te interesează?', 'sent');
    displayMessage('Am văzut că vinzi un laptop. Pot să-ți pun câteva întrebări despre el?', 'received');
});
