const { AsyncParallelHook } = require('tapable')

const asyncParallelHook = new AsyncParallelHook(['name'])

// console.time('asyncParallelHook_tap')
// asyncParallelHook.tap('1', (name) => {
//     console.log('1', name)
// })

// asyncParallelHook.tap('2', (name) => {
//     console.log('2', name)
// })

// asyncParallelHook.tap('3', (name) => {
//     console.log('3', name)
// })

// asyncParallelHook.tap('4', (name) => {
//     console.log('4', name)
// })

// asyncParallelHook.callAsync('God', error => {
//     console.timeEnd('asyncParallelHook_tap')
// })




// console.time('asyncParallelHook_tapAsync')
// asyncParallelHook.tapAsync('1', (name, callback) => {

//     setTimeout(() => {
//         console.log('1', name)
//         callback()
//     }, 1000)
// })

// asyncParallelHook.tapAsync('2', (name, callback ) => {

//     setTimeout(() => {
//         console.log('2', name)
//         callback()
//     }, 2000)
// })

// asyncParallelHook.tapAsync('3', (name,  callback) => {

//     setTimeout(() => {
//         console.log('3', name)
//         callback()
//     }, 3000)
// })

// asyncParallelHook.tapAsync('4', (name, callback) => {
//     setTimeout(() => {
//         console.log('4', name)
//         callback()
//     }, 4000)
// })

// asyncParallelHook.callAsync('God', error => {
//     console.timeEnd('asyncParallelHook_tapAsync')
// })


console.time('asyncParallelHook_tapPromise')
asyncParallelHook.tapPromise('1', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1', name)
            resolve()
        }, 1000)
    })
})

asyncParallelHook.tapPromise('2', (name ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2', name)
            resolve()
        }, 2000)
    })
})

asyncParallelHook.tapPromise('3', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3', name)
            resolve()
        }, 3000)
    })
})

asyncParallelHook.tapPromise('4', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('4', name)
            resolve()
        }, 4000)
    })
})

asyncParallelHook.promise('tapPromise').then((error) => {
    console.timeEnd('asyncParallelHook_tapPromise')
})
