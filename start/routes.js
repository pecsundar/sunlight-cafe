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
    Route.get('/menus/:storeid?', 'MenuController.index')//.middleware('auth')
    Route.put('/reduce-item-stock/', 'MenuController.reduceItemStock')//.middleware('auth')
    Route.get('/stock-level/:storeid', 'MenuController.stockCheck')//.middleware('auth')
    Route.post('/update-price/', 'MenuController.updatePrice')//.middleware('auth')
    Route.put('/receive-order/', 'MenuController.receiveOrder')//.middleware('auth')
    Route.put('/place-order/', 'MenuController.placeOrder')//.middleware('auth')
    Route.get('/store/:storeid?', 'MenuController.store')
  })
  .prefix('api/v1')