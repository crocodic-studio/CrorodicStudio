<?php
 
/*
 * Following code will list all the events
 */
 
// array for JSON response
$response = array();
 
// include db connect class
require_once __DIR__ . '/db_connect.php';
 
// connecting to db
$db = new DB_CONNECT();
 
// get all events from event table
$result = mysql_query("SELECT *FROM events") or die(mysql_error());
 
// check for empty result
if (mysql_num_rows($result) > 0) {
    // looping through all results
    // events node
    $response["events"] = array();
 
    while ($row = mysql_fetch_array($result)) {
        // temp events array
        $events = array();
        $event["id"] = $row["id"];
        $event["title"] = $row["title"];
        $event["instructor"] = $row["instructor"];
        $event["description"] = $row["description"];
		$event["tanggal"] = $row["tanggal"];
    
 
        // push single event into final response array
        array_push($response["events"], $event);
    }
    // success
    $response["success"] = 1;
 
    // echoing JSON response
    echo json_encode($response);
} else {
    // no events found
    $response["success"] = 0;
    $response["message"] = "No events found";
 
    // echo no events JSON
    echo json_encode($response);
}
?>