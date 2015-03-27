var express = require('express');

var app = express();

app.get('/accueil/:nom', function(req,res){
	res.render('accueil.ejs', {nom: req.params.nom});
});

app.get('/compter/:nombre', function(req, res){
	res.render('compter.ejs', {num: req.params.nombre});
});

app.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.send(404, 'Page not found');
})

app.listen(8080);