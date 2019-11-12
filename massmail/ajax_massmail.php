<?php
ini_set('display_errors', '1');
header("HTTP/1.0 202 Accept");
header("Application/json");
$json = file_get_contents('php://input');
$data = json_decode($json);

echo "in".__FILE__;
echo "<br>\n";
echo "<pre>";
echo json_encode($data);
echo "====>";
print_r($data);
echo "</pre>";
print_r(json_decode($_POST));
?>
