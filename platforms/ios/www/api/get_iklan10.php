<?php
 
/*
 * Following code will list all the tasks
 */
 
// array for JSON response
$response = array();
 
// include db connect class
require_once __DIR__ . '/db_connect.php';
 
// connecting to db
$db = new DB_CONNECT();
 
// get all tasks from iklan table
$result = mysql_query("SELECT *FROM iklan where id=10") or die(mysql_error());
 
// check for empty result
if (mysql_num_rows($result) > 0) {
    // looping through all results
    // tasks node
    $response["iklan"] = array();
 
    while ($row = mysql_fetch_array($result)) {
        // temp tasks array
        $iklans = array();
        $iklan["id"] = $row["id"];
        $iklan["gambar"] = $row["gambar"];
        $iklan["keterangan"] = $row["keterangan"];
 
        // push single iklan into final response array
        array_push($response["iklan"], $iklan);
    }
    // success
    $response["success"] = 1;
 
    // echoing JSON response
    echo json_encode($response);
} else {
    // no tasks found
    $response["success"] = 0;
    $response["message"] = "No tasks found";
 
    // echo no tasks JSON
    echo json_encode($response);
}
?>