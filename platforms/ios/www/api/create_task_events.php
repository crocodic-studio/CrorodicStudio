<?php
 
/*
 * Following code will create a new task row
 * All task details are read from HTTP Post Request
 */
 
// array for JSON response
$response = array();
 
// check for required fields
if (isset($_POST['title']) && isset($_POST['instructor']) && isset($_POST['description'])&& isset($_POST['tanggal'])) {
 
  	$title = $_POST['title'];
    $instructor = $_POST['instructor'];
    $description = $_POST['description'];
 	$tanggal = $_POST['tanggal'];
    // include db connect class
    require_once __DIR__ . '/db_connect.php';
 
    // connecting to db
    $db = new DB_CONNECT();
 
    // mysql inserting a new row
    $result = mysql_query("INSERT INTO events(title, instructor, description, tanggal) VALUES('$title', '$instructor', '$description' , '$tanggal'");
 
    // check if row inserted or not
    if ($result) {
        // successfully inserted into database
        $response["success"] = 1;
        $response["message"] = "Task successfully created.";
 
        // echoing JSON response
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Oops! An error occurred.";
 
        // echoing JSON response
        echo json_encode($response);
    }
} else {
    // required field is missing
    $response["success"] = 0;
    $response["message"] = "Required field(s) is missing";
 
    // echoing JSON response
    echo json_encode($response);
}
?>