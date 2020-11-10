module.exports={
    chainWebpack:config=>{
      //删除编译后的独立js文件上的预获取操作
      config.plugins.delete("prefetch")
    },
    //本地服务器没做跨域，vue客户端跨域配置
  // devServer:{
  //   proxy:{
  //     '/api':{
  //       target:'http://localhost:5050',
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
