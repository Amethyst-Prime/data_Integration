# 数据集成可视化部分

## 前端部分

### 1. 环境

考虑到只需要进行简单的图像展示，并且没有动态交互，故前端采用简单的html+js完成，并使用Echarts组件对数据进行可视化。

要运行前端项目需要输入以下指令下载echarts包

```
npm install echarts --save
```



### 2. 可视化方案

Echarts可以绘制包括但不限于：折线图、柱状图、饼图、散点图、日历坐标系、数据集等常用图像，考虑到作业二的数据可视化需要表现数据与时间的关系，且后端数据库发送来的数据为以用户区分的包含时间和消费信息的JSON数据，我们选取折线图、柱状图、日历坐标系等来进行数据展示。



#### 2.1 柱状图

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235518424.png" alt="image-20220428235518424" style="zoom:67%;" />

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235411745.png" alt="image-20220428235411745" style="zoom:67%;" />

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235444789.png" alt="image-20220428235444789" style="zoom: 67%;" />

#### 2.2 折线图

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235605731.png" alt="image-20220428235605731" style="zoom:67%;" />

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235652094.png" alt="image-20220428235652094" style="zoom:67%;" />

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235708174.png" alt="image-20220428235708174" style="zoom:67%;" />

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235749314.png" alt="image-20220428235749314" style="zoom:67%;" />

<img src="C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235809350.png" alt="image-20220428235809350" style="zoom:67%;" />

#### 2.3 日历坐标系

![image-20220428235929624](C:\Users\12061\AppData\Roaming\Typora\typora-user-images\image-20220428235929624.png)