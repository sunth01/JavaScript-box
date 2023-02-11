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

#### 插值表达式{{ }}

语法：{{ 变量 }}

注意：

当做文本来解析，不能解析html

变量名必须要在data中（computed）存在

不能使用if for 语句，可以放表达式（a   a+b   fn(1) => 返回值     x+y? 'x', 'y'）

不能再标签的属性上使用

#### v-show和v-if

```vue
变量在标签上使用，不需要加this
v-show-------------------------------
语法 v-show= "" 布尔值/布尔值的变量
本质上:控制的是css的display:none
使用场景:频繁的切换显示隐藏 可以使用v-show
v-if------------------------------------
语法:v-if="布尔值/布尔值的变量"
本质上:动态的控制节点的创建或者删除
应用场景:要么显示,要么隐藏,不那么频繁的切换的时候,可以用v-if
v-if 是惰性的 如果v-if="false" 这个节点不会创建
<div>
    <button @click="isShow = !isShow">点击控制显示隐藏</button>
    <h3 v-show="isShow">我是v-show控制的</h3>
    <h3 v-if="isShow">我是v-if控制的</h3>
</div>

export default {
  data(){
    return {
      isShow:true  //true表示显示
    }
  }
}
```

#### v-else和v-else-if

```vue
<div id="app">
    <h1 v-if="isLogin">尊敬的超级vip, 你好</h1>
    <h1 v-else>你谁呀, 赶紧登陆~</h1>
    <hr>
    <h1 v-if="age >= 60">60岁以上, 广场舞</h1>
    <h1 v-else-if="age >= 30">30岁以上, 搓麻将</h1>
    <h1 v-else-if="age >= 20">20岁以上, 蹦迪</h1>
    <h1 v-else>20岁以下, 唱跳rap篮球</h1>
</div>

export default {
  data(){
    return {
      isLogin:true,
      age:30
    }
  }
}

案例展示------------------------------------------------
<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <div class="box">
      <div class="title">
        <h4>芙蓉楼送辛渐</h4>
        <!-- 按钮位置 -->
        <span class="btn" @click="isShow = !isShow">
          {{isShow ? '收起':'展开'}}
        </span>
      </div>

      <!-- 切换显示隐藏的部分  -->
      <div class="container" v-show="isShow">
        <p>寒雨连江夜入吴,</p >
        <p>平明送客楚山孤。</p >
        <p>洛阳亲友如相问，</p >
        <p>一片冰心在玉壶。</p >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:true
    }
  }
}
</script>
```

#### v-model

```vue
<template>
        <!-- 语法: V-model="变量名" -->
        <!-- 作用:可以快速的获取或者说设置表单元素的值，实现双向数据绑定 -->
    <div>
        <!-- 如果表单元素上写v-model，那么value不会生效 -->
        用户名:<input type="text" v-model="username">
        <br><br>
        密码:<input type="password" v-model="password">
        <br><br>
        <button @click="login">登录</button>
        <button @click="reset">重置</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            console.log(this.username)
            console.log(this.password)
        },
        reset(){
            // this.username = ''
            // this.password = ''
            this.username = this.password = ''
        }
    }
}

        // 双向数据绑定 v-model 针对表单元素
        //  ==> 数据变化了， 页面就更新
        //  ==> 页面变化了， 数据也变化

        // 双向数据绑定的原理？ 底层~~~ 暂时不忙讲
                // Vue2 ==> Object.defineProperty()
        // Vue3 ==> proxy
</script>
```

##### v-model处理其他表单元素

```js
<template>
  <div>
      <!-- v-model 可以和表单元素做双向数据绑定， 可以快速的获取或者设置值
            input / textarea / select 等 
    -->
    <select v-model="cityId">
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="023">重庆</option>
        <option value="028">成都</option>
    </select>
    {{ cityId }}
    <hr>
    <!-- checkbox -->
    <input type="checkbox" v-model="singleDog">是否单身
    <!-- textarea -->
    <textarea  cols="30" rows="10" v-model="msg"></textarea>
    {{ msg }}
  </div>
</template>

<script>
export default {
    data(){
        return {
            cityId:'010',
            singleDog:true,
            msg:'我是一段文字'
        }
    }
}
</script>
<style>

</style>
```

##### v-model三个修饰符

```js
<template>
    <div>
      <!-- v-model.number => 转数字 能转的就转，不能转的呢，保持-->
      年龄: <input type="text" v-model.number="age">
      <br>
      <!-- v-model.trim 去除首尾的空格 -->
      标题: <input type="text" v-model.trim="title">
      <br>
      <!-- v-model.lazy  当失去焦点或者回车的时候，才把input框的数据，更新到data里 -->
      <!-- 对应我们的change事件 -->
      描述: <input type="text" v-model.lazy="desc">
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return {
              age: '',
              title:'',
              desc:'',
  
          }
      }
  }
  </script>
  <style>
  </style>
```

##### v-text和v-html

```js
<template>
  <div>
      <!-- 
        v-text="变量" 把变量当作普通文本插入到标签中 
        => 不常用，一般用的是插值语法{{  }}
       -->
       <div v-text="str1"></div>
       <!-- 
            v-html 解析为html标签
            用法：有时候后端返回给我们一些带标签的字符，前端可以用v-html解析

            注意：不要把用户输入的内容，放到v-html里面, 可能会造成XSS攻击（跨站脚本攻击）
            v-html底层  ==> innerHTML 

            永远不要相信用户输入的内容！！！

        -->
        <input type="text" v-model="msg">
       <div v-html="msg"></div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            str1: '<a href="#">百度</a>',
            str2: '<a href="#">百度</a>',
            msg:''
        }
    }
}
</script>

<style>

</style>
```

##### 文章标题编辑

```js
<template>
    <div class="article-case">
        <!-- 展示给用户看的 -->
        <div class="form-preview" v-if="!edit">
            <h2>{{ article.title}}</h2>
<small v-if="article.channel">{{ article.channel }}</small>
<a class="btn-edit" href="#" @click="showEdit">编辑</a>
</div>
<!-- 编辑的面板 -->
<div class="form-edit" v-else>
    <div class="form-item">
        <div class="label">标题：</div>
<div class="input">
    <input type="text" placeholder="请输入标题" v-model="form.title"/>
        </div>
</div>
<div class="form-item">
    <div class="label">频道：</div>
<div class="input">
    <select v-model="form.channel">
        <option value="">请选择频道</option>
<option value="前端">前端</option>
<option value="运维">运维</option>
<option value="测试">测试</option>
</select>
</div>
</div>
<div class="form-item">
    <div class="label"></div>
<div class="input">
    <button class="cancel" @click="cancel">取消</button>
<button class="submit" @click="submit">确认</button>

</div>
</div>
</div>
</div>
</template>

<script>
    //   1. 控制显示隐藏   展示给用户看 / 编辑面板
    //   2. 进入编辑面板 
    // v-model 和 表单元素 input 和 select做了一个绑定 ，绑定的是form对象中的某个属性
    // 点开编辑面板的时候 => 回显article里面的数据 => 扩展运算符 ... 浅拷贝对象
    export default {
name: 'ArticleCase',
    data() {
    return {
        edit: false, // 控制是否处于编辑状态
        article: {
            title: '如何成为一名前端老鸟？',
            channel: '前端',
        },
        form: {
            title: '',
            channel: '',
        },
    }
},
    methods: {
        // 想要打开编辑面板的时候，把article里面的数据，显示在input中，select中
        showEdit(){
            this.edit = true 
            // 扩展运算符 ... 可以展开对象，把article中的属性和值拷贝给form  浅拷贝
            this.form = {
                ...this.article
            }
        },
            cancel(){
                this.edit = false 
            },
                submit(){
                    this.edit = false
                    // 提交修改的时候，把form的数据，赋值给article
                    this.article = {
                        ...this.form
                    }
                }
    },
}
    </script>

<style scoped lang="less">

    .form-preview {
        position: relative;
        display: flex;
        align-items: center;
    }
.form-preview h2 {
    font-size: 18px;
    font-weight: normal;
}
.form-preview small {
    font-size: 12px;
    display: inline-block;
    padding: 2px 6px;
    background: #27ba9b;
    color: #fff;
    border-radius: 2px;
    transform: scale(0.8);
}
.form-preview .btn-edit {
    font-size: 12px;
    display: none;
    text-decoration: none;
    color: #069;
    margin-left: 20px;
}
.form-preview:hover .btn-edit {
    display: block;
}
.form-edit {
    padding-top: 20px;
}
.form-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
}
.form-item .label {
    width: 60px;
    text-align: right;
    font-size: 14px;
}
.form-item .input {
    flex: 1;
}
.form-item input,
    .form-item select {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 200px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;
    }
.form-item input::placeholder {
    color: #666;
}
.form-item .cancel,
    .form-item .submit {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 10px;
        margin-right: 10px;
        font-size: 12px;
        background: #ccc;
    }
.form-item .submit {
    border-color: #069;
    background: #069;
    color: #fff;
}
</style>
```

#### v-for

```js
<template>
  <div>
      <!-- 
        1. 遍历数组 重点 背下来
        要遍历哪个标签，就写在哪个标签上

        v-for="item in 数组变量名"    item就是数组的元素
        v-for="(item, index) in 数组名"   index => 元素的下标

        key是遍历的时候，给遍历的元素打上的一个唯一的标记
        注意：item in items  里面的in 可以换成of
        ==> 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
        ==> key的值是字符串或者数值

        2. 遍历对象 了解 
        3. 遍历数字 了解

       -->
       <ul>
           <li v-for="item of arrList" :key="item">{{ item }}</li>
       </ul>
       <hr>
       <ul>
           <li v-for="(item, index) in arrList" :key="item">{{ index }} - {{ item }} </li>
       </ul>
       <hr>
       <ul>
           <!-- 建议，把 () 加上 -->
           <li v-for="el, i in arrList" :key="el">{{ i }} - {{ el }} </li>
       </ul>
       <!-- 
           2.遍历对象 （了解）
            <li v-for="value in object">
                {{ value }}
            </li>
            // value 值
            // key  键
           v-for="(value, key) in 对象"
        -->
        <ul>
            <li v-for="(value, key) in obj" :key="value">{{ value }} - {{ key }}</li>
        </ul>
        <!-- 3. 遍历数值 number类型, 从1-到10 -->
        <hr>
        <ul>
            <li v-for="el in 10" :key="el">{{ el }}</li>
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            arrList:['orange', 'pink', 'skyblue', 'purple'],
            obj:{
                name:'小淞',
                age:6,
                desc:'这就是爱'
            }
        }
    }
}
</script>

<style>

</style>
```

#### vue就地复用策略

```js
<template>
  <div>
      <ul>
          <!-- 如果把key写为index，相当于是没有写key -->
          <!-- 如果key写index，甚至还存在bug -->
          <!-- <li v-for="(item, index) in arr" :key="index">
            {{ item }}<input type="text">
         </li> -->

         <!-- 
             设置了key，相当于给这个li标签加了一个标记，
             新旧虚拟dom对比的时候，就会按着key的值 对比原来的那个标签
          -->
         <li v-for="(item) in arr" :key="item">
            {{ item }}<input type="text">
         </li>
          
      </ul>
      <button @click="addOne">添加一项</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            arr:['老大','老二','老三']
        }
    },
    methods:{
        // 想要在老大的后面添加一个 
        // push 后面添加
        // pop  后面删
        // unshift 前面添加
        // shift  前面删除
        // splice  中间添加或者删除
        addOne(){
            // this.arr.splice('起始位置，从哪儿添加', 0, 添加的元素)
            this.arr.splice(1, 0, '老六')
        }

        // 就地复用：vue会尽可能的同层级同位置， 对比虚拟dom，复用旧的dom结构，进行差异化更新
        // 好处：可以复用旧的dom结构，提高渲染效率

        // 不写key或者key为index的时候 => 就地复用

        // 为什么key不能写index呢？

        // 面试题 ？什么是虚拟dom  vitural dom 
        // => 虚拟dom 就是 => 用来保存节点信息, 描述真实dom的JavaScript对象

    }
}
</script>

<style>

</style>
```

#### vue虚拟dom

```js
<template>
    <div class="box">
        <p class="p1">1</p>
        <p class="p2">2</p>
    </div>

</template>

<script>
// Vue里面不建议再写获取dom元素的这些api
const div = document.querySelector('.box')
console.dir(div)  // 里面有很多用不到的元素

// dom元素本身是一个对象，堆里面存的地址，肯定是不同的

// 如果用真实dom元素，来比较两个dom元素是否相同（这里对比的不是地址哈）
// 真实dom的属性特别多，这个时候就想到了用JavaScript对象来描述真实dom

// ==> vitural dom  

{/* <div id="bix">
        <p class="my_p"></p>
</div> */}
//  ==> 虚拟dom本质上，就是一个JavaScript对象，用来描述真实dom的。
const dom = {
    type:'div',
    attributes:[{id:'box'}],
    children:[{
        type:'p',
        attributes:[{class:'my_p'}],
        text:'123'
    }]
}

export default {
    
}
</script>

<style>

</style>
```

#### diff算法

```js
<template>
  
</template>

<script>
// diff算法  ==> 比较新旧虚拟dom的差异
// 策略1  ==> 同级根元素的对比
// 1. 如果根元素变化了，那么不考虑复用，整个dom树删除重建
// 2. 如果根元素不变，看根元素的属性是否变化来更新属性，并递归的往下对比差异。

// 策略2  ==> 兄弟元素比较
// 1. 对比同级兄弟元素，默认按照下标进行对比复用  （不加key或者说key为index的时候）
// 2. 如果设置了key，key是唯一的标识，会按照相同的key的元素进行复用
export default {

}
</script>

<style>

</style>
```

#### key的作用

```js
<template>
<div>
    <ul>

        <!-- 
            设置了key，相当于给这个li标签加了一个标记，
            新旧虚拟dom对比的时候，就会按着key的值 对比原来的那个标签
        -->
        <li v-for="item in arr" :key="item">
            {{ item }}<input type="text">
        </li>
        
    </ul>
    <button @click="addOne">添加一项</button>
</div>
</template>

<script>
// key 必须是 字符串或者数值类型，不能是对象或数组等非基本类型的数据。
// key 的作用：
// 遍历的时候 :key="唯一标识" 可以标识元素的唯一性，可以更好的进行新旧虚拟dom的对比，提高了对比的复用性能。

export default {
    data(){
        return {
            arr:['老大','老二','老三']
        }
    },
    methods:{

        addOne(){
            // this.arr.splice('起始位置，从哪儿添加', 0, 添加的元素)
            this.arr.splice(1, 0, '老六')
        }


    }
}
</script>

<style>

</style>
```

##### 工作中key的应用

```js
<template>
<div>
    <ul>

        <!-- 
            设置了key，相当于给这个li标签加了一个标记，
            新旧虚拟dom对比的时候，就会按着key的值 对比原来的那个标签
        -->
        <li v-for="item in arr" :key="item.id">
            {{ item.name }} - {{ item.age }}
        </li>
        
    </ul>
    <button @click="addOne">添加一项</button>
</div>
</template>

<script>

// key在遍历数组的时候 :key="唯一"
// ==> 有 id 用 id, 有唯一值用唯一值，实在都没有，才用索引index

export default {
    data(){
        return {
            arr:[
                {id:1, name:'小怂怂', age:6},
                {id:2, name:'小野太君', age:2},
                {id:3, name:'贵佐', age:3}
            ]
        }
    },
    methods:{

        addOne(){
            // this.arr.splice('起始位置，从哪儿添加', 0, 添加的元素)
            this.arr.splice(1, 0, {
                id:+new Date(), // 时间戳 唯一
                name:'小鸣',
                age:6
            })
        }
    }
}
</script>

<style>

</style>
```

#### v-bind控制类名

```vue
<template>
    <!-- 有且唯一的根节点 -->
    <div>
        <!-- v-bind控制class
            :class="对象/数组"
            
            1. 传对象   :class="obj"
            => 动态绑定类名，可以和class一起存在于标签上
            => 对象里面键是我们定义的类名，值是布尔值，true/false , 如果是true，就会把这个类名添加到标签上
            {键：值} 
            {pink:true, orange:false} => 这个盒子，添加pink类，不添加orange类
            对象的键，可以加引号或者不加

            2. 传数组  :class="arr" 
            [类名1, 类名2, 类名3] ==> 数组里面有的项，就是我们要添加的类 （适合批量添加许多类名）
            这种情况，类名需要加引号！
        -->
        <h3>v-bind控制类名</h3>
        <!-- <div class="box pink orange"></div> -->

        <div class="box" :class="obj"></div>

        <div :class="{'box':true, 'pink':false, 'orange':true}"></div>
        <div :class="{'box':true, 'pink':isPink, 'orange':isOrange}"></div>

        <!-- 数组的情况 -->
        <div class="box" :class="arr"></div>
        <div class="box" :class="['pink', 'orange', 'circle']"></div>
        <!-- <div class="box" :class="[pink, orange, circle]"></div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            obj:{
                pink:true,
                orange:false
            },
            isPink:true,
            isOrange:false,
            arr:['orange', 'circle']
        }
    }
}
</script>

<style lang="less">
.box{
    width: 200px;
    height: 200px;
    background-color: skyblue;
}
.pink{
    background-color:pink;
}
.orange{
    background-color: orange;
}
.circle{
    border-radius: 50%;
}
</style>
```

#### v-bind控制行内样式

```js
<template>
  <div>
      <!-- 
          v-bind绑定style => 控制行内样式
          语法： 
          :style="样式对象"  {backgroud:'red', width:'200px'}
          :style="[样式对象,样式对象]"
       -->
      <div :style="{background:'orange',width:'200px',height:'200px'}"></div>
      <div :style="obj"></div>
      <!-- 传数组 -->
      <div :style="[obj, obj2]"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            obj:{
               width:'200px ',
               height:'200px',
               background:'skyblue',
            //    borderRadius:'50%'
            'border-radius':'50%'
            },
            obj2:{
                width:'500px'
            }
        }
    }
}
</script>

<style>

</style>
```

#### 成绩列表案例

```js
<template>
  <div class="score-case">
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>科目</th>
            <th>成绩</th>
            <th>考试时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="list.length > 0">
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.subject }}</td>
            <td :class="{'red':item.score < 60}">{{ item.score }}</td>
            <td>{{ format(item.date) }}</td>
            <!-- 删除，如果有id情况，一般情况，直接传id -->
            <td><a href="#" @click.prevent="del(item.id)">删除</a></td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5">
              <span class="none">暂无数据</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5">
              <span>总分：{{ total }}</span>
              <span style="margin-left:50px">平均分：{{ average }}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- 右侧添加 -->
    <div class="form">
      <div class="form-item">
        <div class="label">科目：</div>
        <div class="input">
          <input type="text" v-model.trim="subject" placeholder="请输入科目" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input type="text" v-model.number="score" placeholder="请输入分数" />
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="add">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入dayjs
import dayjs from 'dayjs'
export default {
  name: 'ScoreCase',
  data () {
    return {
      list: [
        {id: 15, subject: '语文', score: 89, date: new Date('2022/06/07 10:00:00')},
        {id: 27, subject: '数学', score: 100, date: new Date('2022/06/07 15:00:00')},
        {id: 32, subject: '英语', score: 56, date: new Date('2022/06/08 10:00:00')},
        {id: 41, subject: '物理', score: 76, date: new Date('2022/06/08 10:00:00')}
      ],
      subject: '',
      score: '',
      // total:0,
      // average:0,
    }
  },
  methods:{
      del(id){
          // 根据id 过滤数组  
          // 删除某一id的项， => 过滤出所有不是该id的项  => filter
          // Vue里面不需要操作dom元素了，我们只需要关注数据
          this.list = this.list.filter(el => el.id !== id) 
      },
      add(){
          // 模拟简单的校验
          if (this.subject === '' || this.score > 100){
              return alert('请录入正确的成绩')
          }
          // 往数组list中push数据
          this.list.push({
              id:+new Date(),
              subject:this.subject,
              score:this.score,
              date:new Date()
          })
          // 重置input，清空
          this.score = this.subject = ''
          
      },
      format(date){
          return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
      }
  },
  computed:{
      // 求和，累加 
      total(){
          // initValue 如果不写，初始值取的是数组的第一个元素，arr[0]，而这个取出来是一个对象
          const res = this.list.reduce((pre, cur) => {
              return pre + cur.score
          }, 0)
          return res
      },
      // 求平均值
      average(){
          // 在计算属性中，可以使用之前的计算属性 this.xx
          // length 等于 0 ，  被除数/0 ==> NaN 不可以
          const res = this.list.length > 0 ? this.total / this.list.length : 0
          return res.toFixed(2) 
      }
  }
};
</script>

<style lang="less">
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;
  .table {
    flex: 4;
    table {
      width: 100%;
      border-spacing: 0;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      th {
        background: #f5f5f5;
      }
      tr:hover td {
        background: #f5f5f5;
      }
      td,
      th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        padding: 10px;
        &.red {
          color: red;
        }
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
  .form {
    flex: 1;
    padding: 20px;
    .form-item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }
    .form-item .label {
      width: 60px;
      text-align: right;
      font-size: 14px;
    }
    .form-item .input {
      flex: 1;
    }
    .form-item input,
    .form-item select {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
    }
    .form-item input::placeholder {
      color: #666;
    }
    .form-item .cancel,
    .form-item .submit {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 10px;
      margin-right: 10px;
      font-size: 12px;
      background: #ccc;
    }
    .form-item .submit {
      border-color: #069;
      background: #069;
      color: #fff;
    }
  }
}
</style>
```

#### 计算属性

```js
<template>
  <div>
      <h3>计算属性的基本使用</h3>
      <input type="text" v-model.number="num1"> + 
      <input type="text" v-model.number="num2"> = 
      <span>{{ sum }}</span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num1:0,
            num2:0,
            // sum:0
        }
    },
    // sum这个属性，依赖于num1和num2， 这种情况，我们可以使用计算属性来实现功能
    // computed 是一个对象
    computed:{
        // sum:function(){

        // }
        // ES6 简写形式更多一些

        // 1. 计算属性，必须是一个函数 
        // 2. 这个函数一定要写一个return，必须要有返回值
        // 3. 计算属性函数中的this指向的也是vue实例，如果要取data中的变量 ，this.xx
        // 4. 计算属性使用的时候，和data里面的数据一样，不能加()当做方法来调用！
        // 5. 计算属性的变量名不能和data中的变量名一样
        sum(){
            return this.num1 + this.num2
        }
    }

}
</script>

<style>

</style>
```

#### 计算属性和函数比较

```js
<template>
<div>
    <h3>计算属性的基本使用</h3>
    <input type="text" v-model.number="num1"> + 
    <input type="text" v-model.number="num2"> = 

    <hr>
    <h3>计算属性计算的结果</h3>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <h3>函数调用的结果</h3>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
</div>
</template>

<script>
export default {
    data(){
        return {
            num1:0,
            num2:0,
            // sum:0
        }
    },
    methods:{
        sumFn(){
        console.log('调用了一次函数')
        return this.num1 + this.num2
        }
    },
    // sum这个属性，依赖于num1和num2， 这种情况，我们可以使用计算属性来实现功能
    // computed 是一个对象
    computed:{
    //   sum:function(){

    //   }
        // ES6 简写形式更多一些

        // 1. 计算属性，必须是一个函数 
        // 2. 这个函数一定要写一个return，必须要有返回值
        // 3. 计算属性函数中的this指向的也是vue实例，如果要取data中的变量 ，this.xx
        // 4. 计算属性使用的时候，和data里面的数据一样，不能加()当做方法来调用！
        // 5. 计算属性的变量名不能和data中的变量名一样

        sum(){
            console.log('计算了一次-computed')
            return this.num1 + this.num2
        }
        // 如果只使用一次，计算属性感觉和函数调用是一样的
        // 那为什么会有计算属性呢？
        // 计算属性相比函数调用的优势：多次使用的时候，计算属性有缓存，性能消耗小

        // ==> 计算属性computed
        // 计算属性会缓存上一次计算的结果，只要依赖的数据不改变，就不会重新计算。
        // 所以，当某个变量多次使用的时候，用计算属性，性能消耗会小很多。

        // 特点
        // 1. 计算属性会缓存结果，只要依赖项不改变，就直接读取缓存
        // 2. 依赖项改变，函数重新执行并缓存最新的结果

        // 使用场景
        // =>当某个值依赖其他值的时候，就可以使用计算属性。
        // 1. 求和 ， 求平均值 
        // 2. 全选反选等 
    }

}
</script>

<style>

</style>
```

#### 计算属性完整写法

```js
<template>
  <div>
      <input type="text" v-model="firstName">-
      <input type="text" v-model="lastName">
      <span>{{ fullName }}</span>
      <br>
      <span>{{ fullName }}</span>
      <button @click="changeName">改名</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            firstName:'小野',
            lastName:'太浪'
        }
    },
    methods:{
        changeName(){
            // 当我们去设置计算属性的时候，会触发setter函数
            this.fullName = '小贵-司令'
        }
    },
    computed:{
        // fullName(){
        //     return this.firstName + '-' + this.lastName
        // }
        // fullName:{
        //     get(){
        //         return this.firstName + '-' + this.lastName
        //     }
        // }
        // 当我们想要去设置计算属性的值的时候
        fullName:{
            // getter
            get(){
               console.log('当fullName被读取的时候，执行了getter函数')
               return this.firstName + '-' + this.lastName
            },
            // setter
            // 就算是设置fullName计算属性的值，也不是直接设置的
            // 是基于改的值，更新依赖项，依赖项更新了（改变了），计算属性又重新更新了
            set(newVal){
                console.log('fullName被设置了，修改了')
                const names = newVal.split('-')
                this.firstName = names[0]
                this.lastName = names[1]
            }

            // 1. getter函数，里面一样必须要写return
            //  => 当我们使用fullName这个计算属性的时候，就会触发调用执行这个函数
            //  => 同样，有缓存的哈~~
            // 2. setter函数，当我们去设置计算属性的值的时候，就会触发 this.fullName = xxx
            // 3. setter函数接收的变量就是我们赋的值，它的作用是基于传过来的值，更新依赖项，它里面不写return

        }
    }
}
</script>

<style>

</style>
```

#### 全选反选

```js
<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll"/>
    <button >反选</button>
    <ul>
      <li v-for="item in arr" :key="item.name">
        <input type="checkbox" v-model="item.c"/>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: true,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed:{
      // this.isAll = false / true 
      isAll:{
          // getter函数
          get(){
              console.log('触发了getter')
              // arr.every(cbFn) ==> 数组中每一个元素都满足指定函数cbFn的条件，every返回true、否则false
              return this.arr.every(el => el.c === true)
          },
          // setter函数
          set(val){
              console.log(val)
              // 当我们勾选了全选框的时候，触发了setter
              // val就是全选框的状态，同步设置给每一个小复选框
              console.log('触发了setter')
              this.arr.forEach(el => el.c = val)
          }
      }
  }
};
</script>

<style>
</style>
```

#### watch监听器

```js
<template>
  <div>
      <h3>银行卡余额{{ money }}</h3>
      <button @click="money+= 6000">发工资</button>
      <button @click="money-= 200">干饭</button>
      <!--  -->
      <br>
      <div>{{ obj }}</div>
      <button @click="obj.age++">长大了一岁</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 需求：只要我卡里的钱变化了，就发一个短信通知一下我
            money:100,
            obj:{
                name:'小淞',
                age:8
            } 
        }
    },
    watch:{
        // 1.简单类型
        // 第一个参数是新值（变化后的值），第二个参数是原来的值
        // money:function(newVal, oldVal){
        //     console.log(newVal, oldVal)
        // }
        // 对象的属性，本身可以写成字符串形式
        // 'money':function(newVal, oldVal){
        //     console.log(newVal, oldVal)
        // },
        // ==> ES6 形式
        money(newVal, oldVal){
            console.log(newVal, oldVal)
        },
        // ==> 一般不这么写
        // 'money'(newVal, oldVal){
        //     console.log(newVal, oldVal)
        // }

        // => 监听对象里某一个属性的值，写成字符串的形式
        'obj.age' (newVal, oldVal){
            console.log(newVal, oldVal)
        }
    }
}
</script>

<style>

</style>
```

#### watch-复杂数据类型

```js
<template>
  <div>
      <h2>监听复杂数据类型</h2>
      <div>{{ person }}</div>
      <button @click="person.name = '好人'">偷偷改名</button>
      <button @click="person.age = 88">偷偷改年龄</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 24 小时 全方位监听~~~ 
            person:{
                name:'嫌疑犯',
                age:22,
                desc:'喜欢DJ~踩点~~'
            }
        }
    },
    watch:{
        person:{
            deep:true, // 表示深度监听，监听这个对象的每一个属性
            // ==> 复杂数据类型中任何一个属性变化了，就会执行handler
            immediate:true, // 一开始就立即执行一次
            // 当我们深度监听的时候，newVal和oldVal都是一个对象
            // 它们会指向同一个引用，oldVal在深度监听的时候，无效，可以只写一个参数newVal
            handler(newVal, oldVal){
                console.log(newVal)
                console.log(oldVal)
                console.log(newVal === oldVal)
            }
        }
    }
}
</script>

<style>

</style>
```

#### 成绩列表-watch-本地缓存

```js
<template>
  <div class="score-case">
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>科目</th>
            <th>成绩</th>
            <th>考试时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="list.length > 0">
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.subject }}</td>
            <td :class="{'red':item.score < 60}">{{ item.score }}</td>
            <td>{{ format(item.date) }}</td>
            <!-- 删除，如果有id情况，一般情况，直接传id -->
            <td><a href="#" @click.prevent="del(item.id)">删除</a></td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5">
              <span class="none">暂无数据</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5">
              <span>总分：{{ total }}</span>
              <span style="margin-left:50px">平均分：{{ average }}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- 右侧添加 -->
    <div class="form">
      <div class="form-item">
        <div class="label">科目：</div>
        <div class="input">
          <input type="text" v-model.trim="subject" placeholder="请输入科目" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input type="text" v-model.number="score" placeholder="请输入分数" />
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="add">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入dayjs
import dayjs from 'dayjs'
export default {
  name: 'ScoreCase',
  data () {
    return {
        // 如果本地存在local数据，就渲染local的数据，否则才只用后面的默认数据  
      //   list: a || b 
      // 
      list: JSON.parse(localStorage.getItem('score-list')) || [
        {id: 15, subject: '语文', score: 89, date: new Date('2022/06/07 10:00:00')},
        {id: 27, subject: '数学', score: 100, date: new Date('2022/06/07 15:00:00')},
        {id: 32, subject: '英语', score: 56, date: new Date('2022/06/08 10:00:00')},
        {id: 41, subject: '物理', score: 76, date: new Date('2022/06/08 10:00:00')}
      ],
      subject: '',
      score: '',
    }
  },
  methods:{
      del(id){
          this.list = this.list.filter(el => el.id !== id) 
      },
      add(){
          // 模拟简单的校验
          if (this.subject === '' || this.score > 100){
              return alert('请录入正确的成绩')
          }
          // 往数组list中push数据
          this.list.push({
              id:+new Date(),
              subject:this.subject,
              score:this.score,
              date:new Date()
          })
          // 重置input，清空
          this.score = this.subject = ''
          
      },
      format(date){
          return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
      }
  },
  computed:{
      // 求和，累加 
      total(){
          const res = this.list.reduce((pre, cur) => {
              return pre + cur.score
          }, 0)
          return res
      },
      // 求平均值
      average(){
          const res = this.list.length > 0 ? this.total / this.list.length : 0
          return res.toFixed(2) 
      }
  },
  watch:{
      // 深度监听 ==> 比较消耗性能 ==> 注意一下
      // list是一个复杂类型数组

      // 1. 监听list的变化
      // 2. 一旦list变化，将变化后的数据存到本地
      // 3. 一进入页面，优先从本地读取
      list:{
          deep:true,
          handler(newVal){
              console.log(newVal)
              // localStorage只能存字符串
              localStorage.setItem('score-list', JSON.stringify(newVal))
          }
      }
  }
};
</script>

<style lang="less">
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;
  .table {
    flex: 4;
    table {
      width: 100%;
      border-spacing: 0;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      th {
        background: #f5f5f5;
      }
      tr:hover td {
        background: #f5f5f5;
      }
      td,
      th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        padding: 10px;
        &.red {
          color: red;
        }
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
  .form {
    flex: 1;
    padding: 20px;
    .form-item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }
    .form-item .label {
      width: 60px;
      text-align: right;
      font-size: 14px;
    }
    .form-item .input {
      flex: 1;
    }
    .form-item input,
    .form-item select {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
    }
    .form-item input::placeholder {
      color: #666;
    }
    .form-item .cancel,
    .form-item .submit {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 10px;
      margin-right: 10px;
      font-size: 12px;
      background: #ccc;
    }
    .form-item .submit {
      border-color: #069;
      background: #069;
      color: #fff;
    }
  }
}
</style>
```

#### 逻辑或

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 逻辑或 || 
        // 可以为变量设置一个默认值 
        function add(a, b){
            // console.log(a + b) 
            // 10 + undefined 
            a = a || 0 
            b = b || 0
            console.log(a + b)
        }

        // function add(a = 0, b = 0) {
        //     console.log(a + b )
        // }
        add(10)
    </script>
</body>
</html>
```

