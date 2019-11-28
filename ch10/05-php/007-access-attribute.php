<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
	<h1>SimpleXML object</h1>
    <?php
		//SimpleXML object
		$xml = simplexml_load_file("files/books.xml");
		
		$weight = $xml->book[0]->weight;	
		$weightUnits = $weight->attributes()->units;
		echo "<br>" . $weightUnits;	
		echo "<br>" . $weight;	
		
		
		echo "<pre>";
		print_r($weight);
		echo "</pre>";
		
	?>
    










    
</body>
</html>