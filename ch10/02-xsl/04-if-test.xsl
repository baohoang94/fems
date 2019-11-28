<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="book">
	<html>
    <head>
    	<title>XSL tutorial</title>
    </head>
    <body>
    	<h1>Khóa học lập trình jQuery</h1>
        <ul>
        	<li>Tên khóa học: <xsl:value-of select="title"/></li>
            <li>Tác giả: <xsl:value-of select="author"/></li>
            <li>Số trang: <xsl:value-of select="pages"/></li>
            <xsl:if test="weight/@units != 'gam'">
            <li>
            	Khối lượng: <xsl:value-of select="weight"/>
           					<xsl:value-of select="weight/@units"/> 
            </li>
            </xsl:if>
        </ul>
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>