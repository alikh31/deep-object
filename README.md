# deep-object
Adding deep object mapping on top of lodash

## installing

`npm install --save deep-object`

## use

``` javascript
var deepObject = require('deep-object');

var object = {
  obj1: {
    "dot.dot.dot":[
      {pro: "111"},
      {pro: "222"},
    ]
  },
  obj2: {
    foo: 'bar'
  },
}

deepObject.deepMapValues(object , function(value, path){
  console.log(path, "->" ,value);
});

// output >>>>
// [ '' ] '->' { obj1: { 'dot.dot.dot': [ [Object], [Object] ] }, obj2: { foo: 'bar' } }
// [ 'obj1' ] '->' { 'dot.dot.dot': [ { pro: '111' }, { pro: '222' } ] }
// [ 'obj1', 'dot.dot.dot' ] '->' [ { pro: '111' }, { pro: '222' } ]
// [ 'obj1', 'dot.dot.dot', '0' ] '->' { pro: '111' }
// [ 'obj1', 'dot.dot.dot', '0', 'pro' ] '->' '111'
// [ 'obj1', 'dot.dot.dot', '1' ] '->' { pro: '222' }
// [ 'obj1', 'dot.dot.dot', '1', 'pro' ] '->' '222'
// [ 'obj2' ] '->' { foo: 'bar' }
// [ 'obj2', 'foo' ] '->' 'bar'
```
