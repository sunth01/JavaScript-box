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

#### 使用v-bind绑定数据

作用：v-bind，希望标签上的某个属性和data中的某个数据进行一个绑定

标签内的数据绑定 使用插值表达式{{ }}

```html
想要在标签属性上使用data中的数据或者将标签的属性和某一个数据进行绑定
绑定:数据变了,视图就变化,视图变化,数据也变化,页面上展示的视图和我们的数据有一个捆绑关系
<div id="app">
    <div>{{ msg }}</div>
    <a v-bind:href="link">去百度</a>
    <a :href="linkJD">去京东</a>
</div>

const vm = new Vue（{
	el:"#app",
	data(){
		return {
			msg："我在山东",
			link:"http://baidu.com"，
			linkJD："http://jd.com"
}
	}
}）

标签上的属性绑定
1. 直接写变量名  ----不行
2. 插值表达式  ----不行
在Vue中 以v-开头的就是Vue指令
v-bind指令
作用:绑定标签属性
语法:v-bind:属性名='data中的变量名'
简写
:属性名 = '变量名'
v-bind:属性名 =====>  :属性名
```

```html
v-bind注意点
<div id="app">
    <div title="msg">字符串</div>
    <div :title="msg">你来不来</div>
</div>
const vm = new Vue({
	el:'#app',
	data(){
		return {
			msg:'我在山东',
		}
	}
})
// 1. title="msg" 设置title属性,属性值是一个"msg"字符串 写死的
//  2. :title="msg"  设置title属性,值他是msg这个变量,这个变量需要在data中去找
// ==> v-bind 动态的设置html标签的属性值,msg是动的,可变的
```

#### v-on指令

作用：注册绑定事件

1. v-on : 事件名 = ' 要执行的少量代码 '
2. v-on:事件名 = "方法/函数"
3. v-on:事件名 = methods中的方法(参数1,参数2,参数3,....)
4. 简写：v-on:click ===> @click

```html
<div id='app'>
    <h3>银行卡余额 - {{ money }}</h3>
    <button v-on:click='money++'> 板砖</button>
    <button v-on:click='money += 2'> 板俩砖</button>
    <button v-on:click='money -= 20'> 板砖砸脚</button>
    <button v-on:click="addMoney">开小卖部一个月</button>
    <button @click="eat('小白')">请小白吃饭</button>
    <button @click="eat('小白白')">请小白白吃饭</button>
</div>
const vm = Vue({
	el:'#app',
	data(){
		return {
			money:100
		}
	}，
	methods：{
		addMoney（）{
			console.log(this) // 方法中的this指向的是vm这个vue的实例
			this.money = this.money + 30000 - 10000 -5000 - 12000
		}，
		eat（person）{
			if（person === "小白"）{
				console.log('小白吃烤肉')
				this.money -= 200
			}
			if（person === "小白白"）{
				console.log('小白白吃海底捞')
				this.money -= 300
			}
		}
	}
})
console.log(vm) // vue实例
```

#### Vue中获取事件对象

```html
<div id="app">
    <h3>Vue中获取事件对象</h3>
    <a href="http://baidu.com" @click="goBaidu">去百度</a>
    <a href="http://jd.com" @click="goJD($event,'大黄','买狗粮')">去京东</a>
</div>
const vm = new Vue({
		el:'#app',
		data(){
			return {
				money:666
			}
		},
		methods:{
			// 1. 如果html中的方法没有传参,直接在方法里写e来接收事件对象
			goBaidu(e){
			e.preventDefault()
			console.log('去百度')
		},
		// 2. 如果传了参数,通过$event来代表事件对象,$event写在方法参数中
		goJD(e, a, b){
			e.preventDefault()
			console.log(a,b)
			console.log('去京东')
		}
		}
})
```

#### Vue事件修饰符

事件修饰符

1. @事件名.prevent  ==> e.preventDefault() 阻止默认行为

2. @事件名.stop   ==> e.stopPropagation() 阻止事件冒泡 

3. 事件修饰符可以串联 ==> @click.prevent.stop / @click.stop.prevent

```html
<div class="fatherFn">
    <h3>Vue-事件修饰符</h3>
    <a href="http://baidu.com" @click.prevent.stop="goBaidu">去百度</a>
    <a href="http://jd.com" @click.stop.prevent="goJD('大黄','买狗粮')">去京东</a>
</div>
const vm = new Vue({
		el:'#app',
		data(){
			return {
				money:666
			}
		},
		methods:{
			goBaidu(){
				console.log('去百度')
			},
			goJD(a,b){
				console.log('去京东')
				console.log(a, b)
			},
			fatherFn(){
				console.log('父亲被点击了,说明事件冒泡')
			}
		}
})
```

#### Vue按键修饰符

```html
<div id="app">
    <h3>Vue-按键修饰符</h3>
    <input type="text" @keyup.enter="handleKeyup">
</div>
//事件修饰符
//@keyup.enter ==> 按下回车按键的时候，执行handleKeyup事件
const vm = new Vue({
	el:'#app',
	methods:{
		handleKeyup(){
			console.log('开始搜索')
		}

	}
})
```

##### 小案例-点击按钮反转字符串字符

```html
<div id="app">
    <h3>vue-翻转字符串</h3>
	<div>{{ msg }}</div>
	<button @click="handleBtnClick">点击翻转</button>
</div>
const vm = new Vue ({
		el:'#app',
		// data必须是一个甘薯,return一个对象
		data(){
			return{
				msg:'hello world'
			}
		},
		methods:{
			handleBtnClick(){
// this.msg = 'dlrow olleH'
// console.log(this.msg.split('') .reverse() .join(''))this.msg = this .msg.split('') .reverse() .join(i')
// console.log([...this .msg])
				this.msg = [...this.msg].reverse().join('')
			}
		}
})
```

#### Vue组件

```html
// 组件：页面上的一部分 
// 从网页的角度来看，如果细粒度划分细一点，
// 每一个dom标签（元素）都可以看作是一个组件。一个按钮也可以是一个组件

// 组件：包含 html结构 / css 样式 / js逻辑

// 定义一个名为 button-counter 的新组件
// 1. 全局注册的组件 
// 第一个参数，是组件的名字 
// 第二个参数，组件的一些配置项option 和 我们new Vue中传入的是一样的
// 描述的是这个组件的内容和逻辑
<div id="app">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
</div>
// 组件可以复用,并且互不影响
Vue.component('button-counter', {
		data() {
			return {
				count: 0
			}
		},
		template: '<button @click="count++">You clicked me {{ count }} times.</button>'
		})

		const vm = new Vue({
			el:'#app',
			data(){
				return {
					msg:'Hello World'
				}
			}  
})
```

#### Vue局部注册组件

```html
<body>
    <div id="app">
        <!-- 组件的复用 -->
        <button-counter></button-counter>
        <!-- 使用局部组件 -->
        <comp-a></comp-a>
    </div>
    <script src="./js/vue.js"></script>
    <script>

        // 定义一个名为 button-counter 的新组件
        // 1. 全局注册的组件 
        //    ==> 一个组件一旦全局注册了，我们可以在所有的组件中使用它
        Vue.component('button-counter', {
            data() {
                return {
                    count: 0
                }
            },
            template: '<button @click="count++">You clicked me {{ count }} times.</button>'
        })

        // 2. 局部注册组件
        // 通过一个普通的JavaScript对象来定义组件

        const ComponentA = {
            data() {
                return {
                    count: 0
                }
            },
            // 在局部注册的组件里，可以使用全局组件
            template: `
                <div>
                    <button @click="count++">我是局部组件{{ count }}</button>
                </div>
            `
        }

        const vm = new Vue({
            el:'#app',
            data(){
                return {
                    msg:'Hello World'
                }
            },
            components:{
                // 左边的是组件的名字， 在html上使用的时候
                // <comp-a></comp-a>
                'comp-a': ComponentA
            }
        })


    </script>
</body>
```

#### 组件的拆分

```html
<div id="app">
        <!-- 组件的复用 -->
        <button-counter></button-counter>
        <!-- 使用局部组件 -->
        <comp-a></comp-a>
    </div>
    <script src="./js/vue.js"></script>
<script type="module">
        // 浏览器中要使用ESM导入导出
        // 1. type="module"
        // 2. 以服务的形式启动项目  live server

        import ComponentA from './js/CompA.js' --------------- 引用局部组件js
        // 定义一个名为 button-counter 的新组件
        // 1. 全局注册的组件 
        //    ==> 一个组件一旦全局注册了，我们可以在所有的组件中使用它
        Vue.component('button-counter', {
            data() {
                return {
                    count: 0
                }
            },
            template: '<button @click="count++">You clicked me {{ count }} times.</button>'
        })

        // 2. 局部注册组件
        // 通过一个普通的JavaScript对象来定义组件
        // 我们可以定义很多很多局部组件，要使用的时候，就在components这个对象去注册

        const vm = new Vue({
            el:'#app',
            data(){
                return {
                    msg:'Hello World'
                }
            },
            components:{
                // 左边的是组件的名字， 在html上使用的时候 => <comp-a></comp-a>
                'comp-a': ComponentA
            }
        })


</script>
```









