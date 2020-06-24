const path = require("path")
module.exports = {
    // baseUrl: "/jdpt/",
    publicPath: './',
    // outputDir: '/jdpt',
    // outputDir: "distMobile",//与baseUrl生产环境路径一致
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "components": "@/components",
                "views": "@/views",
                "network": "@/network",
            }
        }
    },
}