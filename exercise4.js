function setValues()
{
	let borderred = document.getElementsByName("borderred")[0].value;
	let bordergreen = document.getElementsByName("bordergreen")[0].value;
	let borderblue = document.getElementsByName("borderblue")[0].value;
	let borderwidth = document.getElementsByName("borderwidth")[0].value;
	let backgroundred = document.getElementsByName("backgroundred")[0].value;
	let backgroundgreen = document.getElementsByName("backgroundgreen")[0].value;
	let backgroundblue = document.getElementsByName("backgroundblue")[0].value;

	document.getElementById("cat").style.borderColor = "rgb(" + borderred + ", " + bordergreen + ", " + borderblue + ")";
	document.getElementById("cat").style.borderWidth = borderwidth + "px";
	document.getElementById("cat").style.borderStyle = "solid";
	document.getElementById("cat").style.backgroundColor = "rgb(" + backgroundred + ", " + backgroundgreen + ", " + backgroundblue + ")";
}
