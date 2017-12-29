'use strict';

const express = require('express');
const app = express();

app
	.get('/', (req, res) => {
		//res.end('<h1>Hola desde express</h1>');
		res.send('<h1>Hola desde express</h1>');
	})
	.get('/pepobj', (req, res) => {
		res.redirect(301, 'https://pepobj.github.io/');
	})
	.get('/json', (req, res)=>{
		res.json({
			name : "Robert BJ",
			apellido : "Huaman Caceres",
			alias : "Pepo BJ"
		});
	})
	.get('/render', (req, res) => {
		// para hacer uso de render hay que configurar el tipo de views que desplegará express 
		res.render(`${__dirname}/index.html`);
	})
	.listen(3000, () => console.log('Iniciando express en el puerto 3000'));