const path = require("path")
module.exports = {
    // baseUrl: "/jdpt/",
    publicPath: process.env.NODE_ENV === "production" ? "/dist/dist/" : "./",
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