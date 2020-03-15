// pages/home/home.js
// import request from '../../service/network.js'

import{
  getUtilData,
  getGoodsData
} from '../../service/home.js'

const types=['pop','new','sell'];
const TOP_DISTANCE=1000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods: {
      'pop': { page: 0, list: [] },
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] }
    },
    currentType:'pop',
    showBackTop:false,
    isTabFixed:false,
    tabScrollTop:0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.请求轮播图和推荐数据
    this._getUtilData()

    //2.请求商品数据
   // this._getGoodsData()
   this._getGoodsData('pop')
      this._getGoodsData('new')
      this._getGoodsData('sell')

  },

  //页面显示出来的时候调用的函数，图片的加载是异步的
  // onShow(){
  //   setTimeout(()=>{
  //     wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
  //       console.log(rect)
  //     }).exec()
  //   },1000)
  // },



//---------------------------------网络请求函数----------
  _getUtilData(){
    //1.请求轮播图和推荐数据
    getUtilData().then(res => {
      //console.log(res)

      // 2.取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      //console.log(banners)
      //console.log(recommends)

      //3.将banners和recomends放在data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    }).catch(err => {
      console.log(err)
    })
  },

_getGoodsData(type){
  //1.获取页码
  const page = this.data.goods[type].page+1;
  //console.log(page);
  //2.发送网络请求
  getGoodsData(type,page).then(res=>{
    //console.log(res);
    //2.1取出数据
    const list=res.data.data.list;
    //2.2将数据设置到对应的type的list中
    const oldList = this.data.goods[type].list;
    oldList.push(...list)
    //2.3将数据设置到goods中
    const typeKey = `goods.${type}.list`;
    const pageKey = `goods.${type}.page`;
    this.setData({
      [typeKey]:oldList,
      [pageKey]:page
    })
  }).catch(err=>{
    console.log(err);
  })
},

//--------------------事件监听函数----------------------------
  handleTabClick(event){
    //console.log(event)
    //取出index
    const index = event.detail.index;
    //console.log(index);
    //设置currentType
    const type=types[index]
    this.setData({
      currentType:type
    })
  },

  // 图片加载完成
  handleImageLoad(){
    //console.log('图片加载完成')
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
     // console.log(rect)
     this.data.tabScrollTop=rect.top;
    }).exec()
  },

  onReachBottom(){
    //console.log('页面滚动到底部')
    //上拉加载更多->请求新的数据
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll(options){
    //1.取出scrolltop
    const scrollTop=options.scrollTop;
    // 2.修改showBackTop的属性
    //不要在滚动的函数中频繁调用setData
    const temp = scrollTop >= TOP_DISTANCE;
    if(temp != this.data.showBackTop){
      this.setData({
        showBackTop: temp
      })
    }

    //修改属性
    const temp2=scrollTop >= this.data.tabScrollTop;
    if(temp2!=this.data.isTabFixed){
      this.setData({
        isTabFixed:temp2
      })
    }
  }

})