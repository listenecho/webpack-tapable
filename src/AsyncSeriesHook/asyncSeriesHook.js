const { AsyncSeriesHook } = require('tapable')

const asyncSeriesHook = new AsyncSeriesHook(['name'])

// console.time('asyncSeriesHook_tap')
// asyncSeriesHook.tap('1', (name) => {
//     console.log('1', name)
// })

// asyncSeriesHook.tap('2', (name) => {
//     console.log('2', name)
// })

// asyncSeriesHook.tap('3', (name) => {
//     console.log('3', name)
// })

// asyncSeriesHook.tap('4', (name) => {
//     console.log('4', name)
// })

// asyncSeriesHook.callAsync('God', error => {
//     console.timeEnd('asyncSeriesHook_tap')
// })




// console.time('asyncSeriesHook_tapAsync')
// asyncSeriesHook.tapAsync('1', (name, callback) => {

//     setTimeout(() => {
//         console.log('1', name)
//         callback()
//     }, 1000)
// })

// asyncSeriesHook.tapAsync('2', (name, callback ) => {

//     setTimeout(() => {
//         console.log('2', name)
//         callback()
//     }, 2000)
// })

// asyncSeriesHook.tapAsync('3', (name,  callback) => {

//     setTimeout(() => {
//         console.log('3', name)
//         callback()
//     }, 3000)
// })

// asyncSeriesHook.tapAsync('4', (name, callback) => {
//     setTimeout(() => {
//         console.log('4', name)
//         callback()
//     }, 4000)
// })

// asyncSeriesHook.callAsync('God', error => {
//     console.timeEnd('asyncSeriesHook_tapAsync')
// })


console.time('asyncSeriesHook_tapPromise')
asyncSeriesHook.tapPromise('1', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1', name)
            resolve()
        }, 1000)
    })
})

asyncSeriesHook.tapPromise('2', (name ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2', name)
            resolve()
        }, 2000)
    })
})

asyncSeriesHook.tapPromise('3', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3', name)
            resolve()
        }, 3000)
    })
})

asyncSeriesHook.tapPromise('4', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('4', name)
            resolve()
        }, 4000)
    })
})

asyncSeriesHook.promise('tapPromise').then((error) => {
    console.timeEnd('asyncSeriesHook_tapPromise')
})
