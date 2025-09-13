<?php
// newsletter.php — simple PHPMailer handler for newsletter signups
// Security: lightweight honeypot, required email, basic name capture
// Returns JSON: { ok: true } or { ok: false, error: "message" }

header('Content-Type: application/json');
// If reCAPTCHA site key is set on client, expect token here (optional)
$recaptchaToken = isset($_POST['g-recaptcha-response']) ? trim($_POST['g-recaptcha-response']) : '';
$recaptchaSecret = getenv('RECAPTCHA_SECRET');
if ($recaptchaSecret && $recaptchaToken) {
  $resp = @file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.
    urlencode($recaptchaSecret).'&response='.urlencode($recaptchaToken));
  if ($resp) {
    $json = json_decode($resp, true);
    if (!$json || empty($json['success']) || (isset($json['score']) && $json['score'] < 0.5)) {
      http_response_code(400);
      echo json_encode(['ok' => false, 'error' => 'reCAPTCHA validation failed.']);
      exit;
    }
  }
}

// Basic honeypot
$honeypot = isset($_POST['website']) ? trim($_POST['website']) : '';
if ($honeypot !== '') {
  echo json_encode(['ok' => true]);
  exit;
}

$email = isset($_POST['email']) ? trim($_POST['email']) : '';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Valid email is required.']);
  exit;
}

// Configure PHPMailer (assumes PHPMailer is available via composer or included)
// If not available, this will fall back to mail().
$to = 'corporate.communications.able@gmail.com';
$subject = 'ABLE 2025 Gala Newsletter Signup';
$body = "New newsletter signup\n\nEmail: {$email}";

$sent = false;

// Try PHPMailer if available
try {
  if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    // Transport: use PHP mail() by default
    $mail->isMail();
    $mail->setFrom('no-reply@ableorg.ca', 'ABLE Gala 2025');
    $mail->addAddress($to);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $sent = $mail->send();
  }
} catch (Throwable $e) {
  // Fall through to mail() below
}

if (!$sent) {
  // Fallback to PHP mail()
  $headers = 'From: ABLE Gala 2025 <no-reply@ableorg.ca>' . "\r\n";
  $sent = @mail($to, $subject, $body, $headers);
}

// Basic CSV backup (optional): write to ../private/newsletter.csv if exists or writable
$csvPath = dirname(__FILE__).'/../private/newsletter.csv';
if (is_writable(dirname($csvPath))) {
  @file_put_contents($csvPath, sprintf("%s,%s\n", date('c'), $email), FILE_APPEND | LOCK_EX);
}

if ($sent) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Email could not be sent.']);
}
