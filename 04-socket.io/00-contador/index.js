'use strict';

const http = require('http').createServer(server);
const fs = require('fs');
const io = require('socket.io')(http);

let conexions = 0;

function server(req, res)
{
	fs.readFile('index.html', (err, data) => {
		if(err)
		{
			res.writeHead(500, {'Content-Type': 'text/html'});
			
			return res.end('<h1>Error interno en el servidor.</h1>');
		}
		else
		{
			res.writeHead(200, {'Content-Type': 'text/html'});
			
			return res.end(data, 'utf-8');
		}
	});
}

http.listen(3000, () => {
	console.log('Servidor corriendo desde http://localhost:3000');
});

io.on('connection', (socket) => {
	socket.emit('hello', {
		message: 'Hola mundo con socket.io'
	});

	socket.on('otro evento', data => console.log(data) );

	conexions ++;

	console.log(`Conexiones activas: ${conexions}`);

	socket.emit('connect users', { numbers : conexions });
	socket.broadcast.emit('connect users', { numbers : conexions });

	socket.on('disconnect', () => {
		conexions --;
		console.log(`[Disconnet] Conexiones activas: ${conexions}`);
		socket.broadcast.emit('connect users', { numbers : conexions });
	});
});