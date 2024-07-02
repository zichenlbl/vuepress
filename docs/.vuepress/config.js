module.exports = {
  base: '/', // doc.hujinya.com 用这个
  // base: '/vuepress/', // hujinya.com/vuepress 用这个
  title: 'Zichen文档',
  description: 'Zichen',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.png' }]
  ],
  themeConfig: {
    logo: '/hero.png',
    //标题导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/guide/', target: '_self', rel: '' },
      { text: '分类',
        items: [
          { text: '软件安装', items: [
               { text: 'Apache', link: '/software-installation/apache/' }
               ,{ text: 'Git', link: '/software-installation/git/' } 
               ,{ text: 'MySQL', link: '/software-installation/mysql/' } 
               ,{ text: 'PHP', link: '/software-installation/php/' } 
            ]
          },
          { text: '语言', items: [
               { text: 'C', link: '/language/c/' } 
               ,{ text: 'C#', link: '/language/csharp/' }
               ,{ text: 'C++', link: '/language/c++/' }
               ,{ text: 'CSS', link: '/language/css/' }
               ,{ text: 'HTML', link: '/language/html/' }
               ,{ text: 'Java', link: '/language/java/' }
               ,{ text: 'JavaScript', link: '/language/js/' }
               ,{ text: 'PHP', link: '/language/php/' }
               ,{ text: 'Python', link: '/language/python/' }
               ,{ text: 'Visual Basic', link: '/language/vb/' }
            ] 
          }
        ]
      },
      { text: '其他', ariaLabel: 'Language Menu', 
        items: [
          { text: 'csharp', link: '/other/csharp/' },
          { text: '看书', link: '/other/read/看书/' },
          { text: '听歌', link: '/other/music/听歌/' },
          { text: '骑车', link: '/other/bicycle/骑车/' },
          { text: '跑步', link: '/other/run/跑步/' },
          { text: '钢琴', link: '/other/piano/钢琴/' },
          { text: '写字', link: '/other/calligraphy/写字/' },
          { text: '羽毛球', link: '/other/badminton/羽毛球/' },
          { text: '看风景', link: '/other/scenery/看风景/' }
        ]
      },
      { text: '关于我', link: 'http://zichenlbl.github.io/about', target: '_black', rel: 'noopener noreferrer' },
    ],
    navbar: true,
    // sidebar: [  
    //   {  
    //     title: '介绍', // 必要的  
    //     path: '/', // 可选的, 链接到该侧边栏项对应的页面  
    //     collapsable: false, // 可选的, 默认值是 true  
    //     children: [  
    //       '/intro/getting-started.md',  
    //       '/intro/installation.md'  
    //     ]  
    //   },  
    //   // 其他侧边栏项...  
    // ],
    //侧边栏
    sidebar: 'auto',
    //侧边栏深度 2:h2-h3 3:h2-h4
    sidebarDepth: 3,
    //显示所有页面的标题链接
    displayAllHeaders: true,
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean

    //右上角的查看源码 配置md文件的仓库
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'zichenlbl/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    //repoLabel: '查看源码',

    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'zichenlbl/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    //editLinkText: '帮助我们改善此页面！',

    //页面滚动
    smoothScroll: true,

    // 未实现algolia全文搜索
    // algolia: {
    //   apiKey: '01e4b84ec523ce29982afc477f10ac70',
    //   indexName: 'E2DUDI112Q',
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: 'E2DUDI112Q'
    // },

    // 上一篇，下一篇
    themeConfig: {
      // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
      //nextLinks: false,
      // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
      //prevLinks: false
    },
    

  },
  
  //显示行号
  markdown: {
    lineNumbers: true
  },

  plugins: [
    '@vuepress/back-to-top'
    ,['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    // ['@vuepress/medium-zoom']
    // ['@vuepress/medium-zoom'
      // , {
      // selector: 'img.zoom-custom-imgs',
      // selector: 'main :not(a) > img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      // options: {
      //   margin: 15, // 缩放图像外部的空间
      //   background: '#302930', // 叠加层的背景
      //   scrollOffset: 0, // 关闭缩放时滚动的像素数
      //   container: '#zoom-container', // 用于渲染缩放的视口
      //   template: '#zoom-template', // 要在缩放上显示的模板元素
      // }
    // }
    // ]
  ]
  
}