<?php
  require_once('functions.php');
  require_once('db_connection.php');
  set_exception_handler("error_handler");
  if(!$conn) {
      throw new Exception("Connection error: " . mysqli_connect_error());
  };
  $query='';
  if(empty($_GET['id'])) {
    $query = "SELECT p.* , JSON_ARRAYAGG( i.`url`) as images FROM `products_list` AS p JOIN `images` as i ON p.`id` = i.`products_id` GROUP BY p.`id`, p.`name`, p.`price`, p.`shortDescription`, p.`longDescription` ORDER BY p.`id`
    ";
  } else {
    $id = $_GET['id'];
    if(is_numeric($id)){
    $query = "SELECT p.* , JSON_ARRAYAGG( i.`url`) as images FROM `products_list` AS p JOIN `images` as i ON p.`id` = i.`products_id` GROUP BY p.`id`, p.`name`, p.`price`, p.`shortDescription`, p.`longDescription` HAVING id={$id}";
      $result = mysqli_query($conn, $query);
      $row = mysqli_fetch_assoc($result);
      $images = json_decode($row['images']);
      $images[] = $row['image'];
      $row['images'] = $images;
      unset ($row['image']);
      $json_output = json_encode($row, JSON_INVALID_UTF8_SUBSTITUTE);
      print ($json_output);
      exit();
    } else {
      throw new Exception("Errormessage: 'id' needs to be a number");
    };
  };
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
    if(!$row['images']) {
      $row['images']=[];
    };
    $images = json_decode($row['images']);
    $images[] = $row['image'];
    $row['images'] = $images;
    unset ($row['image']);
    $output[]=$row;
  };
  $json_output = json_encode($output, JSON_INVALID_UTF8_SUBSTITUTE);
  print ($json_output);
?>
