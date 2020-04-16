const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { nome, senha } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('usuarios').insert({
            id,
            nome,
            senha,
        });
        
        return response.json({id});
    },

    async index(request, response) {
        const usuarios = await connection('usuarios').select('*');

        return response.json({ usuarios });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('usuarios').where('id', id).delete();

        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params;

        const { senha } = request.body;

        await connection('usuarios').where('id', id).update('senha', senha);

        return response.status(204).send();
    }
};