<?php
	require_once("connect.php");
	
	//Tao cau truy van
	$query = "SELECT * FROM books";
	
	//Lay ra ket qua truy van
	$result = mysql_query($query);
	
	header("Content-type: text/xml");
	
	$xml = '<?xml version="1.0" encoding="utf-8"?>';
	$xml .= '<book_shop>';
	while($row =  mysql_fetch_assoc($result)){
		
		$xml .= '<book id="' . $row["id"] . '">
				  <title>' . $row["title"] . '</title>
				  <author>' . $row["author"] . '</author>
				  <pages>' . $row["pages"] . '</pages>
				  <weight units="' . $row["units"] . '">' . $row["weight"] . '</weight>
				  <price>
						<real>' . $row["real"] . '</real>
						<saleoff>' . $row["saleoff"] . '</saleoff>
				  </price>
				  <shipping>
						<US>' . $row["us"] . '</US>
						<EU>' . $row["eu"] . '</EU>
						<VN>' . $row["vn"] . '</VN>
				  </shipping>
				  
				</book>';
	}
	
	$xml .= '</book_shop>';
	echo $xml;
?>







