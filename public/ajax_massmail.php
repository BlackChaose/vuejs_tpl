<?php
ini_set('display_errors', '1');
header("HTTP/1.0 202 Accept");
header("Application/json");
$json = file_get_contents('php://input');
$data = json_decode($json);

if (!empty($data->query_data->dt->attach_file->fo)) {
    $fl = $data->query_data->dt->attach_file->fo;
    print_r($fl); die;
    file_put_contents('./temp.file.jpg', $fl);
}

echo "in" . __FILE__;
echo "<br>\n";
echo "<pre>";
echo json_encode($data);
echo "/// ====>";
print_r($data);
echo "-///----------------------> ";
print_r($_POST);
echo "----files-----";
print_R($_FILES);
echo "</pre>";

if (!empty($_FILES)) {
    require_once './FileUpload.php';

    $ff = new FileUpload('attached_file');
    $ff->upload_file();
}
?>
