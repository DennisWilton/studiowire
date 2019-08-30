const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router({mergeParams: true});
const User = require('../../models/user');

const jwt = require('jsonwebtoken');
const {secret} = require('../../config');

router.get('/', async (req, res) => {

    const users = await User.find({}).select('-password');
    res.json(users);
});


router.get('/login', async (req, res) => {
    res.json({message: `Por favor, utilize o POST method.`})
});

router.post('/login', async (req, res) => {
    // Verifica se o usuário existe!
    const credentials = { email: req.body.email };
    const user = await User.findOne(credentials).select('-password');

    
    if(!user){
        res.json({message: "Não existe usuário cadastro com este e-mail"})
    }

    if(user){
        const isPasswordCorrect = user.verifyPassword( req.body.password );
        const token = jwt.sign( {user} , secret );
        res.json(token);
    }
    
})

router.post('/create', async (req, res) => {
    User.create( req.body );
    res.json({message: "Usuário criado com sucesso!"});
})

router.post('/validateToken', async(req, res) => {
    const token = req.body.token;

    if(!token){
        res.json({status: false, message: "Token inexistente"});
    }

    if(token){

        if(token.split(" ")[0] !== "Bearer"){
            res.json({status: false, message: "Token inválido!"});
        }

        let postbearer = token.split(" ")[1];
        try {
            const test = jwt.verify(postbearer, secret);
            res.json({ status: true, message: "Token verificado com sucesso!", user: test.user });
        } catch(err){
                res.json({status: false, message: "Token inválido!", err});
        }
    }

})

module.exports = router;