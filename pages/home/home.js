// pages/home/home.js
Page({
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return{
      title:'你好啊，李银河',path:'/pages/about/about',
      imageUrl:'/assets/tabbar/home.png'
    }
  }
})