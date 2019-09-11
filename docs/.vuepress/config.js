module.exports = {
    title: '梦数互动帮助文档', // 设置网站标题
    // base: '/staticft/FAQ/',
    base: '/press/',
    description: 'Just for fun', //描述
    // dest: '../yqt/', // 设置输出目录
    // port: 2333, //端口
    // configureWebpack:{
    //   output: {
    //         // path:'dist',
    //     　　publicPath: '/assets/'
    //     },
    // },
    themeConfig: {
        //主题配置
        sidebar: 'auto',
        search: false,
        navbar: true,
        sidebarDepth: 2,
        // sidebar: {
        //     '/baseComponents/': [
        //         '',
        //         'i',
        //         {
        //             title: '布局类组件',
        //             collapsable: true,
        //             children: [
        //                 'base/test1',
        //                 'base/test2',
        //                 'base/test3',
        //                 'base/test4'
        //             ]
        //         }
        //     ]
        // }
        sidebar: {
            '/baseComponents/': [
                {
                    title: '梦数互动帮助文档', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2, // 可选的, 默认值是 1
                    children: [
                        'useRaiders/useRaiders'
                        // {
                        //     title: '梦数互动介绍', // 必要的
                        //     path: 'useRaiders/useRaiders', // 可选的, 应该是一个绝对路径
                        //     // collapsable: false, // 可选的, 默认值是 true,
                        //     sidebarDepth: 2
                        // }
                    ]
                },
                {
                    title: '功能介绍', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1, // 可选的, 默认值是 1
                    children: [
                        'whatSystem/whatSystem',
                        'whatSystem/bullet'
                        // {
                        //     title: '签到展示',
                        //     path: 'whatSystem/whatSystem',
                        //     collapsable: false,
                        //     sidebarDepth: 1
                        // },
                        // {
                        //     title: '弹幕',
                        //     path: 'whatSystem/bullet',
                        //     collapsable: false,
                        //     sidebarDepth: 1
                        // }
                    ]
                }
            ]
        }
    }
}
