module.exports = {
  base: '/vuepress/',
  title: '文档',
  description: 'HuJinya',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    //标题导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/guide/', target: '_self', rel: '' },
      { text: '分类',
        items: [
          { text: 'C#', items: [ 
               { text: '基础', link: '/' }, { text: 'csharp', link: '/csharp/' } 
            ] 
          },
          { text: '计算机', items: [
               { text: '空', link: '/language/chinese/' }, { text: '空', link: '/language/japanese/' } 
            ] 
          }
        ]
      },
      { text: '爱好', ariaLabel: 'Language Menu', 
        items: [
          { text: '看书', link: '/read/看书/' },
          { text: '听歌', link: '/music/听歌/' },
          { text: '骑车', link: '/bicycle/骑车/' },
          { text: '跑步', link: '/run/跑步/' },
          { text: '钢琴', link: '/piano/钢琴/' },
          { text: '写字', link: '/calligraphy/写字/' },
          { text: '羽毛球', link: '/badminton/羽毛球/' },
          { text: '看风景', link: '/scenery/看风景/' },
          // { text: '看书', link: '/language/chinese/' },
          // { text: '看书', link: '/language/chinese/' },
          // { text: '看书', link: '/language/chinese/' },
          // { text: '看书', link: '/language/chinese/' },
          // { text: '看书', link: '/language/chinese/' },
          // { text: '看书', link: '/language/japanese/' }
        ]
      },
      //{ text: 'csdn', link: 'https://vuepress.vuejs.org/zh/'},
      { text: '关于我', link: 'http://zichenlbl.github.io/about', target: '_self', rel: 'noopener noreferrer' },
    ],
    navbar: true,
    // sidebar: [
    //   '/',
    //   ['/guide/', 'Explicit link text'],
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
  },
  
  //显示行号
  markdown: {
    lineNumbers: true
  }
}