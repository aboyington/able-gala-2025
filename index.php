<?php
// Redirect shim for legacy URL: /index.php/event-calendar#... -> /events/index.html#...
// Use client-side redirect to preserve the fragment identifier (hash), which is not sent to the server.
$pathInfo = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
$requestUri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';

if ($pathInfo === '/event-calendar' || strpos($requestUri, '/index.php/event-calendar') === 0) {
    header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
    header('Pragma: no-cache');
    // Intentionally no Location header so we can preserve the hash via JS
    ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Redirecting to Events Calendar…</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="5; url=/events/index.html">
    <script>
      (function(){
        var hash = window.location.hash || '';
        window.location.replace('/events/index.html' + hash);
      })();
    </script>
    <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;background:#000;color:#ddd;display:grid;place-items:center;height:100vh;margin:0}a{color:#d4af37}</style>
  </head>
  <body>
    <p>Redirecting to the Events Calendar… If you are not redirected, <a href="/events/index.html">click here</a>.</p>
  </body>
</html>
<?php
    exit;
}

// Fallback: send to home if /index.php is accessed directly for any other reason.
header('Location: /', true, 302);
exit;
