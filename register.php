<?php
// Se asigură că s-au primit date de la formular
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Se obțin datele din formular
    $username = $_POST["username"];
    $password = $_POST["password"];
    $categories = $_POST["categories"];

    // Se construiește un array cu datele utilizatorului
    $user_data = array(
        "username" => $username,
        "password" => $password,
        "categories" => $categories
    );

    // Se citește conținutul fișierului JSON
    $json_data = file_get_contents("users.json");
    $data = json_decode($json_data, true);

    // Se adaugă noile date la array-ul existent
    $data[] = $user_data;

    // Se rescrie fișierul JSON cu noile date
    file_put_contents("users.json", json_encode($data));

    // Redirecționare către pagina de login
    header("Location: login.html");
    exit;
}
?>
