<?php
 
/*
 * Following code will get single eventk details
 * A eventk is identified by eventk id (eventkId)
 */
 
// array for JSON response
$response = array();
 
// include db connect class
require_once __DIR__ . '/db_connect.php';
 
// connecting to db
$db = new DB_CONNECT();
 
// check for post data
if (isset($_GET["id"])) {
    $id = $_GET['id'];
 
    // get a eventk from eventk table
    $result = mysql_query("SELECT *FROM events WHERE id = $id");
 
    if (!empty($result)) {
        // check for empty result
        if (mysql_num_rows($result) > 0) {
 
            $result = mysql_fetch_array($result);
 
            $eventk = array();
            $eventk["id"] = $result["id"];
            $eventk["title"] = $result["title"];
            $eventk["instructor"] = $result["instructor"];
            $eventk["keterangan"] = $result["keterangan"];
			$eventk["tanggal"] = $result["tanggal"];
            // success
            $response["success"] = 1;
 
            // user node
            $response["eventk"] = array();
 
            array_push($response["eventk"], $eventk);
 
            // echoing JSON response
            echo json_encode($response);
        } else {
            // no eventk found
            $response["success"] = 0;
            $response["message"] = "No eventk found";
 
            // echo no users JSON
            echo json_encode($response);
        }
    } else {
        // no eventk found
        $response["success"] = 0;
        $response["message"] = "No eventk found";
 
        // echo no users JSON
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