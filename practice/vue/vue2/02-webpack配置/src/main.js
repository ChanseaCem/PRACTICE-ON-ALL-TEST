// es6导入用法
import {userinEs6,sumEs6} from "./useES6.js"
console.log(userinEs6,sumEs6(1,23))

// common导入用法
const {sumofCommon,number1} = require("./useCommon.js")
sumofCommon(123)
console.log(number1)