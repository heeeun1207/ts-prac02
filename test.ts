function exampleOne(object : object){
  let value : Array<string> = [];
  for (let key in object){
    value.push(key);
  }
  return value;
}
let test = {
  name : "heen",
  age : "20",
  job : "heenyjob"
}
