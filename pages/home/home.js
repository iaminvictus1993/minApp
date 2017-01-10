//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title: 'welcome to gayhub',
    docs: []
  },
  //事件处理函数
  viewLog: function(e) {
      //console.log(e.currentTarget.dataset.id);
      var id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: './logList?id='+id,
        success: function(res){
          console.log(res);
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  onLoad: function () {
    var _this = this
    wx.request({
      url: 'http://localhost:3000/home',
      data: {
        type: "minApp"
      },
      success: function(res) {
          console.log(res)
        _this.setData({
            docs: res.data
        })
      }
    })
  }
})
