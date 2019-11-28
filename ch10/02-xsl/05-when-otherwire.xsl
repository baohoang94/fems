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
            
            <li>
            	Khối lượng: <xsl:value-of select="weight"/>
           					<xsl:value-of select="weight/@units"/> 
            </li>
            <li>
            	Chú ý:
                <xsl:choose>
                    <xsl:when test="weight &gt; 500">
                        Cuốn sách này sẽ bị tính phí vận chuyển
                    </xsl:when>
                    <xsl:otherwise>
                        Cuốn sách sẽ được miễn phí vận chuyển
                    </xsl:otherwise>
                </xsl:choose>
            </li>
        </ul>
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>