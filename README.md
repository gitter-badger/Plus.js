# Plus.js
An extension to the default Javascript objects using prototypes. 

##Array Methods
[`Array.append(`*args*`)`](https://github.com/KingShimkus/Plus.js/blob/master/src/Array.js#L58) - appends *args* to the array.
```javascript
var stooges = ["Moe", "Larry", "Curly"];
stooges.append("Joe"); //==> ["Moe", "Larry", "Curly", "Joe"]
```

[`Array.remove(`*args*`)`](https://github.com/KingShimkus/Plus.js/blob/master/src/Array.js#L58) - removes *args* from the array.

```javascript
var stooges = ["Moe", "Larry", "Curly", "Joe"];
stooges.remove("Joe"); //==> ["Moe", "Larry", "Curly"]
```

[`Array.first()`](https://github.com/KingShimkus/Plus.js/blob/master/src/Array.js#L58) - returns the first element of the array.

```javascript
var stooges = ["Moe", "Larry", "Curly"];
stooges.first(); //==> "Moe"
```

[`Array.last()`](https://github.com/KingShimkus/Plus.js/blob/master/src/Array.js#L58) - returns the last element of the array.

```javascript
var stooges = ["Moe", "Larry", "Curly"];
stooges.last(); //==> "Curly"
```
