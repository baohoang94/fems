<?php
class Database{
	
	const SERVER 	= 'localhost';
	const USERNAME 	= 'root';
	const PASSWORD 	= '';
	const DATABASE  = 'chat';
	
	protected $_connect;
	
	// CONNECT DATABASE
	public function __construct(){
		$connect = mysql_connect(self::SERVER,self::USERNAME, self::PASSWORD);
		if(!$connect){
			die('Fail connect: ' . mysql_errno());
		}else{
			$this->_connect 	= $connect;
			mysql_select_db(self::DATABASE, $this->_connect );
			$this->query("SET NAMES 'utf8'");
			$this->query("SET CHARACTER SET 'utf8'");
		}
	}
	
	// DISCONNECT DATABASE
	public function __destruct(){
		mysql_close($this->_connect);
	}
	
	// QUERY
	public function query($sql){
		return mysql_query($sql, $this->_connect);
	}
	
	// LIST RECORD
	public function listRecord($query){
		$result = array();
		if(!empty($query)){
			$resultQuery = $this->query($query);
			if(mysql_num_rows($resultQuery) > 0){
				while($row = mysql_fetch_assoc($resultQuery)){
					$result[] = $row;
				}
				mysql_free_result($resultQuery);
			}
		}
		return $result;
	}
	
	
	public function getUserList(){
		$sql = 'SELECT * FROM users ORDER BY id ASC';
		$result = $this->listRecord($sql);
		return $result;
	}
	
	
	
	
}