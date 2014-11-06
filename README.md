#jquery.html5drag拖拽插件

这个拖拽插件依赖html5的API，通过定义拖拽过程中的三个事件

* drag 元素被拖拽的时候，由被拖拽元素的父元素触发
* drop 元素在被释放在某个区域的时候，由被释放区域触发
* dropover 元素在被拖拽到区域上方的时候，由释放区域的元素触发

在定义拖拽事件处理的时候指定响应的标签，同一标签的元素之间可以相互拖拽

例：

```javascript
//定义ele被拖拽的时候触发的事件处理
$('.box').drag('tab1',function(event){});
//定义ele被拖拽到区域的时候触发的事件处理
$('.box').drogover('tab1',function(event){});
//定义拖拽释放的时候区域触发的事件处理
$('.box').drog('tab1',function(event){});
```

[演示](http://xiajiecheng.com/assets/demo/jquery.html5drag/demo/demo.html)