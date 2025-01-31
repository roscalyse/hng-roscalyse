<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$result =[
    'email_address'=> 'roscalyse11@gmail.com',
    'current_datetime'=> gmdate("c"),
    'github_url' => 'https://github.com/roscalyse/hng-roscalyse.git'
];
echo json_encode($result);
?>