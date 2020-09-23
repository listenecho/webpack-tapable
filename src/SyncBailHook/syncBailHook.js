const { SyncBailHook } = require('tapable')

/**
 * 
 * 与syncHook类似,唯一区别就是当注册函数前面有返回值为(**非undefined**),后面注册的函数将不会被执行
 * 
 */

const  syncBailHook = new SyncBailHook(['a', 'b'])

syncBailHook.tap('1', (car, car1) => {
    console.log(syncBailHook.taps[0].name, car, car1)
})

syncBailHook.tap('2', (car) => {
    console.log(syncBailHook.taps[1].name, car)
    return null
})

syncBailHook.tap('3', (car) => {
    console.log(syncBailHook.taps[2].name, car)
})


syncBailHook.call('自行车', '迷你电动车')


