const app = getApp()
let name = 'top' // 菜单默认值
let flag = true // 用于判断是否加载的默认菜单

Page({
  data: {
    text: "Page news",
    // 判断loading
    hidden: true,
    // 新闻列表
    news: [],
    //
    flag: 1,
    menu: [
      {
        name: "头条",
        value: "top",
        active: true
      }, {
        name: "社会",
        value: "shehui",
        active: false
      }, {
        name: "国内",
        value: "guonei",
        active: false
      }, {
        name: "国际",
        value: "guoji",
        active: false
      }, {
        name: "娱乐",
        value: "yule",
        active: false
      }, {
        name: "体育",
        value: "tiyu",
        active: false
      }, {
        name: "军事",
        value: "junshi",
        active: false
      }, {
        name: "科技",
        value: "keji",
        active: false
      }, {
        name: "财经",
        value: "caijing",
        active: false
      }, {
        name: "时尚",
        value: "shishang",
        active: false
      }
    ]
  },
  bindMenu (e) {
    name = e.target.dataset.name // 获取当前点击的menu值
    const newMenu = this.data.menu.map((arr, index) => {
      if (arr.value === name) {
        arr.active = true
      } else {
        arr.active = false
      }
      return arr
    })

    this.setData({menu: newMenu})
    this.getNews(name)
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({title: '头条'})
    this.getNews(name)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  getNews(name = 'top') {
    const that = this

    that.setData({hidden: false}) //显示loading
    flag = name === 'top'
      ? 1
      : 0

    // 获取新闻列表
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
        type: name,
        key: app.globalData.appkey
      },
      success(res) {
        if (!res.data.error_code) {
          let data = res.data.result.data
          let title = flag
            ? data[0].type
            : data[0].category
          wx.setNavigationBarTitle({title: title})
          that.setData({news: data, hidden: true, flag: flag})
          console.log(res.data)
        }
      }
    })
  }
})