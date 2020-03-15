import request from './network.js'


// 轮播图
export function getUtilData(){
  return request({
    url: '/home/multidata',
  })
}

// 流行，新款，精选的商品
export function getGoodsData(type,page){
  return request({
    url:'/home/data',
    data:{
      type:type,
      page:page
    }
  })
}