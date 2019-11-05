// next方法的参数
// 在 Generator 函数外面再包一层，就可以在第一次调用next方法时，就能够输入值，
function wrapper(generatorFunction) {
    return function(...args){
        let generatorObject = generatorFunction(...args)
        generatorObject.next()
        return generatorObject
    }
}

const wrapped = wrapper(function* (){
    console.log(`first input ${yield}`)
    return 'ending'
})

wrapped().next('hello')