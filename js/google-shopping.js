// 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

var data = require('../products.json');

var arrItems = data.items;
var count = 0;

for (var i=0; i<arrItems.length; i+=1) {
  if (arrItems[i].kind === 'shopping#product') {
     count = count + 1;
  }
}

console.log(count);
