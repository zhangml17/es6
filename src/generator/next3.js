// next方法的参数
// 第一次想要
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