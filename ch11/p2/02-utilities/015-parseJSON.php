<?php
	$book = array(
					"title"=>"jQuery master",
					"author"=>"KhanhPham"
				);
	$strJSON = json_encode($book);
	echo "<br/>" . $strJSON;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css"/>
<script type="text/javascript" src="js/jquery-1.10.0.min.js"></script>
<script type="text/javascript" src="js/xml.js"></script>
<title>jQuery basic</title>
<script type="text/javascript">
	
	jQuery(document).ready(function(e) {
		
		$("#process").click(function(e) {
			var obj = $.parseJSON('<?php echo $strJSON;?>');
			console.log(obj);
        });
		
		
    });
	
	
	
</script>
</head>

<body>
	<h1 style="text-align: center;">
        jQuery.parseJSON( json )
    </h1>
    
    <div id="boxA" class="boxA">
    	<div class="item">1.HTML</div>
        <div class="item">2.CSS</div>
        <div class="item">3.JS</div>
        <div class="item">4.jQuery</div>
    </div>
    
    <center>
    	<input type="button" class="button" id="process" value="Process"/>
    </center>
</body>
</html>
