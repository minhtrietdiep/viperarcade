<?php
$points = base64_decode(mysql_escape_string($_GET["points"]));
$name = mysql_escape_string($_GET["playername"]);

$servername = "localhost";
$username = "dbi318432";
$password = "519MNxnGzV";
$dbname = "dbi318432";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO scores (Name, Score) VALUES ('$name', '$points')";

if ($conn->query($sql) === TRUE) {
    echo "Bedankt! Je kan het scorebord <a>hier</a> zien";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
