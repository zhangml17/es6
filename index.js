// const { f, f1, check, f2 } = require('./src/defaultParameter') 
// const { f, f1, f2, f3 } = require('./src/changedParameter')
const { Person, Person1, proxy } = require('./src/objectProxy')



// // 默认参数
// // es5
// console.log(f(1)) // 50
// console.log(f(1,2)) // 45
// // es6
// console.log(f1(1))  // 50
// console.log(f1(1,2)) // 45
// // 必选参数
// try{
//     f2() // 报错
// }catch(ex) {
//     console.log(ex.message)  // 打印错误信息
// }


// // 可变参数(rest参数)
// // ES5 ES3 
// console.log(f(1,2,3,6), '---es5 es3') // 12
// // ES6 
// console.log(f1(1,2,3,6), '---es6') // 12


// // 合并数组
// // ES5
// console.log(f2())
// // ES6
// console.log(f3())

// ES3的代理
// var person = new Person()
// console.log(person.get('sex')) // male
// person.set('sex','female')
// console.log(person.get('sex')) // male , 设置未成功

// // ES5代理
// console.log(Person1.sex) // male
// try{
//     Person1.sex = 'female'   
// }catch(ex){
//     console.log(ex.message)
// }
// console.log(Person1.sex) // male, 设置未成功

// ES6 代理
console.log(proxy.sex)  // male
proxy.sex = 'female'
console.log(proxy.sex)  // male, 设置未成功