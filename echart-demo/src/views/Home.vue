<template>
  <div>
    <div @click="nexta">next</div>
    <header>小试牛刀</header>
    <Test :a1="a1" :a2="a2"></Test>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" 
    class="main"
    style="width: 600px; height:400px; border: 1px solid black;">
    <div style="position: absolute;">asdfasdfadsf</div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'Home',
  data () {
    return {
      a1: '----',
      a2: '++++'
    }
  },
  methods: {
    drawBar() {
      var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            color: ['#e2e2e2','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [
              {
                barWidth: 30,
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 99]
              }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    drawPie2() {
      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
        series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  data:[
                      {value:235, name:'视频广告'},
                      {value:274, name:'联盟广告'},
                      {value:310, name:'邮件营销'},
                      {value:335, name:'直接访问'},
                      {value:400, name:'搜索引擎'}
                  ]
              }
          ]
      })
    },
    drawPie() {
      // 绘制图表。
        echarts.init(document.getElementById('main')).setOption({
            series: {
                type: 'pie',
                data: [
                    {name: 'A', value: 1212},
                    {name: 'B', value: 2323},
                    {name: 'C', value: 1919}
                ]
            }
        });
    },
    drawLine() {
      // 基于准备好的dom，初始化 echarts 实例并绘制图表。
      echarts.init(document.getElementById('main')).setOption({
          title: {text: 'Line Chart'},
          tooltip: {},
          toolbox: {
              feature: {
                  dataView: {},
                  saveAsImage: {
                      pixelRatio: 2
                  },
                  restore: {}
              }
          },
          xAxis: {},
          yAxis: {},
          series: [{
              type: 'line',
              smooth: true,
              data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
          }]
      });
    },
    drawBar2 () {
      var myChart = echarts.init(document.getElementById('main'));
 
      const option = {
          legend: {},
          // tooltip: {},
          color: ['#ff0000', '#00ff00', '#0000ff'],
          dataset: {
              // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
              // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
              dimensions: ['product', '2015', '2016', '2017'],
              source: [
                  {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                  {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                  {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                  {product: 'Walnut Brownie', '2015': 12.4, '2016': 53.9, '2017': 39.1}
              ]
          },
          xAxis: {type: 'category',
          axisLabel: {
            interval: 0,
            rotate: 45,
            margin: 8,
            textStyle: {
              color: '#222'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#e1e5e9', // y坐标轴的轴线颜色
              width: 1 // 这里是坐标轴的宽度,可以去掉
            }
          },
          },
          yAxis: {
            axisLabel: {
              formatter: function (value) {
                window.console.log('tttt:', typeof value)
                return Number(value / 3).toFixed(2)
              }
            }
          },
          series: [
              {type: 'line'},
              {type: 'bar', barWidth: 45},
              {type: 'line'}
              // {type: 'bar'},
              // {type: 'bar'}
          ]
      };
      myChart.setOption(option)
      setTimeout(() => {
        myChart.setOption(option)
      }, 5000)
    },
    drawBar3() {
      var myChart = echarts.init(document.getElementById('main'));

      const option = {
          title: {
              text: '世界人口总量',
              subtext: '数据来自网络'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              data: ['2011年', '2012年']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
          },
          yAxis: {
              type: 'category',
              data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
          },
          series: [
              {
                  name: '2011年',
                  type: 'bar',
                  label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: () => {
                          return 'label'
                        }
                    }
                  },
                  data: [18203, 23489, 29034, 104970, 131744, 630230]
              },
              {
                  name: '2012年',
                  type: 'bar',
                  data: [19325, 23438, 31000, 121594, 134141, 681807]
              }
          ]
      }
      myChart.setOption(option)
    },
    nexta () {
      this.$router.push('/test')
    }
  },
  mounted () {
    this.drawBar2()
    setTimeout(() => {
      this.a1 = 'aaaaa'
      this.a2 = 'bbbbb'
    }, 2000)
  },
  components: {
    Test: () => import('./Test')
  }
}
</script>

<style scoped>
.main {
  border: 1px solid green;
  margin: 0 auto;
  margin-top: 20px;
}
</style>