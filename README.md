# Plus.js

[![Join the chat at https://gitter.im/KingShimkus/Plus.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/KingShimkus/Plus.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
An extension to the default Javascript objects using prototypes. 

##Array Methods
[`Array.append(`*args*`)`](https://github.com/KingShimkus/Plus.js/blob/master/src/array.js#L1) - appends *args* to the array.
```javascript
var stooges = ["Moe", "Larry", "Curly"];
stooges.append("Joe"); //==> ["Moe", "Larry", "Curly", "Joe"]
```

[`Array.remove(`*args*`)`](https://github.com/KingShimkus/Plus.js/blob/master/src/array.js#L9) - removes *args* from the array.

```javascript
var stooges = ["Moe", "Larry", "Curly", "Joe"];
stooges.remove("Joe"); //==> ["Moe", "Larry", "Curly"]
```

[`Array.first()`](https://github.com/KingShimkus/Plus.js/blob/master/src/array.js#L208) - returns the first element of the array.

```javascript
var stooges = ["Moe", "Larry", "Curly"];
stooges.first(); //==> "Moe"
```

[`Array.last()`](https://github.com/KingShimkus/Plus.js/blob/master/src/array.js#L24) - returns the last element of the array.

```javascript
var stooges = ["Moe", "Larry", "Curly"];
stooges.last(); //==> "Curly"
```
##String Methods
[`String.format(`*args*`)`](https://github.com/KingShimkus/Plus.js/blob/master/src/string.js#L5) - inserts the arguments into the curly brackets of the string.

```javascript
var saying = "To {0} and {1}.";
saying.format("infinity", "beyond"); //==> To infinity and beyond.
```
