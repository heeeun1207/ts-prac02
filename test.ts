function exampleOne(object: object) {
  let value: Array<string> = [];
  for (let key in object) {
    value.push(key);
  }
  return value;
}

let test = {
  name: 'injun',
  age: '24',
  job: 'minam',
};

console.log(exampleOne(test));