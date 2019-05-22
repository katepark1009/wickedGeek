<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler("error_handler");
$output = file_get_contents('./dummy-products-list.json');
if(!$conn) {
    throw new Exception("Connection error: " . mysqli_connect_error());
};
print $output;
?>
