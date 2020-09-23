class Person {
    get(){
        return this.name
    }
}

class GrandF {
    getSex() {
        this.say()
        return this.sex
    }
    
}
class Son extends Person {
    name = 'greate'
}

class Wen extends GrandF {
    sex = 'lll'
    say() {
        console.log('object')
    }
}

var wen = new Wen()
console.log(wen.getSex())