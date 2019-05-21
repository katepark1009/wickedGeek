<?php 
   function error_handler($error) {
    return null;
  };
   set_exception_handler("error_handler");
// //   doStuff();
// //   throw new Exception('I want an error');
//    $randomNumber = rand(1, 10);
//   if ($randomNumber % 2) {
//       print "The number was {$randomNumber}";
//   } else {
//       throw new Exception('Exception: the number was even');
//   };
?> 