//importation de modules
var http = require('http');
var url = require("url");
var querystring = require("querystring");
var EventEmitter = require('events').EventEmitter;
var myModule = require('./mymodule');

//événement
var jeu = new EventEmitter();
jeu.on('gameover', function(message,score){console.log(message + " score : " + score)});
jeu.emit('gameover', 'T\'as perdu looser !', 666);

var server = http.createServer(function(req, res){
	myModule.direBonjour();

	var pageName = url.parse(req.url).pathname
	//découpe les paramétre
	var params = querystring.parse(url.parse(req.url).query);
	console.log(pageName);
	console.log(params);
	//on écrit le code 200 dans le header "tout va bien"
	res.writeHead(200, {"Content-type":"text/html"});
	//renvoie un text brut (mais peu être du html)
	if(params['prenom']=='florent')
	{
		res.end("<p>Salut Flo</p>");
	}else{
		res.end("<p>Text au format <strong>HTML</strong></p>");
	}
});

//on écoute sur un événement
server.on("close", function(){console.log("Au revoir")});

server.listen(8080);
//server.close();