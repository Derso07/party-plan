const mongoose = require('mongoose');
const { UpdatePassword } = require('./UsersController');

const Service = mongoose.model('Service');

module.exports = {
    
    //Method index
    async Index(req, res){
        const services = await Service.find();
        return res.json(services);
    },


    //Method Details
    async Detais(req, res){
        const service = await Service.findById(req.params.id);

        if(!service)
            return res.status(404).json({error: 'service not found'});


        return res.json(service);
    },

    //Method Create
    async Create(req, res){
        const service = await Service.create(req.body);
        return res.json(service);
    },

    async Update(req, res){
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(service);
    },

    //Method Delete
    async delete(req,res){
        const service = await Service.findOneAndDelete(req.params.id);
        return res.json({msg:'Excluido com sucesso'});
    }
}