const removeFromArray = function (arr, ...removeValue) {
    return arr.filter(item => !removeValue.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
