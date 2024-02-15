const Finances = require('../models/financesData');

module.exports = {
    async update(request, response){
        const { id } = request.params;
        const { recebidos, gastos } = request.body;
        
        const finances = await Finances.findOne({ _id : id }); 

        if(recebidos){
            finances.recebidos = recebidos;

            await finances.save();
        }
        if(gastos){
            finances.gastos = gastos;

            await finances.save();
        }

        return response.json(finances);
    }
}