﻿var data = []; //在前面要用到这个数组
var dataStr = '1.sub1<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
2.sub2<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
3.sub3<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
4.sub4<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
5.sub5<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
6.sub6<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
7.sub7<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
8.sub8<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
9.sub9<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
10.sub10<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
11.sub11<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
12.sub12<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
13.sub13<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
14.sub14<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
15.sub15<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
<br>\
<br>\
16.sub16<br>\
<br>\
导演:威德-杰克逊<br>\
编剧:弗兰威尔士<br>\
主演:马丁-弗瑞曼<br>\
类型:动作<br>\
语言：英语<br>\
片长：144分钟<br>\
';

var d = dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
	var c = d[i].split('<br><br>');
	data.push({
		img: c[0].split('.')[1] + '.jpg', //这个是获取图片
		caption: c[0].split('.')[1],
		desc: c[1]
	})
}