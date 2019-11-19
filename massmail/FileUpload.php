<?php

class FileUpload
{
    public $target_dir;
    public $target_file;
    public $uploadOk;
    public $fileType;
    public $fileNameField;

    public function __construct($fNF, $td_path, $tf_name)
    {
        $this->fileNameField = (!empty($fNF)) ? $fNF : 'fileToUpload';
        $this->target_dir = (!empty($td_path)) ? $td_path : 'uploads/';
        $this->target_file = (!empty($tf_name)) ? $tf_name : $this->target_dir . basename($_FILES[$this->fileNameField]["name"]);

    }

    //todo: get file type; get file size; set of validations;
    //fixme: target_dir !!!

    public function upload_file()
    {
        try {
            if (empty($_FILES)) {
                throw(new Exception('Array $_FILES are empty!'));
            }
            if (file_exists($this->target_file)) {
                throw(new Exception("Sorry, file already exists."));

            } else {
                if (move_uploaded_file($_FILES[$this->fileNameField]["tmp_name"], $_FILES[$this->fileNameField]["name"])) {
                    header('Content-type: application/json');
                    echo json_encode(["message" => "The file " . basename($_FILES[$this->fileNameField]["name"]) . " has been uploaded."]);
                    die;
                } else {
                    throw(new Exception("Sorry, there was an error uploading your file."));
                }
            }
        } catch (Exception $e) {
            file_put_contents('./error_log', date('Y-m-d HH:MM:SS') . ": " . $e->getMessage(), FILE_APPEND);
            http_response_code(400);
            header('Content-type: application/json');
            echo json_encode(['message: ' => 'Error!']);
            die;
        }
    }
}

