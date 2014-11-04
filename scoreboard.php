<?php
$servername = "localhost";
$username = "dbi318432";
$password = "519MNxnGzV";
$dbname = "dbi318432";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Name, Score FROM scores";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["Name"]. " " . $row["Score"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
