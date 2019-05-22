<?php
  require_once('functions.php');
  require_once('db_connection.php');
  set_exception_handler("error_handler");
  if(!$conn) {
      throw new Exception("Connection error: " . mysqli_connect_error());
    };
  $query = 'SELECT * FROM products_list WHERE 1';
  $result = mysqli_query($conn, $query);
  
  if (!$result) {
    throw new Exception("Errormessage: " .mysqli_error($conn));
  };

  $output = [];
  if( mysqli_num_rows($result) === 0 ) {
    print ("no data available");
    exit();
  };
    
  while ($row = mysqli_fetch_assoc($result)) {
    array_push($output, $row);
  };
  $json_output = json_encode($output);
  print ($json_output);
?>
