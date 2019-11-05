// 示例
// 每次调用遍历器的next方法，就会返回一个有着value和done属性的对象
function* welcome() {
    yield "hello"
    yield "generator"
    return "ending"
}

const w = welcome()
w.next()  // { value: 'hello', done: false }
w.next()  // { value: 'generator', done: false }
w.next()  // { value: 'ending', done: true }