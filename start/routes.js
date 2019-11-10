'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route
  .group(() => {
    // Auth routes
    Route.post('/register', 'AuthController.register')
    Route.post('/login', 'AuthController.login')

    // Roues for the api's
    Route.get('/menus/:storeid?', 'MenuController.index')
    Route.put('/reduce-item-stock/', 'MenuController.reduceItemStock')
    Route.get('/stock-level/:storeid', 'MenuController.stockCheck')
    Route.post('/update-price/', 'MenuController.updatePrice')
    Route.put('/receive-order/', 'MenuController.receiveOrder')
    Route.put('/place-order/', 'MenuController.placeOrder')
    Route.get('/store/:storeid?', 'MenuController.store')
  })
  .prefix('api/v1')