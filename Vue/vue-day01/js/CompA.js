// 2. 局部注册组件
const ComponentA = {
    data() {
        return {
            msg: 0
        }
    },
    // 在局部注册的组件里，可以使用全局组件
    template: `
        <div>
            <button @click="msg++">我是局部组件{{ msg }}</button>
        </div>
    `
}

export default ComponentA