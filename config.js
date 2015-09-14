//所需文件配置目录
require.config({
    //这里的baseUrl会自动补全后面的/
    baseUrl: "./",
    paths: {
        "d3": "d3.min",
        "d3-context-menu": "d3-context-menu",

        "PathRoadMap": "PathRoadMap"
    },
    shim: {
        "d3-context-menu": {
            deps: ['d3']
        },
        "PathRoadMap": {
            deps: ['d3', "d3-context-menu"]
        }
    }
});