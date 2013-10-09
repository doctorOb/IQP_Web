function add_returnToLados(id){
	var newtd = document.createElement("TR");
	var toLados = document.createElement("TD");
	if(id == 'topbar'){
		var table = document.getElementById(id).getElementsByTagName('table')[0];
		toLados.innerHTML = '<td><a href="http://www.wpi.edu/academics/me/IMDC/" title="iMdc" target="_parent"><img alt="Return to IMDC website" src="Templates/TemplateFiles/Lados-button.jpg" alt="IQP Teams" name="IQP Teams" width="150" height="25" border="0" id="IQPTeams" onload="" ></a></td>';
		table.rows[0].appendChild(toLados);
		return true;
	}else{
		var navbar = document.getElementById(id).childNodes[1];
		var newtd = document.createElement("TR");
		var toLados = document.createElement("TD");
		img = '<img src="Templates/TemplateFiles/Lados-button.jpg" alt="IQP Teams" name="IQP Teams" width="193" height="50" border="0" id="IQPTeams" onload="" >'
		toLados.innerHTML = '<a href="http://www.wpi.edu/academics/me/IMDC/" title="Lados Home Page" target="_parent">' + img + '</a>';
		newtd.appendChild(toLados);
		navbar.appendChild(newtd);
	}
}