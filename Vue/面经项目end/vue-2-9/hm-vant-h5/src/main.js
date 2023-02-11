import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ArticleItem from '@/components/article-item.vue'

// import Vant, { Circle } from 'vant'
import { Circle, Switch, Search, Tabbar, TabbarItem, NavBar, Form, Field, Button, Toast, Cell, List, Grid, GridItem, CellGroup, Icon } from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less'
// Vue.use(Vant)

Vue.component('ArticleItem', ArticleItem)

Vue.use(Switch)
  .use(Circle)
  .use(Search)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Form)
  .use(Field)
  .use(Button)
  .use(Toast)
  .use(Cell)
  .use(List)
  .use(Grid)
  .use(GridItem)
  .use(CellGroup)
  .use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
