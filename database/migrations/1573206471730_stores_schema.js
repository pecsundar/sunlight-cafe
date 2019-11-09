'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoresSchema extends Schema {
  up () {
    this.create('stores', (table) => {
      table.increments()
      table.string('store_code').notNullable()
      table.string('store_name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('stores')
  }
}

module.exports = StoresSchema
