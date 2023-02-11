<template>
  <div id="app" >
    <!-- 只留下默认的路由出口 -->
    <!-- 组件也可以写成但标签的方式-->
    <!-- 日期范围 -->
    <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" />
    <br>
    <!-- switch开关 -->
    <van-switch v-model="checked" />
    <br>
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <button>注册</button>
    <button>登录</button>
    <router-view/>
  </div>
</template>

<script>
// 按需导出的，使用的时候，加[}
import { setToken } from '@/utils/storage'
// 加括的导入，按需导入，export const regest
import request from '@/utils/request'
import { Toast } from 'vant'
export default {
  data () {
    return {
      currentRate: 0,
      checked: true,
      value: ''

    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    },
    onCancel () {
      Toast('取消')
    }
  },
  // 注册
  async goRegister () {
    const res = await request.post('/user/register', {
      username: 'ssx321',
      password: '123456'
    })
    console.log(res)
  },
  // 登录
  async goLogin () {
    const res = await request.post('/user/login', {
      username: 'ssx321',
      password: '123456'
    })
    const { token } = res.data
    setToken(token)
  }

}
</script>
