function validatePasswords()
{
	if (document.getElementsByName("password")[0].value.length < 8)
	{
		alert("Password needs to be at least 8 characters long");
	}
	else if (document.getElementsByName("password")[0].value != document.getElementsByName("password")[1].value)
	{
		alert("Passwords do not match");
	}
}
