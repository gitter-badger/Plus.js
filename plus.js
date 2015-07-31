Array.prototype.append = function() {
    for (var t = this, r = 0; r < arguments.length; r++) t.push(arguments[r]);
    return t
}, Array.prototype.remove = function() {
    for (var t, r, n = arguments, e = n.length; e && this.length;)
        for (t = n[--e]; - 1 !== (r = this.indexOf(t));) this.splice(r, 1);
    return this
}, Array.prototype.first = function() {
    return this[0]
}, Array.prototype.last = function() {
    return this[this.length - 1]
}, Array.prototype.sum = function() {
    return 0 === this.length ? 0 : 1 === this.length ? parseInt(this[0], 10) : this.reduce(function(t, r) {
        return t + r
    })
}, Array.prototype.space = function() {
    for (var t = [], r = 0; r < this.length; r++) t.push(this[r] + " ");
    return t
}, Array.prototype.shuffle = function() {
    for (var t = this.length; --t;) {
        var r = Math.floor(Math.random() * (t + 1)),
            n = this[t];
        this[t] = this[r], this[r] = n
    }
    return this
}, Array.prototype.has = function(t) {
    for (var r = !1, n = 0; n < this.length; n++) this[n] == t && (r = !0);
    return r
}, String.prototype.isEmpty = function() {
    return 0 === this.length || !this.trim()
}, String.prototype.format = function(t) {
    var r, n, e, o;
    return e = void 0, o = this, "object" == typeof t ? e = function(r, n) {
        return t[n] ? t[n] : r
    } : (n = arguments, r = n.length - 1, o = o.replace(/(?!\{)*\{\{(\w+)\}\}/g, function(t) {
        var e;
        return n[++r] = t.replace("{{", "{").replace("}}", "}"), e = "{" + r + "}"
    }), e = function(t, r) {
        return n[parseInt(r, 10)]
    }), o.replace(/(?!\{)*\{(\w+)\}/g, e)
};
