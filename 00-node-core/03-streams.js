'use strict';

const fs = require('fs');

let readStream = fs.createReadStream('./assets/nombres.txt');
let writeStream = fs.createWriteStream('./assets/nombres_copia.txt');

readStream.pipe(writeStream);

readStream
	.on('data', chunk => {
		console.log(chunk);
		console.log(chunk.toString());
		console.log('He leido: ', chunk.length, 'caracteres');
	})
	.on('end', () => console.log('Terminé de leer el archivo'))
	.on('error', error => console.log('Ocurrio un error: ', error.message));
