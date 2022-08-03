export default defineAppConfig({
  // pages，页面路径列表
  pages: [
    'pages/index/index',
    'pages/Pie/Pie',
    'pages/Bar/Bar',
    'pages/Funnel/Funnel',
    'pages/Gauge/Gauge',
    'pages/Heatmap/Heatmap',
    'pages/Radar/Radar',
    'pages/Tree/Tree',
    'pages/Line/Line',
    'pages/Scatter/Scatter',
    'pages/Sunburst/Sunburst',
    'pages/Map/Map',
    'pages/Graph/Graph',
    'pages/K/K',
    'pages/Move/Move',
    'pages/More/More',
    'pages/Add/Add',
  ],
  // 全局的默认窗口表现
  window: {
    backgroundTextStyle: 'light', // 窗口的背景色
    navigationBarBackgroundColor: '#fff', //导航栏背景颜色
    navigationBarTitleText: 'WeChat', // 导航栏标题文字内容
    navigationBarTextStyle: 'black' // 导航栏标题颜色，仅支持 black / white
  },
  // 底部 tab 栏的表现
  // tabBar: {}
  // 
})
