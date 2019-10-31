// const test = require('./src/test')
const { f, f1, check, f2 } = require('./src/defaultParameter') 

// test()

// es5
console.log(f(1)) // 50
console.log(f(1,2)) // 45
// es6
console.log(f1(1))  // 50
console.log(f1(1,2)) // 45
// 必选参数
try{
    console.log(f2()) // 报错，打印错误信息
}catch(ex) {
    console.log(ex.message)
}

