const path = require('path')
const fs = require('fs')

function webpackPath () {
  const pathArray = fs.readdirSync(path.resolve(__dirname, '../webpack'))

  return pathArray.map(item => {
    return item.split('.md')[0]
  })
}


module.exports = {
  title: 'H.Z的学习笔记',
  description: 'HZ的前端学习笔记，',
  base: '/',
  head: [
    ['meta', { 'data-n-head': true, 'data-hid': 'keywords', 'name': 'keywords', 'content': 'HZ的前端学习笔记，其中包含HTML, JavaScript, css, Vue, React Nodejs, flutter等' }],
    ['meta', { 'data-n-head': true, 'data-hid': 'description', 'name': 'description', 'content': 'HZ的前端学习笔记，其中包含HTML, JavaScript, css, Vue, React Nodejs, flutter等' }]
  ],
  // theme: 'reco',
  themeConfig: {
    huawei: false,
    search: true,
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '前端',
        link: '/fe/home'
      },
      {
        text: 'webpack',
        link: '/webpack/01'
      },
      {
        text: 'Flutter',
        link: '/flutter/home'
      },
      {
        text: 'node',
        link: '/node/home'
      },
      {
        text: '更多',
        items: [
          { text: '个人网站', link: 'http://blog.closeeyes.cn/' },
          { text: 'github', link: 'https://github.com/hz199/__' },
          { text: 'react-admin', link: 'https://react.closeeyes.cn/' }
        ]
      }
    ],
    sidebar: {
      '/fe/': [
        {
          title: "JavaScript",
          collapsable: true,
          children: genSidebarConfig("fe/JavaScript", true)
        },
        {
          title: "HTML",
          collapsable: true,
          children: genSidebarConfig("fe/HTML", true)
        },
        {
          title: "Vue",
          collapsable: true,
          children: genSidebarConfig("fe/Vue", true)
        },
        {
          title: "React",
          collapsable: true,
          children: genSidebarConfig("fe/React", true)
        }
      ],
      '/flutter/': [
        {
          title: "Dart",
          collapsable: true,
          children: genSidebarConfig("flutter/dart", true)
        }
      ],
      '/node/': [
        {
          title: "Koa",
          collapsable: true,
          children: genSidebarConfig("node/koa", true)
        }
      ],
      '/webpack/': webpackPath()
    }
  }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}
