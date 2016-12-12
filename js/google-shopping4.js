// 4.) Print all "Canon" products in the items (careful with case sensitivity).

var data = require('../products.json');
var arrItems = data.items;
var getProduct = [];

    for (var i=0; i<arrItems.length; i+=1) {
        if (arrItems[i].product.title.includes("Canon") ) {
         getProduct.push(arrItems[i].product.title);
       }
    }

console.log(getProduct);
