# Vue🤯

#### MVVM（Model-View-ViewModel）

M：Model模型

V：View视图

VM：ViewModel视图模型  ==> Vue的实例

阻止Vue 在启动时生成生产提示 ---> Vue.config.productionTip = false

vue网络地址：CDN加速 CDN 内容分发网络、网络节点： <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>

也可以用引用 JS 文件：<script src="./js/vue.js"></script>

```html
初体验---------------------------------
<div id='app'></div> 以这个div作为容器
// el选择节点
<script>
const vm = new Vue({
    el:'#app', // el跟一个css选择器
    // 将template的内容挂到id为app的节点上
    template:'<div>hello world</div>'
})

通过$mount方法挂载
const vm = new Vue({
    // 将template的内容挂到id为app的节点上
    template:'<div>hello world</div>'
})

setTimeout(() => {
    vm.$mount('#app')
}, 2000)
</script>
```

##### Vue如何展示数据

```html
<div id="app">
    {{ msg }}
</div>
<script src="./js/vue.js"></script>
<script>
    const vm = new Vue({
        el:'#app',
        // 定义一个data函数，这个函数必须返回一个对象
        //data:function(){
        //    return {
        //        msg:'Hello World'
        //    }
        // }
        date(){
            return {
                msg:Hello World
            }
        }
    })
    // 1. 如果有template，template会替换ip为app的节点，渲染到页面上
    // 2. 如果没有template,默认以#app这个节点作为模板渲染
    // template:`<div>{{ msg }}</div>`
</script>
```

#### 插值表达式

```html
<div id='app'>
    <div>{{ msg }}</div>
    <div>{{ msg_html }}</div>
    <div>{{ msg2 }}</div>   报错
    <div>{{ obj.age > 18 ? '成年了':'未成年' }}</div>
    <div title="{{msg}}">123</div>  报错
</div>
<script src="./js/vue.js"></script>
<script>
    const vm = new Vue({
        el:'#app',
        data(){
            return {
                msg:'hello world',
                msg_html:'<h1>我是h1标签</h1>'，
                obj：{
                	name：'刘德华',
                	age:24,
                	hobby:'唱歌'
            	}
            }
        }
    })
    // 插值表达式的注意点-----------------------
    // 插值表达式{{ }}
    // 作用:使用data中的数据渲染视图
    // 1. 双花括号会将数据解析为普通文本,不能解析html标签
    // 2. 数据的变量必须要在data中存在, msg2报错
    // 3. 插值{{ }}可以放JS表达式,但不能写js语句
    // 4. 不能再标签的属性上使用插值表达式{{}}
</script>

js表达式和js语句的区别?
js表达式:一个表达式会产生一个值,可以放在任何需要值的地方
1. a
2. a + b
3. fn(1)
4. x > y ? 'wa' : 'yo'

js语句:
1. if(){}
2. for(){}
```

##### 使用v-bind绑定数据

```html
```





