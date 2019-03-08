var sorter = require('./sorting-functions.js');

// sorter.storeNum(2);
// sorter.storeNum(5);
// sorter.storeNum(6);
// sorter.storeNum(9);
// sorter.storeNum(10);

var varray = [6, 4, 5, 3, 1, 11];

varray.forEach(sorter.storeNum);

sorter.returnList();