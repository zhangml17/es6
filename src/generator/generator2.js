// generator与Iterator接口的关系
// 任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象
// 由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。

// Generator 函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了 Iterator 接口，可以被...运算符遍历了
var obj = {};
obj[Symbol.iterator] = function* () {
    yield "hello"
    yield "generator"
    return "ending"
};  // 注意： 这里的分号不能省略，若是省略的话，下方[...obj]会提示语法错误

[...obj]  // [ 'hello', 'generator' ]


// generator函数执行后，返回一个遍历器对象，该对象本身也有Symbol.iterator属性，执行后返回自身
function* gen() {
    yield 'aaa'
}

const g = gen()
g[Symbol.iterator]() = g