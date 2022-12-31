// Tab栏切换
const nav = document.querySelector('.tabs')
const content = document.querySelectorAll('.content')
const as = document.querySelectorAll('.tabs a')
// as.forEach((el, i)=> el.setAttribute('data-id', i))
console.log(content)

nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        nav.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        console.log(e.target)
        content.forEach(el => el.style.display = 'none')
        content[e.target.dataset.id].style.display = 'block'
    }

})

const boxWraps = document.querySelectorAll('.marquee-view .marquee')
boxWraps.forEach((item) => {
    item.innerHTML += item.innerHTML
})


//! 饼图
;(function () {
    const myChart = echarts.init(document.querySelector('.pie'))
    const option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        // 提示框组件
        tooltip: {
            // trigger 触发方式。  非轴图形，使用item的意思是放到数据对应图形上触发提示
            trigger: 'item',
            // 格式化提示内容：
            // a 代表series系列图表名称  
            // b 代表series数据名称 data 里面的name    
            // c 代表series数据值 data 里面的value   
            // d代表  当前数据/总数据的比例
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },


        series: [{
                name: '点位分布图',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                },


                data: [{
                        value: 20,
                        name: '云南'
                    },
                    {
                        value: 26,
                        name: '北京'
                    },
                    {
                        value: 24,
                        name: '山东'
                    },
                    {
                        value: 25,
                        name: '河北'
                    },
                    {
                        value: 20,
                        name: '江苏'
                    },
                    {
                        value: 25,
                        name: '浙江'
                    },
                    {
                        value: 30,
                        name: '四川'
                    },
                    {
                        value: 42,
                        name: '湖北'
                    }

                ]
            },

        ]

    };

    myChart.setOption(option)

    // 监听浏览器缩放 重新设置echarts
    window.addEventListener('resize', function () {
        // 调用resize
        myChart.resize()
    })
})()

//! 柱状图
;(function () {
    const myChart = echarts.init(document.querySelector('.users .bar'))

    // 每一个柱子的样式
    const item = {
        value: 1200,
        // 2. 修改当前柱子的颜色
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 单个柱子的提示框提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }
    const option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'skyblue' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        tooltip: {
            trigger: 'item',
            //   axisPointer: {
            //     type: 'shadow'
            //   }
        },
        // 直角坐标系内绘图网格（区域）
        grid: {
            top: '3%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },


        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            // 刻度设置
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },
            // x坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd',
                rotate: 45
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],

        yAxis: {
            type: 'value',
            // 刻度设置
            axisTick: {
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },

        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
        }]
    };

    myChart.setOption(option)

})()


//! 用户统计
;(function () {
    // (1)准备数据
    const data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    // 1. 实例化对象
    const myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    const option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "预期销售额",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "实际销售额",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
})()

//! 用户统计
;(function () {
    // (1)准备数据
    const data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    // 1. 实例化对象
    const myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    const option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "预期销售额",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "实际销售额",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // tab切换
    const box = document.querySelector('.caption')
    box.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            this.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
            index = e.target.dataset.id
            const key = e.target.dataset.type
            const arr = data[key]
            console.log(arr)
            option.series[0].data = arr[0]
            option.series[1].data = arr[1]
            myChart.setOption(option)
        }
    })

    // 自动i求耳环
    const btns = document.querySelectorAll('.caption a')
    // btns ==> 4个
    // 每隔三秒切换
    let index = 0
    const fn = function () {
        index++
        if (index >= btns.length) index = 0
        btns[index].click()
    }
    let timer = setInterval(fn, 500)

    // 鼠标经过 sales 大盒子暂停定时器 离开开启
    const sales = document.querySelector('.sales')
    sales.addEventListener('mouseenter', function () {
        clearInterval(timer)
    })
    sales.addEventListener('mouseleave', function () {
        timer = setInterval(fn, 500)
    })
})()


//! 订单区域
;(function () {
    const data = {
        day365: {
            orders: '20,301,987',
            amount: '99834'
        },
        day90: {
            orders: '301,987',
            amount: '9834'
        },
        day30: {
            orders: '1,987',
            amount: '3834'
        },
        day1: {
            orders: '987',
            amount: '834'
        }
    }
    // 获取h4
    const h4s = document.querySelectorAll('.order h4')
    // tab切换
    const filter = document.querySelector('.order .filter')
    filter.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            filter.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')

            const key = e.target.dataset.type
            const obj = data[key]
            // 分别给两个h4赋值
            h4s[0].innerHTML = obj.orders
            h4s[1].innerHTML = obj.amount
        }
    })
    // 每隔几秒自动执行 
    // 鼠标经过和离开

})()
    
//! 渠道分布
;(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置
    var option = {
      tooltip: {
        show: true,
        // 控制提示框组件的显示位置
        position: ["60%", "10%"]
      },
      radar: {
        indicator: [
          { name: "机场", max: 100 },
          { name: "商场", max: 100 },
          { name: "火车站", max: 100 },
          { name: "汽车站", max: 100 },
          { name: "地铁", max: 100 }
        ],
        // 修改雷达图的大小 圆环半径
        radius: "65%",
          // polygon circle 雷达图绘制类型
        shape: "circle",
        // 分割的圆圈个数
        splitNumber: 4,
        name: {
          // 修饰雷达图文字的颜色
          textStyle: {
            color: "#4c9bfd"
            // color:'orange'
          }
        },
        // 分割的圆圈线条的样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255, 0.5)"
            // color:"orange"
          }
        },
        // 是否显示分割区域(每一个环间的区域)
        splitArea: {
          show: false
        },
        // 轴线(半径线)修改为白色半透明, 
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.5)"
            // color:'pink'
          }
        }
      },
      series: [
        {
          name: "北京",
          type: "radar",
          // 填充区域的线条颜色
          lineStyle: {
            normal: {
              color: "#fff",
              width: 1,
              opacity: 0.5
            }
          },
          data: [[90, 19, 56, 11, 34]],
          // 设置图形标记 （拐点）
          symbol: "circle",
          // 这个是设置小圆点大小
          symbolSize: 5,
          // 设置小圆点颜色
          itemStyle: {
            color: "#fff"
          },
          // 让小圆点显示数据
          label: {
            show: true,
            fontSize: 10
          },
          // 修饰我们区域填充的背景颜色
          areaStyle: {
            color: "rgba(238, 197, 102, 0.6)"
          }
        }
      ]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
})();
//! 圆环
;(function () {
    // 初始化Echarts
    var pieChart = echarts.init(document.querySelector('.gauge'))
    // 配置项
    var option = {
        series: [
            {
                name: '销售进度',
                type: 'pie',
                // 放大图形
                radius: ['130%', '150%'],
                // 移动下位置  套住50%文字
                center: ['48%', '80%'],
                // 引导线 不显示
                labelLine: {
                    show: false
                },
                // 起始角度 支持范围[0, 360]
                startAngle: 180,
                // 鼠标经过不变大
                hoverOffset: 0,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            // 颜色渐变#00c9e0->#005fc1
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                                ]
                            )
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } },
                    { value: 200, itemStyle: { color: 'transparent' } },
                ]
            }
        ]
    };
    // 3. 传递给实例
    pieChart.setOption(option)
    // 4. 浏览器缩放, echarts图表也缩放
    window.addEventListener('resize', function () {
        pieChart.resize()
    })
}())

//! 
;(function(){
    // 1.准备相关数据
 var hotData = [
    {
      city: '北京',  // 城市
      sales: '25, 179',  // 销售额
      flag: true, //  上升还是下降
      brands: [   //  品牌种类数据
        { name: '可爱多', num: '9,086', flag: true },
        { name: '娃哈哈', num: '8,341', flag: true },
        { name: '喜之郎', num: '7,407', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '6,724', flag: false },
        { name: '好多鱼', num: '2,170', flag: true },
      ]
    },
    {
      city: '河北',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '3,457', flag: false },
        { name: '娃哈哈', num: '2,124', flag: true },
        { name: '喜之郎', num: '8,907', flag: false },
        { name: '八喜', num: '6,080', flag: true },
        { name: '小洋人', num: '1,724', flag: false },
        { name: '好多鱼', num: '1,170', flag: false },
      ]
    },
    {
      city: '上海',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '2,345', flag: true },
        { name: '娃哈哈', num: '7,109', flag: true },
        { name: '喜之郎', num: '3,701', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '2,724', flag: false },
        { name: '好多鱼', num: '2,998', flag: true },
      ]
    },
    {
      city: '江苏',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '2,156', flag: false },
        { name: '娃哈哈', num: '2,456', flag: true },
        { name: '喜之郎', num: '9,737', flag: true },
        { name: '八喜', num: '2,080', flag: true },
        { name: '小洋人', num: '8,724', flag: true },
        { name: '好多鱼', num: '1,770', flag: false },
      ]
    },
     {
      city: '山东',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '9,567', flag: true },
        { name: '娃哈哈', num: '2,345', flag: false },
        { name: '喜之郎', num: '9,037', flag: false },
        { name: '八喜', num: '1,080', flag: true },
        { name: '小洋人', num: '4,724', flag: false },
        { name: '好多鱼', num: '9,999', flag: true },
      ]
    }
    ]
    //渲染数据
    const leftBox = document.querySelector('.sup')
    const resArr = arr.map((el, i) => {
        return `
        <li>
            <span>${el.city}</span>
            <span>${el.sales} <s class=${el.flag ? 'icon-up' : 'icon-down'}></s></span>
        </li>
        `
    })
    // 数组转为字符串放到leftBox
    leftBox.innerHTML = resArr.join('')

    const lis = document.querySelectorAll('.sup li')
    const rightBox = document.querySelector('.sub')
    // tab切换
    leftBox.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            // 排他思想
            lis.forEach(el => el.classList.remove('active'))
            //给自己添加
            e.target.classList.add('active')

            const i = e.target.adtaset.id
            const brands = arr[i].brands
            console.log(brands)

            //渲染到sub上面
            const resArr = brands.map(el => {
                return `
                        <li>
                            <span>${el.city}</span><span>${el.sales} <s class=${el.flag ? 'icon-up' : 'icon-down'}></s></span>
                        </li>`
            })
            rightBox.innerHTML = resArr.join('')
        }
    })
})()











































