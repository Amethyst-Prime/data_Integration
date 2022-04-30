//暂时还没用到
/*window.onload=function (){
    var xhr=null;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject();
    }
    //向服务器发送请求
    xhr.open("get","http://",true)
    xhr.send(null);
    xhr.onreadystatechange=function (){
        if(xhr.readyState==4){
            if (xhr.status==200){
                var result=xhr.responseText;
                result=JSON.parse(result);
            }
        }
    }
}*/
const myChart = echarts.init(document.getElementById('main_chart'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = function() {
    myChart.resize();
};