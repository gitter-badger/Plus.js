Array.prototype.append = function(){
    var newarray = this;
      for(var j = 0; j < arguments.length; j++){
        newarray.push(arguments[j]);
      }
    return newarray;
};

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

Array.prototype.first = function(){
    return this[0];
};

Array.prototype.last = function(){
  return this[this.length - 1];
};

Array.prototype.sum = function() {
  if (this.length === 0) {
    return 0;
  } else if (this.length === 1) {
    return parseInt(this[0], 10);
  } else {
    return this.reduce(function(x, y) {
      return x + y;
    });
  }
};

Array.prototype.space = function(){
  var newarray = [];
    for(var i = 0; i < this.length; i++){
      newarray.push(this[i] + " ");
    }
  return newarray;
};

Array.prototype.shuffle = function() {
   var i = this.length;
     while (--i) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
     }
   return this;
};

Array.prototype.has = function(value){
  var cake = false;
    for(var i = 0; i < this.length; i++){
      if(this[i] == value){
        cake = true;
      }
    }
  return cake;
};


