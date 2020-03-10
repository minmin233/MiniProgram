// pages/home/home.js
Page({
  showToast(){
    wx.showToast({
      title: '你好啊',
      duration:3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail: function () {
        console.log('展示弹窗失败')
      },
      complete: function () {
        console.log('展示弹窗完成')
      },
    })
  },

 showModal(){
   wx.showModal({
     title: '我是标题',
     content: '我是内容 哈哈哈',
     //showCancel:false,
     cancelText:'退出',
     cancelColor:'red',
     success: function (res){ 
       console.log(res)
       if(res.cancel){
         console.log('用户点击了取消')
        }
         if(res.confirm){
           console.log('用户点击了确定')
         }
       }
     })
 },

showLoading(){
  wx.showLoading({
    title: '加载ing',
    mask: false,
  })

  setTimeout(()=>{
    wx.hideLoading()
  },1000)
},

showAction(){
  wx.showActionSheet({
    itemList: ['相册','拍照'],
    itemColor: 'red',
    success: function (res) {
      console.log(res)
      switch(res.tapIndex){

      }
     },
    fail: function (res) { },
    complete: function (res) { },
  })
}
 })
  
