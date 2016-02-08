<?php
 
   $name = $_POST['form-project-name'];

   $data = array();
   

   if ( $name === '') {
   	$data['status'] = 'error';
   	$data['text'] = 'Заполните имя!';
   } else{
      $data['status'] = 'ok';
   	$data['text'] = 'Молодец';
   }
  
   header("Content-Type : application/json");
   echo json_encode($data);
   exit;


?>
