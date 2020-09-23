const { SyncHook } = require('tapable')

/**
 * SyncHook 同步注册函数，一个发布订阅模式，注册在实例上的函数依次执行，不关心函数返回值，
 */

let syncHook = new SyncHook(['name'])

// syncHook.tap('1', (name) => {
//     console.log(name,syncHook.taps[0].name)
// })

// syncHook.tap('2', (name) => {
//     console.log(name, syncHook.taps[1].name)
// })

// syncHook.tap('3', (name) => {
//     console.log(name, syncHook.taps[2].name)
// })

// syncHook.call('Great')
syncHook.tap({
    name: '1',
}, (name) => {
    console.log(name,syncHook.taps[0].name)
})

syncHook.tap({
    name: '2',
    before: '3'
}, (name) => {
    console.log(name, syncHook.taps[1].name)
})

syncHook.tap( {
    name: '3',
    before: '1'
}, (name) => {
    console.log(name, syncHook.taps[2].name)
})

syncHook.call('Great')

console.log(syncHook)