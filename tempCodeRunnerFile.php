<?php
// Load the XML file
$xml = simplexml_load_file("restaurants.xml");

if ($xml === false) {
    die("Error: Cannot load XML file.");
}

echo "<h2>Restaurant List</h2>";
echo "<table border='1' cellpadding='5' cellspacing='0'>";
echo "<tr><th>Name</th><th>Address</th><th>Owner</th><th>Phone Number</th></tr>";

// Loop through each restaurant and display its details
foreach ($xml->restaurant as $restaurant) {
    echo "<tr>";
    echo "<td>" . $restaurant['name'] . "</td>";
    echo "<td>" . $restaurant->address . "</td>";
    echo "<td>" . $restaurant->owner . "</td>";
    echo "<td>" . $restaurant->phoneno . "</td>";
    echo "</tr>";
}

echo "</table>";
?>