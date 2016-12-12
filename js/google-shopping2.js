// 2.) Print the title of all items with a backorder availability in inventories.

var data = require('../products.json');

var arrItems = data.items;
var getTitle = [];

    for (var i=0; i<arrItems.length; i+=1) {
        if (arrItems[i].product.inventories[0].availability === "backorder") {
         getTitle.push(arrItems[i].product.title);
       }
    }

console.log(getTitle);
