# h5

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
1、每个独立h5以src/pages/page1为例，路由独立
2、在src下router/router.js中设置主页总目录路由
3、单独打包一个独立h5如：page1
运行，npm run build page1在dist生成相应打包文件
4、http-server可查看打包后文件效果
npm install http-server -g
cd dist
http-server

ctrl+c退出

注意：
主页总目录白屏，注意独立子目录也要挂载到主目录下app.vue的#app元素下
打包后展示页面，更新时无刷新尽量清缓存
vue.config.js下publicPath: './', //避免打包后js路径报错
