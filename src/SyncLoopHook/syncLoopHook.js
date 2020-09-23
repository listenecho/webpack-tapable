const { SyncLoopHook } = require('tapable')

const syncLoopHook = new SyncLoopHook(['name'])

/**
 * 
 * SyncLoopHook,同步遇到某个不返回undefined的监听函数，就循环重复执行(从第一个函数重新开始执行)
 * 
 */

let count = 1
syncLoopHook.tap("1", (name) => {
    console.log('hello', name, count)
    while(count > 0 ) {
        -- count 
        return true
    }
})


let num = 2
syncLoopHook.tap("2", (name) => {
    console.log('amazing', name, num)
    while(num > 0 ) {
        -- num 
        return true
    }
})

syncLoopHook.call('Bob')

