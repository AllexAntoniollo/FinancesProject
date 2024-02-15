const mongoose = require('mongoose');

const financesDataSchema = new mongoose.Schema({
    recebidos: Number,
    gastos: Number,
});

module.exports = mongoose.model('finances', financesDataSchema);