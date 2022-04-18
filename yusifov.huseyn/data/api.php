<?php

function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      return $conn;
   } catch(PDOException $e) {
      die('{"error":"'.$e->getMessage().'"}');
   }
}


// $r = PDO result
function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(\PDO::FETCH_OBJ)) $a[] = $row;
   return $a;
}


/*
$c = connection
$ps = prepared statement
$p = parameters
*/
function makeQuery($c,$ps,$p,$makeResults=true) {
   try {
      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         // "statement"=>$ps,
         // "params"=>$p,
         "result"=>$r
      ];
   } catch(PDOException $e) {
      return ["error"=>"Query Failed: ".$e->getMessage()];
   }
}

function makeStatement($data){
   $c = makeConn();
   $t = $data->type;
   $p = $data->params;

   switch ($t) {
         case 'users_all':
         return makeQuery($c,"SELECT * FROM `users`",$p);
         case 'cats_all':
            return makeQuery($c,"SELECT * FROM `animals`",$p);
         case 'locations_all':
            return makeQuery($c,"SELECT * FROM `locations`",$p);

         case 'user_by_id':
            return makeQuery($c,"SELECT `id`,`name`,`img`,`username`,`email` FROM `users` WHERE `id` = ?",$p);
         case 'cat_by_id':
            return makeQuery($c,"SELECT * FROM `animals` WHERE `id` = ?",$p);
         case 'location_by_id':
            return makeQuery($c,"SELECT * FROM `locations` WHERE `id` = ?",$p);

         case 'cats_by_user_id':
            return makeQuery($c,"SELECT * FROM `animals` WHERE `user_id` = ?",$p);
         case 'locations_by_cat_id':
            return makeQuery($c,"SELECT * FROM `locations` WHERE `animal_id` = ?",$p);
            
         case 'locations_by_user_id':
            return makeQuery($c,"SELECT `lat`,`lng` FROM `locations` JOIN `animals` ON `locations.animal_id` = `animals.id` JOIN `users` ON `animals.user_id` = user.id`",$p);
                     
         case 'check_signin':
            return makeQuery($c,"SELECT id from `users` WHERE `username` = ? AND `password` = md5(?)",$p);

      default:
            return ["error"=>"no matched type"];
   }
}

$data = json_decode(file_get_contents("php://input"));

echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);