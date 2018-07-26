# fab



Floating Action Button Library for Javascript whit JQuery 

Libreria creada para generar botones flotantes, con acciones determinadas por el programador, de una manera sencilla.

Requiere:
<ul>
 <li>JQuery, proximamente solo Javascript Vanilla.</li>
</ul>

Su funcionamiento es el siguiente:

Para poder usar la libreria, se necesita llamar a una funcion de la siguiente manera:

var nombre_variable = new Fab(json)

Con esta funcion previamente llamada, necesita un parametro para poder funcionar, el cual es un json con datos requeridos, a continuacion se muestran:

<ul>
	<li>selector: selector utilizado en HTML</li>
	<li>button: {<br>
		&nbsp; &nbsp; style: clase que se le quiere poner al boton principal<br>
		&nbsp; &nbsp; html: datos que se quieran insertar en la etiqueta <button><br>
		}<br>
	</li>
	<li>icon: {
		&nbsp; &nbsp; style: clase que se le quiere poner al icono del boton principal
		&nbsp; &nbsp; html: datos que se quieran insertar en la etiqueta <i>
		}
	</li>
	<li>position: top-left || top-right || bottom-left || bottom-right</li>
	<li>direction: horizontal || vertical</li>
	<li>selector: selector utilizado en HTML</li>
	<li>selector: selector utilizado en HTML</li>
	<li>selector: selector utilizado en HTML</li>
	

	buttons:[<br>
		{<br>
			button: {<br>
				style: "clase que se le va a dar a los botones con acciones",<br>
				html: "datos que se quieran insertar en la etiqueta <button>"<br>
			},<br>
			icon:{<br>
				style: "clase que se le va a dar a los iconos que contienen botones con acciones",<br>
				html: "datos que se quieran insertar en la etiqueta <i>"<br>
			},<br>
			onClick: function(){<br>
				funcion que se va a ejecutar al momento de darle click al boton	<br>
			}<br>
		},<br>
	],<br>
	onOpen: function(){<br>
		funcion que se va a ejecutar al momento de que se abra el menu<br>
	},<br>
	onClose: function(){<br>
		funcion que se va a ejecutar al momento de que se cierre el menu<br>
	}<br>
});
</ul>
