// 3.) Print the title of all items with more than one image link.
var data = require('../products.json');
var arrItems = data.items;
var getTitle = [];

    for (var i=0; i<arrItems.length; i+=1) {
        if (arrItems[i].product.images.length > 1 ) {
         getTitle.push(arrItems[i].product.title);
       }
    }

console.log(getTitle);
