// components/components.js
Component({
  /**
   * 组件的属性列表 给组件传入数据
   */
  properties: {
    titles:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
  foo(){

    }
  },

  // 组件的配置选项
  //使用多插槽时 设置样式隔离
  options:{
  },

  // 外界给组件传入额外的样式
  externalClasses:[],

  // 监听属性的改变
  observers:{
    counter:function(newVlaue){
      console.log(newValue)

    }
  },

  // 组件中监听生命周期函数
  //1.监听所在页面的生命周期
  pageLifetimes:{
    show(){

    },
    hide(){

    },
    resize(){},

  },

  //2.监听组件本身的生命周期
  lifetimes:{
    created(){},
    //组件被添加到页面
    attached(){},
    //被渲染出来
    ready(){},
    //被移动到另外一个结点
    moved(){},
    //被移除
    dettached(){}
  }
})
