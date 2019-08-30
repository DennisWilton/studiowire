const express	= require('express');
const session	= require('express-session');
const router = express.Router();
const db = require('../db');
const cors = require('cors');

const auth = require('./auth/auth');

router.use(cors());

router.get('/', async (req, res) => {
	res.json({
		message: `Mensagem de Teste from Admin`
	});
});

router.use('/auth', auth);




module.exports = router;