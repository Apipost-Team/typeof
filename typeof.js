!function (r) {
    /*
     * https://github.com/Apipost-Team/typeof
     * methods: isArray, isBoolean, isDate, isFunction, isNaN, isNumber, isObject, isRegExp, isUndefined, isString
     * returns: boolean
     * example: $.isArray([]) // true
     */

    'Array Boolean Date Function NaN Number Integer Object RegExp String Undefined Null'.split(' ').forEach(function (type) {
      r['is' + type] = function (v) {
        return v !== v ? type === 'NaN' ? !0 : !1 : v ===null && type==='Null' ? true: v % 1 === 0 && typeof v ==='number' && type==='Integer' ? true:RegExp(type).test(Object.prototype.toString.call(v));
      };
    });
  
    window.typeof = r;
  }([]);
