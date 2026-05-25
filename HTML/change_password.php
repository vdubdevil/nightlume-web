<?php
require 'db.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $old_pass = $_POST['old_pass'] ?? '';
    $new_pass = $_POST['new_pass'] ?? '';

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($old_pass, $user['password'])) {
        $new_hashed = password_hash($new_pass, PASSWORD_BCRYPT);
        $update = $pdo->prepare("UPDATE users SET password = ? WHERE username = ?");
        $update->execute([$new_hashed, $username]);
        
        echo json_encode(['status' => 'success', 'message' => 'Password Updated']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Incorrect Current Password']);
    }
}
?>