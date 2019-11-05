// yield 表达式本身没有返回值(即总是返回undefined)
// next方法可以带一个参数，该参数即为上一个"yield表达式的值"

function* gen() {
    var val = 0
    var res = yield val + 1
    var fin = yield res + 2
    yield fin + 3
}

var g = gen()

g.next()   // 1
g.next(2)  // 4
g.next(3)  // 6