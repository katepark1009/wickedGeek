<?php
require_once('./functions.php');
dostuff();
set_exception_handler("error_handler");
$output = file_get_contents('./dummy-products-list.json');
print $output;
?>
