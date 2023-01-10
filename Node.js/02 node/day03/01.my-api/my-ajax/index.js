const getIpv4 = () => {
    // ifaces目前是一个对象
    const ifaces = os.networkInterfaces()
    let ip = ''
    // 192.168.19.56
    // 局域网. 内网 ==> 我们现在用的是192
    for (let key in ifaces) {
        ifaces[key].forEach(el => {
            if (el.family === 'IPv4' && !el.internal && el.address.startsWith('192')) {
                ip = el.address
            }
        })
    }
    return ip || '127.0.0.1'
}

const server = http.createServer()

server.listen(3200, () => {
    console.log(`my server is running at http://${getIpv4()}:3200/api/news`)
    console.log(`my server is running at http://${getIpv4()}:3200/api/students`)
    console.log(`my server is running at http://${getIpv4()}:3200/api/luckystar`)
})