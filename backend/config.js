let port = 8080;
const SECRET = 'shhhecret';

module.exports = {
	port,
	secret: SECRET,
	welcomeMessage: _ => `>> O servidor está rodando sob a PORTA ${port}.`,
}