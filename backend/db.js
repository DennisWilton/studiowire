const credentials = {
	user: 'admin',
	password: "admin123",
}

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${credentials.user}:${credentials.password}@ds133621.mlab.com:33621/studioswire`, {useNewUrlParser: true});

module.exports = mongoose;