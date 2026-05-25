<?php
require 'db.php';
header('Content-Type: application/json');

// Получаем данные из формы
$user = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$pass = $_POST['password'] ?? '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $pass = $_POST['password'] ?? '';

    if (!empty($email)) {
        // --- РЕГИСТРАЦИЯ ---
        $stmt = $pdo->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
        $stmt->execute([$user, $email]);
        if ($stmt->fetch()) {
            echo json_encode(['status' => 'error', 'message' => 'Identity already exists']);
        } else {
            $hashed_pass = password_hash($pass, PASSWORD_BCRYPT);
            $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $stmt->execute([$user, $email, $hashed_pass]);
            
            // Сразу отдаем данные для входа после реги
            echo json_encode([
                'status' => 'success',
                'message' => 'Identity Created',
                'user_data' => [
                    'username' => $user,
                    'email' => $email,
                    'reg_date' => date("F d, Y"),
                    'hwid' => 'NOT BOUND'
                ]
            ]);
        }
    } else {
        // --- ЛОГИН ---
        $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->execute([$user]);
        $db_user = $stmt->fetch();

        if ($db_user && password_verify($pass, $db_user['password'])) {
            // ОТПРАВЛЯЕМ ПОЛНЫЙ ПАКЕТ ДАННЫХ
            echo json_encode([
                'status' => 'success',
                'message' => 'Access Granted',
                'user_data' => [
    'uid' => $db_user['id'], // Берем ID из базы
    'username' => $db_user['username'],
    'email' => $db_user['email'],
    'status' => $db_user['status'] ?? 'User', // Берем статус
    'reg_date' => date("F d, Y", strtotime($db_user['reg_date'])),
    'hwid' => $db_user['hwid'] ?? 'NOT BOUND'
]
            ]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid Credentials']);
        }
    }
}