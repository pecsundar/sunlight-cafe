'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')
const Ingredient = use('App/Models/Ingredient')
const Item = use('App/Models/Item')
const Menu = use('App/Models/Menu')
const Store = use('App/Models/Store')
const ItemStocks= use('App/Models/Itemstock');

class DatabaseSeeder {
  async run () {
    // const users = [
    //   {username: 'admin', email: 'admin@sunlight.com', password: 'password'},
    // ];
    const testUser = new User()
    testUser.username = 'admin'
    testUser.email = 'admin@sunlight.com'
    testUser.password = 'password'
    await testUser.save()

    //Items
    const items = [
      {name: 'Cheese', uom: 'Piece'}, 
      {name: 'Chicken Patty', uom: 'Piece', auto_order: true}, 
      {name: 'Beef Patty', uom: 'Piece', auto_order: true}, 
      {name: 'Fish Fillet', uom: 'Piece', auto_order: true}, 
      {name: 'Bun - Top', uom: 'Piece'}, 
      {name: 'Bun - Bottom', uom: 'Piece'}, 
      {name: 'Bun - Middle', uom: 'Piece'}, 
      {name: 'Onion - Chopped', uom: 'grm', auto_order: true}, 
      {name: 'Lettuce - Chopped', uom: 'grm', auto_order: true}, 
      {name: 'Tomato sauce', uom: 'ml'}, 
      {name: 'Burger sauce', uom: 'ml'}, 
      {name: 'Truffle mayo', uom: 'ml'}, 
      {name: 'Mustard sauce', uom: 'ml'}, 
      {name: 'Pickles', uom: 'Piece'},
      {name: 'Tomato Sliced', uom: 'Piece'},
    ];
    await Item.createMany(items)

    //Stores
    const stores = [
      {store_code: 'PJ', store_name: 'Petaling Jaya'},
      {store_code: 'AM', store_name: 'Ampang'},
      {store_code: 'SJ', store_name: 'Subang Jaya'},
      {store_code: 'KL', store_name: 'Kuala Lumpur'},
      {store_code: 'CH', store_name: 'Cheras'}
      ];
    await Store.createMany(stores)

    //Menus
    const menus = [
      {price: '10.40', menu_name: 'Big Mac', image: 'https://www.mcdelivery.com.my/my/static/1573098965061/assets/60/products/1004.png'},
      {price: '5.50', menu_name: 'McChicken', image: 'https://www.mcdelivery.com.my/my/static/1573098965061/assets/60/products/1028.png'},
      {price: '8.99', menu_name: 'Filet-O-Fish', image: 'https://www.mcdelivery.com.my/my/static/1573098965061/assets/60/products/1002.png'},
      ];
    await Menu.createMany(menus);

    //Ingredient
    const ingredients = [
      {menu_id: '1', item_id: '5', quantity:'1'},
      {menu_id: '1', item_id: '6', quantity:'1'},
      {menu_id: '1', item_id: '7', quantity:'1'},
      {menu_id: '1', item_id: '3', quantity:'2'},
      {menu_id: '1', item_id: '1', quantity:'1'},
      {menu_id: '1', item_id: '14', quantity:'3'},
      {menu_id: '1', item_id: '9', quantity:'50'},
      {menu_id: '1', item_id: '8', quantity:'25'},
      {menu_id: '1', item_id: '11', quantity:'5'},

      {menu_id: '2', item_id: '5', quantity:'1'},
      {menu_id: '2', item_id: '6', quantity:'1'},
      {menu_id: '2', item_id: '2', quantity:'2'},
      {menu_id: '2', item_id: '1', quantity:'1'},
      {menu_id: '2', item_id: '12', quantity:'5'},
      {menu_id: '2', item_id: '9', quantity:'50'},
      {menu_id: '2', item_id: '8', quantity:'25'},

      {menu_id: '3', item_id: '5', quantity:'1'},
      {menu_id: '3', item_id: '6', quantity:'1'},
      {menu_id: '3', item_id: '4', quantity:'2'},
      {menu_id: '3', item_id: '1', quantity:'1'},
      {menu_id: '3', item_id: '12', quantity:'5'},
      {menu_id: '3', item_id: '8', quantity:'15'},

      ];
    await Ingredient.createMany(ingredients);

    //Item Stock
    let itemStock = [];
    for (let i = 1; i <= 15; i++) {
      for (let j = 1; j <= 5; j++) {
        itemStock.push ({item_id: i, store_id: j, qoh: 1000, min:50});
      }  
    }
    await ItemStocks.createMany(itemStock)

  }
}

module.exports = DatabaseSeeder
