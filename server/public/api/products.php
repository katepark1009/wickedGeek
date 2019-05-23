<?php
  require_once('functions.php');
  require_once('db_connection.php');
  set_exception_handler("error_handler");
  if(!$conn) {
      throw new Exception("Connection error: " . mysqli_connect_error());
  };
  if(empty($_GET['id'])) {
    $whereClause = '';
  } else {
    $id = $_GET['id'];
    if(is_numeric($id)){
      $whereClause = "WHERE id={$id}";
    } else {
      throw new Exception("Errormessage: 'id' needs to be a number");
    };
  };
  $query = "SELECT * FROM products_list " . $whereClause;
  $result = mysqli_query($conn, $query);
  
  if (!$result) {
    throw new Exception("Errormessage: " .mysqli_error($conn));
  };
  if(!empty($_GET['id'])) {
    if(mysqli_num_rows($result) < 1 ){
      $id = $_GET['id'];
      throw new Exception("Errormessage: invalid ID: {$id}");
    };
  };

  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
    array_push($output, $row);
  };

  $json_output = json_encode($output);
  print ($json_output);
?>
