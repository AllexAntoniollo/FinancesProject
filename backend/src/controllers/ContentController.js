const Finances = require('../models/financesData');

module.exports = {
    async update(request, response){
        const { id } = request.params;
        const { descricao, recebidos, gastos } = request.body;
        
        const finances = await Finances.findOne({ _id : id }); 
        
        if(descricao){
            finances.descricao = descricao;

            await finances.save();
        }

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