<?php
 
/*
 * Following code will update a task information
 * A task is identified by task id (taskId)
 */
 
// array for JSON response
$response = array();
 
// check for required fields
if (isset($_POST['id']) && isset($_POST['title']) && isset($_POST['instructor']) && isset($_POST['description'])&& isset($_POST['tanggal'])) {
 
    $id = $_POST['id'];
    $title = $_POST['title'];
    $instructor = $_POST['instructor'];
	$description = $_POST['description'];
 	$tanggal = $_POST['tanggal'];
    // include db connect class
    require_once __DIR__ . '/db_connect.php';
 
    // connecting to db
    $db = new DB_CONNECT();
 
    // mysql update row with matched pid
    $result = mysql_query("UPDATE events SET title = '$title', instructor = '$instructor', description = '$description', tanggal = '$tanggal'");
 
    // check if row inserted or not
    if ($result) {
        // successfully updated
        $response["success"] = 1;
        $response["message"] = "Task successfully updated.";
 
        // echoing JSON response
        echo json_encode($response);
    } else {

    }
} else {
    // required field is missing
    $response["success"] = 0;
    $response["message"] = "Required field(s) is missing";
 
    // echoing JSON response
    echo json_encode($response);
}
?>