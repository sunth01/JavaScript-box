const { ajax } = require('./my-ajax/index')

console.log(ajax)
const url = 'http://192.168.2.101:3000/api/news'
ajax(url).then(res => {
    console.log(res)
})