const { AsyncSeriesWaterfallHook } = require('tapable')

const asyncSeriesWaterfallHook = new AsyncSeriesWaterfallHook(['pluginArg'])

// promise 用法
// asyncSeriesWaterfallHook.tapPromise('first', (name) => {
//     console.log(name)
//     return new Promise((reslove, reject) => {
//         reslove('cat')
//     })
// })

// asyncSeriesWaterfallHook.tapPromise('second', (name) => {
//     console.log('second', name)
//     return new Promise((reslove, reject) => {
//         reslove('tiger')
//     })
// })

// asyncSeriesWaterfallHook.tapPromise('third', (name) => {
//     console.log('third', name)
//     return new Promise((reslove, reject) => {
//         reslove('tiger')
//     })
// })

// asyncSeriesWaterfallHook.promise('Cat').then(Error => console.log(Error))


// 异步用法
const asyncSeriesWaterfallHook_async = new AsyncSeriesWaterfallHook(['pluginArg'])


asyncSeriesWaterfallHook_async.tapAsync('1', (num, callback) => {
   setTimeout(() => {
       console.log("first", num)
       callback(null, 2)
   }, 3000)
})

asyncSeriesWaterfallHook_async.tapAsync('2', (num, callback) => {
    setTimeout(() => {
        console.log("second", num)
        callback(null, 3)
    }, 1000)
 })

 asyncSeriesWaterfallHook_async.tapAsync('3', (num, callback) => {
    setTimeout(() => {
        console.log("third", num)
        callback()
    }, 4000)
 })

 asyncSeriesWaterfallHook_async.callAsync(10, (error) => {
     console.log(error)
 })