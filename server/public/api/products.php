<?php
  require_once('functions.php');
  require_once('db_connection.php');
  set_exception_handler("error_handler");
  if(!$conn) {
      throw new Exception("Connection error: " . mysqli_connect_error());
  };
  $id = $_GET['id'];
  if(empty($_GET['id'])) {
    $whereClause = '';
  } else {
    if(is_numeric($id)){
      $whereClause = "WHERE id={$id}";
    } else {
      throw new Exception("Errormessage: 'id' needs to be a number");
    };
  };
  $query = "SELECT * FROM products_list " . $whereClause;
  $result = mysqli_query($conn, $query);
  
  if (!$result) {
    throw new Exception("Errormessage: " . mysqli_error($conn));
  };
  if(!empty($_GET['id'])) {
    if(mysqli_num_rows($result) < 1 ){
      throw new Exception("Errormessage: invalid ID: {$id}");
    };
  };

  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
  };

  $json_output = json_encode($output, JSON_INVALID_UTF8_SUBSTITUTE);
  $b = html_entity_decode($json_output);
  print ($b);
?>
