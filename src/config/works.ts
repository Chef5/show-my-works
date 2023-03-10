export default [
  {
    id: '1',
    name: '跑鸭 - 一款基于校园跑步的社交小程序',
    theme: '#63b7af',
    time: '2020-03 ~ 2020-05',
    tags: ['体育', '社交'],
    platforms: ['PC', 'H5', '小程序'],
    technologies: ['Vant', 'Less', 'Laravel', 'MySQL'],
    type: '毕业设计',
    owner: 'Chef Wu',
    summary: '“跑鸭”微信小程序，包含实时里程配速、运动路径、整公里提醒、周榜月榜、打卡分享、热门推荐、线上活动、勋章墙、隐私设置',
    honor: '项目成绩',
    pictures: [
      { name: '首页', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/1.jpg' },
      { name: '动态圈子', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/2.jpg' },
      { name: '活动广场', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/3.jpg' },
      { name: '个人中心', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/4.jpg' },
      { name: '通用设置', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/6.png' },
      { name: '隐私设置', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/7.png' },
      { name: 'E-R图', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/20200618185938.jpeg' },
      { name: '数据模型图', url: 'http://img.cdn.1zdz.cn/github/readme/poprun/20200618191037.jpeg' },
    ],
    descriptions: [
      '“跑鸭”微信小程序的核心功能就是：跑步+社交+活动，详细划分如下：',
      '（1）跑步（首屏）：当前位置地图、排行榜（周榜、月榜）、运动路径、实时数据（里程、配速）、随机一言。',
      '（1）动态圈子：打卡分享、发布分享、热门推荐、点赞评论、消息通知。',
      '（3）活动广场：线上活动（报名、完赛条件、奖励）、跑步教程。',
      '（4）运动管理、动态管理、设置（通用设置、隐私设置）、勋章墙、等级称号、个人主页、资料编辑。',
    ],
    projects: [
      {
        name: '前端项目',
        technologies: ['Less', 'Vant-Weapp', 'Iview-Weapp'],
        description: 'https://github.com/Chef5/PopRun'
      },
      {
        name: '后端项目',
        technologies: ['Laravel 6', 'MySQL'],
        description: 'https://github.com/Chef5/PopRun-b'
      },
    ],
  },


  {
    id: '3',
    name: '工大教务处',
    theme: '#1298cf',
    time: '2018-07 ~ 2022.06',
    tags: ['爬虫', '教务', '课程表'],
    platforms: ['微信小程序', '安卓'],
    technologies: ['微信小程序', 'PHP', 'uni-App'],
    type: '个人',
    owner: 'Chef Wu',
    summary: '利用爬虫技术，将学校教务处信息搬到移动端，功能涉及课程表查询、成绩查询、空教室查询、考试时间查询、刷水卡、教学日历等',
    honor: 'UV: 20k、DAU: 3k；辽宁省移动开发二等奖；广告收益；',
    pictures: [
      { name: '工大教务处', url: 'http://img.cdn.1zdz.cn/works-show/mini-dlpu/MiniProgram.miniDLPU.png' },
      { name: 'mini教务处', url: 'http://img.cdn.1zdz.cn/works-show/mini-dlpu/Android.miniDLPU.png' },
    ],
    descriptions: [
      '工大教务处”是我在课外学习中开发的第一款上线的小程序',
      '“工大教务处”前身是一款安卓程序“mini教务处”，那是我为了方便我自己查询（课表、成绩、考试日程）而开发的。',
      '后来经过室友、同学的分享，有些iOS的同学反馈也想要使用。于是我2018年9月份用了一个月学习小程序，并完成了第一版小程序上线。',
      '小程序上线后，随着大家的扩散，就有越来越多的用户，也收到了很多建议，于是我一次次地添加功能、修改bug，一直维护到毕业',
      '毕业后，培养了两个学弟，之后小程序基本上交给学弟们维护了。',
      '现在小程序依旧在线上，取名叫“掌上教务处”，欢迎访问！'
    ],
    projects: [
      {
        name: '安卓',
        technologies: ['uniApp'],
        description: '已放弃维护'
      },
      {
        name: '微信小程序',
        technologies: ['微信小程序'],
        description: 'https://github.com/Chef5/miniDLPU'
      },
      {
        name: '后端',
        technologies: ['PHP', 'MySQL', 'Curl'],
        description: 'https://github.com/Chef5/miniDLPU-b'
      },
    ],
  },


  {
    id: '3',
    name: '智能语音识别记账本',
    theme: '#1298cf',
    time: '2018-03 ~ 2018-07',
    tags: ['AI', '工具'],
    platforms: ['安卓'],
    technologies: ['uni-App', 'PHP', 'ffmpeg'],
    type: '个人',
    owner: 'Chef Wu',
    summary: '结合百度云语音识别接口，以聊天对话形式，智能从对话中提取收支明细，帮助个人记录生活收入和支出',
    honor: '国家级大创项目',
    pictures: [
      { name: '首页', url: 'http://img.cdn.1zdz.cn/works-show/ai-book/Android.AI-Book.png' },
    ],
    descriptions: [
      '这是我大二时萌生的一个想法，联系了导师后，开始着手开发，顺利申报成国家级大创项目，中期、结题答辩都获得了评委的一致好评',
      '项目采用的前后端分离做的，项目前端用的是uniApp开发，然后打包成安卓apk',
      '项目后端用的PHP原生开发，接收前端传过来的对话音频文件，后端调用百度云语音识别进行分词，通过设计的算法从分词结果里提取账单信息，比如时间、收支类型、金额等',
    ],
    projects: [
      {
        name: '前端',
        technologies: ['uniApp'],
        description: 'https://github.com/mos/AIBook-frontend'
      },
      {
        name: '后端',
        technologies: ['PHP', 'ffmpeg'],
        description: 'https://github.com/Chef5/AiBook-backEnd'
      },
    ],
  },

  {
    id: '3',
    name: 'STS学习资讯平台',
    theme: '#1e90ff',
    time: '2017-03 ~ 2017-05',
    tags: ['教育', '资讯'],
    platforms: ['PC'],
    technologies: ['PHP'],
    type: '个人',
    owner: 'Chef Wu',
    summary: 'STS学习资讯平台，主要功能是提供初高中学习资源分享的平台，同时提供院校、专业、历年高考分数线查询等功能',
    honor: '-',
    pictures: [
      { name: '首页', url: 'http://img.cdn.1zdz.cn/works-show/stsedu/Web.STSedu.cn.png' },
    ],
    descriptions: [
      'STS学习资讯平台，其前身是“物理加油站”网站',
      '“物理加油站”是我高一时创建的一个静态html网站，主要提供初高中复习资料、历年考试真题的网址，当时每次更新资源时，存粹靠添加html代码然后通过FTP上传到虚拟主机。还记得当时我买了第一个域名 kei123.com（后来100块钱把它卖掉了）',
      '大学时，接触了PHP语言，于是使用PHP将“物理加油站”改造成“STS学习资讯平台”，支持用户注册登录，支持用户自主上传资料或分享云盘链接。配置了新的域名 stsedu.cn（意思是 Student to Student Education 学生帮学生的教育网站）',
      '因工作后没有精力维护，STS学习资讯平台，于2021年正式下线',
    ],
    projects: [
      {
        name: 'PHP项目',
        technologies: ['PHP'],
        description: '纯PHP项目，没有用任何框架'
      },
    ],
  },

];