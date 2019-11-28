<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
	<h1>SimpleXML object</h1>
    <?php
		$strXML = '<book id="11">
				  <title>Lập trình jQuery</title>
				  <author>KhanhPham và ZendVN group</author>
				  <pages>500</pages>
				  <weight units="gam">400</weight>
				  <price>
						<real>35.50</real>
						<saleoff>35.50</saleoff>
				  </price>
				  <shipping>
						<US>1.3</US>
						<EU>2.3</EU>
						<VN>5.6</VN>
				  </shipping>
				  
				</book>';
		
		//Kiem tra kieu du lieu cua bien
		echo "<br>" . gettype($strXML);	
		
		$xml = simplexml_load_string($strXML);
		echo "<br>" . gettype($xml);	
		echo "<pre>";
		print_r($xml);
		echo "</pre>";
		
	?>
    










    
</body>
</html>