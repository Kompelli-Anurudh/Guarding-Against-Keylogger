// Global variable to store accumulated keystrokes
var accumulatedKeystrokes = '';

// Function to handle input event and send keystrokes to PHP
function handleInput() {
    var keystrokes = document.getElementById('keystrokes').value;

    // Check if there are new keystrokes
    if (keystrokes !== accumulatedKeystrokes) {
        accumulatedKeystrokes = keystrokes;
        sendToPHP(keystrokes);
    }
}

// Function to send keystrokes to PHP script
function sendToPHP(keystrokes) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the response from PHP (if needed)
            console.log(xhr.responseText);
	    alert('Your data has been collected');
        }
    };
    xhr.send('keystrokes=' + encodeURIComponent(keystrokes));
}

// Attach the handleInput function to the input event
document.getElementById('keystrokes').addEventListener('input', handleInput);

// Use setInterval to send accumulated keystrokes every 1 millisecond
setInterval(function () {
    if (accumulatedKeystrokes !== '') {
        sendToPHP(accumulatedKeystrokes);
        accumulatedKeystrokes = '';
    }
}, 10);
