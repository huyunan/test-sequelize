const express = require('express');
const path = require('path');
const { query } = require('./query');
const app = express();
 
// 访问静态资源文件
app.use(express.static(path.join(__dirname, 'dist')));
 
// 注意此时静态文件不是根路径了，打开会报错
// 转到 index.html 看到<base href="/">标签
// 改成 <base href="./">就可以了
 
// 监听端口
app.listen(8080, () => {
  query();
  console.log('aaaaaa');
  console.log('listen port 8080 success');
});