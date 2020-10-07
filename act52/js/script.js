function validateForm() 
{
	var x = document.getElementById('cbxPolicy1').value;
	var f = document.getElementById('frstName').value;
	var l = document.getElementById('lstName').value;
	var e = document.getElementById('email').value;
	var p = document.getElementById('txtPassword').value;
	var r = document.getElementById('FMOType').value;
	var d = document.getElementById('drpRoleType');
	var d2 = d.options[d.selectedIndex].value;
	
	if(!cbxPolicy1.checked)
	{
		alert('You must agree to the terms first before registering.');
		return false;
	}
	
	if(f == "" && l == "" && e == "" && p == "" && r == "" && d2 == "")
	{
		return false;
	}
	
	if(cbxPolicy1.checked && f != "" && l != "" && e != "" && p != "" && r != "" && d2 != "")
	{
		alert('Your profile has been added into the registry, \n be sure to check your school email for updates!');
		return true;
	}
	
	
	
}



