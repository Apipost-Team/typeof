# 使用说明

> methods: isArray, isBoolean, isDate, isFunction, isNaN, isNumber, isInteger, isObject, isRegExp, isUndefined, isString, isNull
> returns: boolean
> example: $$.isArray([]) // true

返回 Javascript 变量类型，用于代替 typeof。

| demo | return |
| ---- | ------ |
| $$.isArray([]) | true |
| $$.isBoolean(!1) | true |
| $$.isBoolean(1) | false |
| $$.isDate(new Date) | true |
| $$.isInteger(1) | true |
| $$.isInteger(1.1) | false |
| $$.isNumber(1.1) | true |
