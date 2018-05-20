//DECLARACION DE OBJETOS Y VARIABLES

	var json = 
	{
		"autos":
		[
		{
					"modelo":"Mustang",
						"imagen":"Ford-Mustang_GT-2018-1024-02.jpg",
						"oficial":"Ford-Mustang_GT-2018-1024-02",
						"fabricante":"Ford Motor Company",
						"precio":25680,
						"color":"Amarillo",
						"motor":"460 HP",
						"carroceria":"Todo Terreno",
						
		},
		{
					"modelo":"Touareg",
						"imagen":"Volkswagen-Touareg-2015-1024-06.jpg",
						"oficial":"Volkswagen-Touareg-2015-1024-06",
						"fabricante":"Volkswagen",
						"precio":60980,
						"color":"Azul",
						"motor":"340 HP",
						"carroceria":"Todo Terreno",
						
		}
		,
		{
			 "modelo":"Corvette",
						"imagen":"Chevrolet-Corvette_Z06-2015-1024-02.jpg",
						"oficial":"Chevrolet-Corvette_Z06-2015-1024-02",
						"fabricante":"Chevrolet",
						"precio":78995,
						"color":"Azul",
						"motor":"650 hp",
						"carroceria":"Descapotable dos puertas",
						
		},
		{
		"modelo":"Supra",
						"imagen":"Toyota-Supra-1996-1024-04.jpg",
						"oficial":"Toyota-Supra-1996-1024-04",
						"fabricante":"Toyota",
						"precio":37000,
						"color":"gris",
						"motor":"330 HP",
						"carroceria":"Coupé tres puertas",
						
		},
		{
		"modelo":"Ibiza",
						"imagen":"Seat-Ibiza-2016-1024-0b.jpg",
						"oficial":"Seat-Ibiza-2016-1024-0b",
						"fabricante":"SEAT",
						"precio":25680,
						"color":"plomo",
						"motor":"4 motores",
						"carroceria":"Familiar cinco puertas",
						
		},
		
		{
					"modelo":"F-150",
						"imagen":"Ford-f150-2015.jpg",
						"oficial":"Ford-f150-2015",
						"fabricante":"Ford Motor Company",
						"precio":626900,
						"color":"Negro",
						"motor":"250 HP",
						"carroceria":"Camioneta pickup",
						
		},
		{
					"modelo":"Volkswagen Beetle",
						"imagen":"Volkswagen_New_Beetle.jpg",
						"oficial":"Volkswagen Beetle",
						"fabricante":"Volkswagen",
						"precio":10900,
						"color":"Blanco",
						"motor":"105 HP",
						"carroceria":" 	Descapotable dos puertas",
						
		}
		]
	}
	
//DECLARACION DE FUNCIONES


function mostrarInfoautos()
{
	
	var infoauto = "";
	for(var n=0; n<json["autos"].length;n++)
	{
		infoauto+= "<article class='autos'>";
		infoauto+="<div>";
			infoauto+="<h1>"+json["autos"][n].modelo+"</h1>";
			infoauto+="<img src='activos/"+json["autos"][n].imagen+"'/>";
		infoauto+="</div>";
		infoauto+="<div>";
			infoauto+="<p>Modelo:"+json["autos"][n].oficial+"</p>";
			infoauto+="<p>Fabricante:"+json["autos"][n].fabricante+"</p>";
				infoauto+="<p>Precio:"+json["autos"][n].precio+"</p>";
				infoauto+="<p>Color:"+json["autos"][n].color+"</p>";
				infoauto+="<p>Motor:"+json["autos"][n].motor+"</p>";
				infoauto+="<p>Carroceria:"+json["autos"][n].carroceria+"</p>";
				
			
			infoauto+="</div>";
		
	infoauto+="</article>";
	}
		document.getElementById("autos").innerHTML = infoauto;
}


//ASIGNACION DE EVENTOS

window.addEventListener("load",mostrarInfoautos); 