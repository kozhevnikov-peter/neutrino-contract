function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function convertDataStateToObject(array) {
    let newObject = {}
    for(var index in array) {
        newObject[array[index].key] = array[index].value;
    }
    return newObject;
}
exports.getRandomNumber = getRandomNumber;
exports.convertDataStateToObject = convertDataStateToObject;