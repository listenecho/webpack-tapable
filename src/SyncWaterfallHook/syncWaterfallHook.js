const { SyncWaterfallHook } = require('tapable')

/**
 * 将上一个程序的返回值作为下一个程序的参数
 */
const syncWaterfallHook = new SyncWaterfallHook(['name'])

syncWaterfallHook.tap('1', (param) => {
    console.log(1,  param)
    return param * 2
})

syncWaterfallHook.tap('2', (param) => {
    console.log(2,  param)
    return param * 3
})

syncWaterfallHook.tap('3', (param) => {
    console.log(3,  param)
})

syncWaterfallHook.tap('3', (param) => {
    console.log(3,  param)
    return param * 4
})

syncWaterfallHook.call(2)