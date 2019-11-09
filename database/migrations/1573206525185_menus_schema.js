'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MenusSchema extends Schema {
  up () {
    this.create('menus', (table) => {
      table.increments()
      table.string('menu_name').notNullable()
      table.string('price').notNullable()
      table.string('image').notNullable()
      table.boolean('promo').default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('menus')
  }
}

module.exports = MenusSchema
