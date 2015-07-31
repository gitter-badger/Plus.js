String.prototype.isEmpty = function() {
  return this.length === 0;
};

String.prototype.nonEmpty = function() {
  return this.length !== 0;
};

String.prototype.head = function() {
  if (this.isEmpty()) {
    throw "NoSuchElement";
  }
  return this.charAt(0);
};

String.prototype.takeRight = function(length) {
  var start;
  start = (this.length - length < 0 ? 0 : this.length - length);
  return this.substring(start, this.length);
};

String.prototype.contains = function(str) {
  return this.indexOf(str) !== -1;
};


String.prototype.startsWith = function(str) {
  return this.take(str.length) === str;
};

String.prototype.endsWith = function(str) {
  return this.takeRight(str.length) === str;
};

String.prototype.format = function(arg) {
  var argLen, args, repFn, str;
  repFn = void 0;
  str = this;
  if (typeof arg === "object") {
    repFn = function(a, b) {
      if (arg[b]) {
        return arg[b];
      } else {
        return a;
      }
    };
  } else {
    args = arguments;
    argLen = args.length - 1;
    str = str.replace(/(?!\{)*\{\{(\w+)\}\}/g, function(a) {
      var ret;
      args[++argLen] = a.replace("{{", "{").replace("}}", "}");
      ret = "{" + argLen + "}";
      return ret;
    });
    repFn = function(a, b) {
      return args[parseInt(b, 10)];
    };
  }
  return str.replace(/(?!\{)*\{(\w+)\}/g, repFn);
};
