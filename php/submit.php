<?php
/**
 * IT Forms Collection - Form Submission Handler
 * 
 * File ini menangani submit form dari halaman detail form.
 * Bisa digunakan di server yang mendukung PHP (Apache, Nginx+PHP-FPM, shared hosting).
 * 
 * Untuk Netlify (static hosting), form submission ditangani via JavaScript.
 * File ini berguna jika Anda deploy ke server PHP.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use POST.'
    ]);
    exit;
}

// Get submitted data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

// If not JSON, try form data
if (!$data) {
    $data = $_POST;
}

// Validate
if (empty($data)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'No data received.'
    ]);
    exit;
}

// Sanitize all input
$sanitized = [];
foreach ($data as $key => $value) {
    $sanitized[htmlspecialchars(strip_tags(trim($key)))] = htmlspecialchars(strip_tags(trim($value)));
}

// Generate submission ID
$submissionId = 'SUB-' . date('Ymd') . '-' . strtoupper(substr(md5(uniqid()), 0, 6));

// Log submission (in production, save to database)
$logEntry = [
    'id' => $submissionId,
    'timestamp' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
    'data' => $sanitized
];

// Save to log file (create submissions directory if needed)
$logDir = __DIR__ . '/../submissions';
if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
}

$logFile = $logDir . '/submissions.json';
$existingLogs = [];
if (file_exists($logFile)) {
    $existingLogs = json_decode(file_get_contents($logFile), true) ?? [];
}
$existingLogs[] = $logEntry;
file_put_contents($logFile, json_encode($existingLogs, JSON_PRETTY_PRINT));

// Return success
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Form submitted successfully!',
    'submissionId' => $submissionId,
    'timestamp' => $logEntry['timestamp']
]);
