var list = [];

var storeNum = function(num) {
    list.push(num);
};

//possible validation (num / !num):
//num.isNumber()
//num.isInteger()

function sortList() {
    list.sort(function(a, b) {
        return a - b;
    })
}

sortList();

var returnList = function() {
    console.log(list);
}

module.exports = {

    storeNum : storeNum,
    returnList : returnList

};