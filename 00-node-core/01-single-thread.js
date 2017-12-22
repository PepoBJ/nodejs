'use strict';

function singleThread () {
	process.argv[2] = 'Estamos aprendiendo node.js';
	process.argv[3] = 19;
	process.argv[4] = null;
	process.argv[5] = true;

	console.log('______________________________________________');
	console.log('		EL PROCESO DE NODE JS 		');
	console.log('Id del proceso .......... ' + process.pid);
	console.log('Titulo .................. ' + process.title);
	console.log('Directorio de Node ...... ' + process.execPath);
	console.log('Directorio actual ....... ' + process.cwd());
	console.log('Version de Node ......... ' + process.version);
	console.log('Versiones Dependencias .. ' + process.versions);
	console.log('Plataforma (S.O.) ....... ' + process.platform);
	console.log('Arquitectura (S.O.) ..... ' + process.arch);
	console.log('Tiempo activo de Node ... ' + process.uptime());
	console.log('Argumentos del proceso .. ' + process.argv);
	console.log('______________________________________________');

	let key = 0;

	for(key in process.argv) {
		console.log(process.argv[key]);
	}
}

singleThread();