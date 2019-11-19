<?php
ini_set('display_errors', '1');
header("HTTP/1.0 202 Accept");
header("Application/json");
$json = file_get_contents('php://input');
$data = json_decode($json);

echo "in" . __FILE__;
echo "<br>\n";
echo "<pre>";
echo json_encode($data);
echo '$data: ';
print_r($data);
echo '- $_POST ---> ';
print_r($_POST);
echo '- $_GET ---> ';
print_r($_GET);
echo "----files-----";
print_r($_FILES);
echo "</pre>";

if (!empty($_FILES)) {
    print('$_FILES not empty!');
    require_once './FileUpload.php';

    $ff = new FileUpload('attachment', null, null);
    $ff->upload_file();
}else {
    print('$_FILES are empty!');
}
?>
