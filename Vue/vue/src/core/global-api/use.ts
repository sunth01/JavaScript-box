import type { GlobalAPI } from 'types/global-api'
import { toArray, isFunction } from '../util/index'

export function initUse(Vue: GlobalAPI) {
  // Vue.use是一个函数 接收一个插件作为参数
  Vue.use = function (plugin: Function | any) {
    // 声明一个数组来存安装过的插件~~~
    const installedPlugins =
      this._installedPlugins || (this._installedPlugins = [])
      // 如果找得到这个插件，说明插件安装过，return this
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    // 添加Vue实例到参数中去
    args.unshift(this)
    // Vue的插件，按Vue的规范，应该要有一个install方法
    if (isFunction(plugin.install)) {
      // apply改变this指向  ==> 执行plugin内部的install方法
      // apply 会立即执行调用函数
      plugin.install.apply(plugin, args)
      // 如果插件本身是一个function
    } else if (isFunction(plugin)) {
      // 执行这个函数
      plugin.apply(null, args)
    }
    // 用数组存起来~~~
    installedPlugins.push(plugin)
    // return Vue实例
    return this
  }
}

// Vue.use 本身是一个函数，用来安装插件~~
// Vue.use内部做了哪些操作？
// 1. 判断插件是否注册安装过
// 2. 如果这个要安装的插件本身有install方法，执行它
//    同时把Vue构造函数作为第一个参数，以及use中的其他参数传入
// 3. 如果没有install方法，并且插件本身就是一个函数，就去调用执行它
//    同时把Vue构造函数作为第一个参数，以及use中的其他参数传入
// 4. 记录这个插件已经注册过
