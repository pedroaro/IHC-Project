function completar() {
	document.getElementById("banner").innerHTML=config[0]["Español"]["Inicio"][0];
	document.getElementById("inicio").innerHTML=config[0]["Español"]["Inicio"][1];
	document.getElementById("analisis").innerHTML=config[0]["Español"]["Inicio"][2];
	document.getElementById("populares").innerHTML=config[0]["Español"]["Inicio"][3];
	document.getElementById("consolas").innerHTML=config[0]["Español"]["Inicio"][4]+'&nbsp;<span class="	glyphicon glyphicon-menu-down"></span>';
	document.getElementById("contacto").innerHTML=config[0]["Español"]["Inicio"][5];
	document.getElementById("registrar").innerHTML=config[0]["Español"]["Inicio"][6];
	document.getElementById("inicioS").innerHTML=config[0]["Español"]["Inicio"][7];
	document.getElementById("videos").innerHTML=config[0]["Español"]["Inicio"][8];

	document.getElementById("titulon1").innerHTML=datos["Español"]["noticias"][0]["titulo"];
	document.getElementById("titulon2").innerHTML=datos["Español"]["noticias"][1]["titulo"];
	document.getElementById("titulon3").innerHTML=datos["Español"]["noticias"][2]["titulo"];
	document.getElementById("texton1").innerHTML=datos["Español"]["noticias"][0]["resumen"];
	document.getElementById("texton2").innerHTML=datos["Español"]["noticias"][1]["resumen"];
	document.getElementById("texton3").innerHTML=datos["Español"]["noticias"][2]["resumen"];
}