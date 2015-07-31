String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
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
