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
 
// get all tasks from stand table
$result = mysql_query("SELECT *FROM stand") or die(mysql_error());
 
// check for empty result
if (mysql_num_rows($result) > 0) {
    // looping through all results
    // tasks node
    $response["stand"] = array();
 
    while ($row = mysql_fetch_array($result)) {
        // temp tasks array
        $stands = array();
        $stand["id"] = $row["id"];
        $stand["lobby"] = $row["lobby"];
        $stand["perusahaan"] = $row["perusahaan"];
		$stand["keterangan"] = $row["keterangan"];
 
        // push single stand into final response array
        array_push($response["stand"], $stand);
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