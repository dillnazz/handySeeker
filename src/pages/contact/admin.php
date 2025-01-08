<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "specialists_db";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM specialists WHERE profession = 'Electrician' AND experience >= 5";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "Name: " . $row["name"]. " - Experience: " . $row["experience"]. " years - Rating: " . $row["rating"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>
