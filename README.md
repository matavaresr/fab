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
	<li>icon: {<br>
		&nbsp; &nbsp; style: clase que se le quiere poner al icono del boton principal<br>
		&nbsp; &nbsp; html: datos que se quieran insertar en la etiqueta <i><br>
		}<br>
	</li>
	<li>position: top-left || top-right || bottom-left || bottom-right</li>
	<li>direction: horizontal || vertical</li>
	<li>buttons:[<br>
		&nbsp; &nbsp;{<br>
				&nbsp; &nbsp;button: {<br>
					&nbsp; &nbsp;style: clase que se le va a dar a los botones con acciones<br>
					&nbsp; &nbsp;html: datos que se quieran insertar en la etiqueta <button><br>
				&nbsp; &nbsp;}<br>
				&nbsp; &nbsp;icon:{<br>
					&nbsp; &nbsp;style: clase que se le va a dar a los iconos que contienen botones con acciones<br>
					&nbsp; &nbsp;html: "datos que se quieran insertar en la etiqueta <i><br>
				&nbsp; &nbsp;}<br>
				&nbsp; &nbsp;onClick: function(){<br>
					&nbsp; &nbsp;funcion que se va a ejecutar al momento de darle click al boton	<br>
				&nbsp; &nbsp;}<br>
			&nbsp; &nbsp;}<br>
		]<br>
	</li>
	<li>selector: selector utilizado en HTML</li>
	<li>selector: selector utilizado en HTML</li>
	


	onOpen: function(){<br>
		funcion que se va a ejecutar al momento de que se abra el menu<br>
	},<br>
	onClose: function(){<br>
		funcion que se va a ejecutar al momento de que se cierre el menu<br>
	}<br>
});
</ul>
