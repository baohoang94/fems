<?php
	require_once("connect.php");
	
	//Tao cau truy van
	$query = "SELECT * FROM books";
	
	//Lay ra ket qua truy van
	$result = mysql_query($query);
	$books = array();
	
	while($row =  mysql_fetch_assoc($result)){
		
		$books[] = $row;
	}
	
	$strBooks = json_encode($books);
	//echo "<br>" . $strBooks;
		
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript">
	var myObj = eval('<?php echo $strBooks;?>');
	console.log(myObj);
	console.log(myObj[0].title);
</script>
</head>

<body>
</body>
</html>