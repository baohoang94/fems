<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Business LTD</title>
	<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
	
	<script src="js/jquery.js" type="text/javascript"></script>
	<script src="js/bootstrap.js" type="text/javascript"></script>

	<script type="text/javascript">
		$(document).ready(function() {
			$('[data-toggle=popover]').popover({ 
				html 		: true,						
				animation 	: true,					
				placement 	: 'top',	
				trigger 	: 'hover'
			}).on('shown.bs.popover', function(){
				var pos = parseInt($('.popover').css('top')) - 22 + 'px';
				$('.popover').css('top',pos);
			});

			$('#popover-2').popover({ 
				html 		: true,						
				animation 	: true,					
				placement 	: 'top',	
				trigger 	: 'hover',
				content 	: function(){ return $('.popover-content').html();},
				title 		: function(){ return $('.popover-title').html();}
			});

			$('[data-toggle=tooltip]').tooltip();

		});
	</script>
</head>
<body>
	<section id="headerSection">
		<?php include_once 'php/navigation.php'; ?>
	</section>
	<section id="slideSection">
		<?php include_once 'php/slide.php'; ?>
	</section>
	<section id="fieldSection">
		<?php include_once 'php/field.php'; ?>
	</section>
	<section id="workSection">
		<?php include_once 'php/work.php'; ?>
	</section>
	<section id="bannerSection">
		<?php include_once 'php/banner.php'; ?>
	</section>
	<section id="footerSection">
		<?php include_once 'php/footer.php'; ?>
	</section>	
</body>