export const allMenu = [
    {
      name: '首页',
      url: 'index',
      icon: 'home', 
    }, {
      name: '音乐模块',
      url: 'music',
      icon: 'bars',
      children: [
        { name: '音乐系列', url: 'music' }, 
      ]
    }, {
      name: '工具模块',
      url: 'tool',
      icon: 'tool',
      children: [
        { name: '小应用', url: 'tools' },
        { name: '富文本编辑器', url: 'editor' },
        { name: '待办事项', url: 'todoList' },
      ],
    }, {
      name: '画廊模块',
      url: 'pic',
      icon: 'edit',
      children: [
        { name: '时光相片', url: 'album' },
      ],
    }, {
      name: '搜索模块',
      url: 'search',
      icon: 'search',
      children: [
        { name: '搜索引擎', url: 'searchEngine' },
      ],
    }, {
      name: '搜索模块2',
      url: 'search2',
      icon: 'search',
      children: [
        { name: '搜索引擎2', url: 'searchEngine22' },
        { name: '搜索引擎3', url: 'searchEngine23' },
        { name: '搜索引擎4', url: 'searchEngine24' },
        { name: '搜索引擎5', url: 'searchEngine25' },
        { name: '搜索引擎6', url: 'searchEngine26' },
        { name: '搜索引擎7', url: 'searchEngine27' },
        { name: '搜索引擎8', url: 'searchEngine28' },
        { name: '搜索引擎9', url: 'searchEngine29' },
        { name: '搜索引擎0', url: 'searchEngine20' },
      ],
    }]