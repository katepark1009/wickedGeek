<?php 
   function error_handler($error) {
     $output =array("success" => false, "error" => $error-> getMessage() );
     $json_output = json_encode($output);
     http_response_code(500);
     print ($json_output);
   };
   set_exception_handler("error_handler");
?> 