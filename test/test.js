
require('../lib/com-extend');

console.log(new Date().Format('yyyyMMddhhmmss'));

let obj = {a:1,b:2};
console.log(obj.toArray());//[ 1, 2 ]
let str = obj.string();
console.log(str);//{"a":1,"b":2}
obj.delete('a')
console.log(obj);//{ b: 2 }
obj.clear();
console.log(obj);//{}

obj = str.toJson();
console.log(obj);//{ a: 1, b: 2 }
console.log('aabc'.toArray());//[ 'a', 'a', 'b', 'c' ]

let arr = [ 'a', 'a', 'b', 'c' ];
arr.remove(1);
console.log(arr);//[ 'a', 'b', 'c' ]
arr.clear();
console.log(arr);//[]
