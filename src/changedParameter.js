// ES5 ES3 的可变参数
function f() {
    var args = Array.prototype.slice.call(arguments) 
    var sum = 0
    args.forEach(item=>{
        sum += item * 1
    })
    return sum
}

// ES6 的可变参数
function f1(...args) {
    var sum = 0
    args.forEach(item=>{
        sum += item * 1
    })
    return sum
}

// 合并数组
// ES5
function f2() {
    let arr1 = ['A','V','G']
    let arr2 = ['new','arr']
    let res = arr2.concat(arr1)
    return res
}

// ES6
function f3() {
    let arr1 = ['A','V','G']
    let res = ['new','arr', ...arr1] 
    return res
}

module.exports = {
    f,
    f1,
    f2,
    f3
}