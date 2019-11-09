'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
    stores () {
        return this
        .belongsToMany('App/Models/Store')
        .pivotModel('App/Models/Itemstock')
        .withPivot(['qoh', 'min', 'id'])
    }

    menus () {
        return this
        .belongsToMany('App/Models/Menu')
        .pivotModel('App/Models/Ingredient')
        .withPivot(['quantity'])
    }
}

module.exports = Item
