# 使用说明

返回 Javascript 变量类型，用于代替 typeof。

**methods**

isArray, isBoolean, isDate, isFunction, isNaN, isNumber, isInteger, isObject, isRegExp, isUndefined, isString, isNull

**return**

boolean

**example**

`$$.isArray([]) // true`

| example | return |
| ---- | ------ |
| $$.isArray([]) | true |
| $$.isBoolean(!1) | true |
| $$.isBoolean(1) | false |
| $$.isDate(new Date) | true |
| $$.isInteger(1) | true |
| $$.isInteger(1.1) | false |
| $$.isNumber(1.1) | true |
