<?php
  require_once('functions.php');
  require_once('db_connection.php');
  set_exception_handler("error_handler");
  if(!$conn) {
      throw new Exception("Connection error: " . mysqli_connect_error());
  };
  $query='';
  if(empty($_GET['id'])) {
    // $whereClause = '';
    $query = "SELECT p.* , i.`url` FROM `products_list` AS p JOIN `images` as i ON p.`id` = i.`products_id` ORDER BY p.`id`";
  } else {
    $id = $_GET['id'];
    if(is_numeric($id)){
      // $whereClause = "WHERE id={$id}";
      $query = "SELECT * FROM products_list WHERE id={$id}";
    } else {
      throw new Exception("Errormessage: 'id' needs to be a number");
    };
  };
  // $query = "SELECT * FROM products_list " . $whereClause;
  $result = mysqli_query($conn, $query);
  
  if (!$result) {
    throw new Exception("Errormessage: " . mysqli_error($conn));
  };

  if(!empty($_GET['id'])) {
    if(mysqli_num_rows($result) < 1 ){
      $id = $_GET['id'];
      throw new Exception("Errormessage: invalid ID: {$id}");
    };
  };

  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $thisData = array($row['image']);
    unset($row['id'], $row['name'], $row['price'], $row['shortDescription']);

    if(empty($output[$row['id']])) {
      $row['image'] = [];
      $row['image'][] = $thisData;
      $output[$row['id']] = $row; 
    } else {
      $output[$row['id']]['image'][] = $thisData;
    }
  };

  $json_output = json_encode($output, JSON_INVALID_UTF8_SUBSTITUTE);
  $b = html_entity_decode($json_output);
  print ($b);
?>
