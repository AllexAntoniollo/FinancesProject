const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://user:user@cluster0.4o3x0wz.mongodb.net/?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;