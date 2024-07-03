export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-pxtorem': {
            rootValue: 16, // 根元素的字体大小
            unitPrecision: 5, // 允许REM单位增长到的小数点后位数
            propList: ['*'], // 可以从px更改为rem的属性
            selectorBlackList: [], // 要忽略的选择器
            replace: true, // 替换包含的px
            mediaQuery: false, // 允许在媒体查询中转换px
            minPixelValue: 0, // 设置要替换的最小像素值
        },
    },
}
