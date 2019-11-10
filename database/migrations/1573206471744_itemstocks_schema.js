'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemstocksSchema extends Schema {
  up () {
    this.create('itemstocks', (table) => {
      table.increments()
      table.integer('item_id').unsigned()
      table.foreign('item_id').references('items.id')
      table.integer('store_id').unsigned()
      table.foreign('store_id').references('stores.id')
      table.integer('qoh')
      table.integer('min')
      table.boolean('ordered').default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('itemstocks')
  }
}

module.exports = ItemstocksSchema
