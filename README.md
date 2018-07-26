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

<code>
json = {<br>
	selector: "selector utilizado en HTML",<br>
	button: {<br>
		style: "clase que se le quiere poner al boton principal",<br>
 		html: "datos que se quieran insertar en la etiqueta <button>"<br>
 	},<br>
	icon:{<br>
		style: "clase que se le quiere poner al icono del boton principal",<br>
		html: "datos que se quieran insertar en la etiqueta <i>"<br>
	},<br>
	position: "top-left || top-right || bottom-left || bottom-right",<br>
	direction: "horizontal || vertical",<br>
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
</code>

