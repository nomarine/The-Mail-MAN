exports.up = function(knex) {
    return knex.schema.createTable('correspondencias', function (table) {
        table.increments();
        table.string('descricao');
        table.string('remetente').notNullable();
        table.string('destinatario').notNullable();
        table.timestamp('datahora_cadastro').defaultTo(knex.fn.now());
        table.timestamp('datahora_entrega').defaultTo(null);

        table.string('cadastro_usuario_id').notNullable();
        table.string('entrega_usuario_id');

        table.foreign('cadastro_usuario_id').references('id').inTable('usuarios');
        table.foreign('entrega_usuario_id').references('id').inTable('usuarios');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('correspondencias');
};
