'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IngredientsSchema extends Schema {
  up () {
    this.create('ingredients', (table) => {
      table.increments()
      table.integer('menu_id').unsigned()
      table.foreign('menu_id').references('menus.id')
      table.integer('item_id').unsigned()
      table.foreign('item_id').references('items.id')
      table.integer('quantity')
      table.timestamps()
    })
  }

  down () {
    this.drop('ingredients')
  }
}

module.exports = IngredientsSchema
