// module.exports = {
//     publicPath:'/',
//     configureWebpack: {
//         devtool: 'source-map'
//     },
//     // 配置打包入口
//     pages: {
//         Index: { //默认入口
//             entry: 'src/main.js', //入口文件
//             template: 'public/index.html', //使用的html模板
//             filename: 'index.html' //因为访问路径时会默认访问 index.html 所以将默认显示的置为index.html
//         },
//         Page1: {
//             entry: 'src/pages/page1/main.js',
//             template: 'public/index.html',
//             filename: 'page1.html'
//         },
//         Page2: {
//             entry: 'src/pages/page2/main.js',
//             template: 'public/index.html',
//             filename: 'page2.html'
//         },
//         Page3: {
//             entry: 'src/pages/page3/main.js',
//             template: 'public/index.html',
//             filename: 'page3.html'
//         }
//     }}


var projectname = process.argv[3];

var glob = require("glob");

function getEntry() {
    var entries = { //初始化默认入口
        Index: { //默认入口
            entry: 'src/main.js', //入口文件
            template: 'public/index.html', //使用的html模板
            filename: 'index.html' //因为访问路径时会默认访问 index.html 所以将默认显示的置为index.html
        },
    };
    if (process.env.NODE_ENV == "production") {
        entries = {
            index: {
                // page的入口
                entry: "src/pages/" + projectname + "/main.js",
                // 模板来源
                template: "public/index.html",
                // 在 dist/index.html 的输出
                filename: "index.html",
                title: projectname,
                chunks: ["chunk-vendors", "chunk-common", "index"]
            },
        };
    } else {
        var items = glob.sync("./src/pages/*/*.js");
        for (var i in items) {
            var filepath = items[i];
            var fileList = filepath.split("/");
            var fileName = fileList[fileList.length - 2];
            entries[fileName] = {
                entry: `src/pages/${fileName}/main.js`,
                // 模板来源
                template: `public/index.html`,
                // 在 dist/index.html 的输出
                filename: `${fileName}.html`,
                // 提取出来的通用 chunk 和 vendor chunk。
                chunks: ["chunk-vendors", "chunk-common", fileName]
            };
        }
    }
    // console.log(entries)
    // console.log(projectname)
    // console.log('entries')
    return entries;
}


var pages = getEntry();
module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    publicPath: './', //避免打包后js路径报错
    productionSourceMap: false, // 生产禁止显示源代码
    outputDir: "dist/" + projectname,
    pages: pages,
};
