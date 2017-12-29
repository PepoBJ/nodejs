'use strict';

const express = require('express');
const app = express();

app
	.get('/', (req, res) => {
		res.end('<h1>Hola desde express</h1>');
	})
	.get('/user/:id-:name-:age', (req, res) => {
		res.end(`
			<h1>
				${req.params.name}, bienvenid@ a Express :) tu id es <b>${req.params.id}</b> y tienes ${req.params.age} a&ntilde;os
			</h1>
		`);
	})
	.get('/search', (req, res)=>{
		res.end(`
			<h1>
				Bienvenido a Express, los resultados de tu b&uacute;squeda son: <mark>${req.query.s}</mark>
			</h1>
		`);
	})
	.listen(3000, () => console.log('Iniciando express en el puerto 3000'));