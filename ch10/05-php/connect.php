<?php
 $conn = mysql_connect("localhost",'root',"");
 if(!$conn){
	die("Could not connect: " . mysql_error()); 
 }
 
 $db = mysql_select_db("jquery",$conn);
 
 mysql_query("SET NAMES 'utf8'");
?>