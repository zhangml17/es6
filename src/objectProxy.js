// ES3
var Person = function(){
    let data = {
        name:"zhangsan",
        age:14,
        sex:'male'
    }

    this.get = function(key) {
        return data[key]
    }

    this.set = function(key, val) {
        if(key !== 'sex'){
            data[key] = val
        }
    }
}

// ES5
var Person1 = {
    name:"zhangsan",
    age:14
}
// 限制了sex字段的读写灵活性，无法控制
Object.defineProperty(Person1,'sex',{
    value:"male",
    writable:false
})
// ES6
let Person2 = {
    name:"zhangsan",
    age:14,
    sex:'male'
}

let proxy = new Proxy(Person2,{
    get(target, key){
        return target[key]
    },
    set(target, key, val) {
        if(key!=='sex') {
            target[key] = val
        }
    }
})

module.exports = {
   Person,
   Person1,
   proxy
}

