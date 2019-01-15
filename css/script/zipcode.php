<?php


$con=mysqli_connect("localhost","miguel","","mb_test");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit;
}

$zip            = mysqli_real_escape_string($con, $_POST["zip"]); 
//$zip            ='07644';

$sql="SELECT * FROM zipcode WHERE zip = '$zip'";
$result = mysqli_query($con,$sql);




$outp = "[";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	
    if ($outp != "[") {$outp .= ",";}

$rs["city"]=trim(preg_replace('/\s\s+/', ' ', $rs["city"]));
$rs["state"]=trim(preg_replace('/\s\s+/', ' ', $rs["state"]));


$outp .= '{"city":"'         . $rs["city"]                 . '",';
$outp .= '"state":'      .json_encode($rs["state"]).'}';   
}


$outp .=']';


echo($outp);


mysqli_close($con);
?>
