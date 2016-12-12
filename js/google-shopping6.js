// 6.) Print all the products with their brand, price, and an image link

var data = require('../products.json');

//makes as an array
// var arrItems = data.items;
// var getProducts = {};
//
//     for (var i=0; i<arrItems.length; i+=1) {
//          getProducts.push(arrItems[i].product.brand), getProducts.push(arrItems[i].product.inventories[0].price), getProducts.push(arrItems[i].product.images);
//        }
//
// console.log(getProducts);

//makes as an object
var arrItems = data.items;
// var objBrand = arrItems[i].product.brand
// var objPrice = arrItems[i].product.inventories[0].price
// var objImage = arrItems[i].product.images
var getProducts = {};

function products(objBrand, objPrice, objImage) {
  this.brand = objBrand;
  this.price = objPrice;
  this.image = objImage;
}

for (var i=0; i<arrItems.length; i+=1) {
  var objBrand = arrItems[i].product.brand
  var objPrice = arrItems[i].product.inventories[0].price
  var objImage = arrItems[i].product.images
  var prodlist = new products(objBrand, objPrice, objImage)
  console.log(prodlist)
}

// console.log(products)
