<?php
// Se citește conținutul fișierului JSON
$json_data = file_get_contents("users.json");
$users = json_decode($json_data, true);

// Se obțin datele trimise prin formular
$username = $_POST["username"];
$password = $_POST["password"];

// Se verifică dacă utilizatorul și parola există în fișierul JSON
foreach ($users as $user) {
    if ($user["username"] === $username && $user["password"] === $password) {
        echo "Autentificare reușită!";
        // Poți adăuga și alte acțiuni aici, cum ar fi redirecționarea către o altă pagină
        exit;
    }
}

// Dacă nu există un utilizator sau parola nu corespunde, se afișează un mesaj de eroare
echo "Autentificare eșuată! Verificați utilizatorul și parola.";
?>
