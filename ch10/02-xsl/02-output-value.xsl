<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
	<html>
    <head>
    	<title>XSL tutorial</title>
    </head>
    <body>
    	<h1>Khóa học lập trình jQuery</h1>
        <ul>
        	<li>Tên khóa học: <xsl:value-of select="book/title"/></li>
            <li>Tác giả: <xsl:value-of select="book/author"/></li>
            <li>Số trang: <xsl:value-of select="book/pages"/></li>
            <li>
            	Khối lượng: <xsl:value-of select="book/weight"/>
           					<xsl:value-of select="book/weight/@units"/> 
            </li>
        </ul>
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>