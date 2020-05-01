const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { remetente, destinatario, descricao } = request.body;

        const cadastro_usuario_id = request.headers.authorization;

        const [id] =  await connection('correspondencias').insert({
            cadastro_usuario_id,
            remetente,
            destinatario,
            descricao,
        })

        return response.json({id});
    },

    async index(request, response) {
        //const { page = 1 } = request.query;

        const correspondencias = await connection('correspondencias')
            .join('usuarios', 'correspondencias.cadastro_usuario_id', '=', 'usuarios.id')
            .select('correspondencias.*', 'usuarios.nome as usuario_cadastro');
            //.limit(15)
            //.offset((page - 1) * 15)
            

        return response.json({ correspondencias });
    },

    async single_index(request, response) {
        const { id } = request.params;

        const correspondencia = await connection('correspondencias')
            //.join('usuarios', 'correspondencias.cadastro_usuario_id', '=', 'usuarios.id')
            .where('correspondencias.id', '=', id)
            .select('correspondencias.*');
            //.limit(15)
            //.offset((page - 1) * 15)
            

        return response.json({ correspondencia });
    },

    async delete(request, response) {
        const { id } = request.params;
        const usuario_id = request.headers.authorization;
        const usuarios = await connection('usuarios').where('id', usuario_id).select('id');

        if(usuarios.length == 0) {
            return response.send({error: `Usuário de ID ${usuario_id} não cadastrado.`});
        }

        await connection('correspondencias').where('id', id).delete();

        return response.status(204).send();
    }
}