function exampleOne(object) {
    var value = [];
    for (var key in object) {
        value.push(key);
    }
    return value;
}
var test = {
    name: "heen",
    age: "20",
    job: "heenyjob"
};
