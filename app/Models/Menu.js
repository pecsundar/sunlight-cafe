'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Menu extends Model {
    items () {
        return this
        .belongsToMany('App/Models/Item')
        .pivotModel('App/Models/Ingredient')
        .withPivot(['quantity'])
    }
}

module.exports = Menu
