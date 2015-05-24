<?php
 
/*
 * Following code will get single stand details
 * A stand is identified by stand id (standId)
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
 
    // get a stand from stand table
    $result = mysql_query("SELECT *FROM stands WHERE id = $id");
 
    if (!empty($result)) {
        // check for empty result
        if (mysql_num_rows($result) > 0) {
 
            $result = mysql_fetch_array($result);
 
            $stand = array();
            $stand["id"] = $result["id"];
            $stand["lobby"] = $result["lobby"];
            $stand["perusahaan"] = $result["perusahaan"];
            $stand["keterangan"] = $result["keterangan"];
            // success
            $response["success"] = 1;
 
            // user node
            $response["stand"] = array();
 
            array_push($response["stand"], $stand);
 
            // echoing JSON response
            echo json_encode($response);
        } else {
            // no stand found
            $response["success"] = 0;
            $response["message"] = "No stand found";
 
            // echo no users JSON
            echo json_encode($response);
        }
    } else {
        // no stand found
        $response["success"] = 0;
        $response["message"] = "No stand found";
 
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