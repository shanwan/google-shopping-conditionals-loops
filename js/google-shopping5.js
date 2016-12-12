// 5.) Print all items that have an author name of "eBay" and are brand "Canon".

var data = require('../products.json');
var arrItems = data.items;
var getItems = [];

    for (var i=0; i<arrItems.length; i+=1) {
        if ((arrItems[i].product.brand === "Canon") && (arrItems[i].product.author.name.includes("eBay"))) {
         getItems.push(arrItems[i]);
       }
    }

console.log(getItems);
// console.log(arrItems[0]);
