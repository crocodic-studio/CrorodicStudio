<?php
 
/*
 * Following code will list all the stands
 */
 
// array for JSON response
$response = array();
 
// include db connect class
require_once __DIR__ . '/db_connect.php';
 
// connecting to db
$db = new DB_CONNECT();
 
// get all stands from stand table
$result = mysql_query("SELECT *FROM stands") or die(mysql_error());
 
// check for empty result
if (mysql_num_rows($result) > 0) {
    // looping through all results
    // stands node
    $response["stands"] = array();
 
    while ($row = mysql_fetch_array($result)) {
        // temp stands array
        $stands = array();
        $stand["id"] = $row["id"];
        $stand["lobby"] = $row["lobby"];
        $stand["perusahaan"] = $row["perusahaan"];
        $stand["keterangan"] = $row["keterangan"];
    
 
        // push single stand into final response array
        array_push($response["stands"], $stand);
    }
    // success
    $response["success"] = 1;
 
    // echoing JSON response
    echo json_encode($response);
} else {
    // no stands found
    $response["success"] = 0;
    $response["message"] = "No stands found";
 
    // echo no stands JSON
    echo json_encode($response);
}
?>