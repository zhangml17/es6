
// 默认参数
// es5
function f(x, y, z) {
    y = y || 7
    z = z || 42

    return x + y + z
}
// es6
function f1(x, y=7, z=42) {
    return x + y + z
}
// 对于必选参数x 的校验
function  check() {
    throw new Error('x can\'t be empty')
}

function f2(x=check(), y=7, z=42) {
    return x + y + z
}

module.exports = {
    f,
    f1,
    check,
    f2
}