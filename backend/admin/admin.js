const express	= require('express');
const router = express.Router();
const db = require('../db');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {secret} = require('../config');

const auth = require('./auth/auth');

const notAuthorized = (req, res) => {
	res.json({erro: `Você não está autorizado a acessar este conteúdo!`});
}

/** Middleware de autorização. */
router.use((req, res, next) => {
	console.log(`Alguém está acessando uma rota protegida.`);
	console.log(`[${req.method}] - "${req.url}"`);

	/* Procura token */
	const token = req.body.token;
	if(!token){
		notAuthorized(req, res);
	}
	
	if(token){
		/** Verifica a estrutura do token */
		const parts = token.split();
		if(parts[0] !== "Bearer"){
			notAuthorized(req, res);
		}

		const user = jwt.verify(parts[1], secret);
		if(!user){
			notAuthorized(req, res);
		} else {
			next();
		}
		
	}
})

router.get('/', async (req, res) => {
	res.json({
		message: `Mensagem de Teste from Admin`
	});
});

router.use('/auth', auth);




module.exports = router;