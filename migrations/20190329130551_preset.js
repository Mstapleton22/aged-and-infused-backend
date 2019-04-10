
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('preset', table => {
      table.integer('id').primary()
      table.string('name')
      // table.text('image')
      table.boolean('custom')
    }),
    knex.schema.createTable('liquor', table => {
      table.integer('id').primary()
      table.string('name')
    }),
    knex.schema.createTable('ingredient_category', table => {
      table.integer('id').primary()
      table.string('name')
    }),
    knex.schema.createTable('ingredients', table => {
      table.integer('id').primary()
      table.string('name')
      table.string('image')
    }),
    knex.schema.createTable('category_and_ingredient', table => {
      table.integer('id').primary()
      table.integer('ingredient_category_id')
      table.integer('ingredient_id')
    })
  ])
}

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('preset'),
    knex.schema.dropTable('liquor'),
    knex.schema.dropTable('ingredient_category'),
    knex.schema.dropTable('ingredients'),
    knex.schema.dropTable('category_and_ingredient')

  ])
}
