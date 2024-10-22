<?php
// JSON string
$jsonString = '{
    "records":[
        {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
        {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
        {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
        {"Name":"Around the Horn","City":"London","Country":"UK"},
        {"Name":"B\'s Beverages","City":"London","Country":"UK"},
        {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
        {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"},
        {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"},
        {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"},
        {"Name":"Bon app\'","City":"Marseille","Country":"France"},
        {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"},
        {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"},
        {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"},
        {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"},
        {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"}
    ]
}';

// Decode JSON string into PHP array
$data = json_decode($jsonString, true);

// Check if decoding was successful
if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
    die('Error decoding JSON');
}

// Display data in a readable format
echo "<table border='1'>
        <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
        </tr>";

foreach ($data['records'] as $record) {
    echo "<tr>
            <td>{$record['Name']}</td>
            <td>{$record['City']}</td>
            <td>{$record['Country']}</td>
          </tr>";
}

echo "</table>";
?>
