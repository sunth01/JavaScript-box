### Node命令总结

```js
node xxx路径.js   //(node只能运行js)

固定导入fs模块------------
const fs = require('fs')
const res = fs.readFileSync('要读取的文件路径','utf-8')  //读取文件格式

写文件  fs.writeFileSync('文件路径','写入的内容') // 文件存在的情况
//文件不存在的情况下 => 在目录下新建一个文件,并写入内容
	  	fs.writeFileSync('文件路径','写入的内容') 
//当文件夹不存在的情况
		fa.writeFileSync('文件路径','写入内容')

读写文件 fs.readFlieSync()
const fs = require('fs')

导入path模块-----------
path.join() 参数,都是字符串,返回值也是字符串,作用：将传入的路径片段，按一定规则，拼接到一起
const path = require('path')
const fullPath = path.join(__dirname,'路径') // (__dirname绝对路径) 转换为字符串join格式
const arr = res.split(',') //使用指定的分隔符字符串将一个String对象分割成子字符串数组

导入http模块-----------------
const { unwatchFile } = require('fs')
const http = require('http')

创建一个web服务器---------------
// serve ==> 可以启一个静态服务器
const server = http.createServer

启动服务器--------------
// 端口号: 0-65535
server.on(3030,() => {   // 3030是服务器端口号(0-65535之间任选)
    console.log('内容是提示服务起开启成功的内容')
})

decodeURIComponent('内容写url地址') // 用于解码
response 响应 ===> 返回给前端的一些东西
response.end('内容') 返回内容给浏览器

// 状态码:200 300 400 500
// 返回给浏览器的状态码
response.statusCode = 500

模块化--------------------
项目初始化  ==> 不能中文名，不能特殊符号======
npm init -y 

安装模块(包)
npm ( node package manager node包管理工具)---------------------
npm install xxx包名
npm i  
npm i xxx xxx   // 多个一起安装
npm i xxx@版本号  // 安装某个特定版本
卸载============
npm uninstall xxx
npm un xxx

nrm ==> 作用:切换镜像源
nrm ls ==> 查看有哪些镜像源
nrm test ==> 测试下载速度
nrm use taobao ==> 使用淘宝镜像源

package.json ==> 用来描述项目和这个项目所依赖的模块信息

fetch方法--------------------------

同源: 1.协议  2.主机(域名)  3.端口
跨域:浏览器请求不同源的接口(地址)
同源策略是 浏览器的安全机制 只是针对浏览器

解决跨域的方式
CORS  跨域资源共享
后端--配置响应头
Node ==> res.setHeader('Access-Control-Allow-Origin','*')
```

