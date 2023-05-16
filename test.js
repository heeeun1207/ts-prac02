function exampleOne(object) {
    var value = [];
    for (var key in object) {
        value.push(key);
    }
    return value;
}
var test = {
    name: 'injun',
    age: '24',
    job: 'minam',
};
console.log(exampleOne(test));
