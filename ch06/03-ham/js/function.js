// Hien thi tên và nghề nghiệp của một người nào đó

function showInfo(user, job){
	document.write("Tên: " + user + "<br />");
	document.write("Nghề nghiệp: " + job);
}

// Hiển thị tên đầy đủ của một người nào đó

function showFullName(firstName, lastName){
	var fullName = firstName + " " + lastName;
	return fullName;
}