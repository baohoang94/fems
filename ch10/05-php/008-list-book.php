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
		
		$str = '';
		foreach($xml as $node){
			$str .= "Title: " . $node->title . "<br>"
					. "Author: " . $node->author . "<br>"
					. "Pages: " . $node->pages . "<br>"
					. "Weight: " . $node->weight . " " 
					. $node->weight->attributes()->units . "<br>"
					. "Real price: " . $node->price->real . "<br>"
					. "Saleoff price: " . $node->price->saleoff . "<br>" 
					. "US: " . $node->shipping->US . "<br>" 
					. "EU: " . $node->shipping->EU . "<br>" 
					. "VN: " . $node->shipping->VN . "<br>" 
					. "=====================================<br>";
		}
		
		echo $str;
	?>
    










    
</body>
</html>