
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('value').notNullable();

      table.string('ong_id', 2).notNullable();
      table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('increments')
};
