// yield表达式
function* add() {
    yield 123 + 456
}

// yield后面的表达式不会立即求值，只会在调用next方法时才会执行
add() // {}
add().next()  // { value: 579, done: false }

// 注意：yield表达式只能用在generator函数里，用在其他地方都会报错
function test() {
    yield 'test'   // SyntaxError: Unexpected string
    return "ending"
}

console.log(test())