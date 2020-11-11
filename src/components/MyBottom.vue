<template>
  <div id="bottom">
    <!-- 底部 -->
    <div>
      <mt-tabbar v-model="selectedTab" fixed>
        <mt-tab-item id="index">
          首页
          <img
            src="../assets/common/news.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'sy'"
          />
          <img
            src="../assets/common/news.png"
            alt=""
            slot="icon"
            v-else
          />
        </mt-tab-item>
        <mt-tab-item id="seekagent">
          找经纪人
          <img
             src="../assets/common/news.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'fl'"
          />
          <img  src="../assets/common/news.png" alt="" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="expand">
          百科
          <img
             src="../assets/common/news.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'bk'"
          />
          <img  src="../assets/common/news.png" alt="" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="mine">
          我的
          <img
            src="../assets/common/news.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'wd'"
          />
          <img  src="../assets/common/news.png" alt="" slot="icon" v-else />
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<style >
#bottom .mint-searchbar {
  background-color: #fff;
  padding: 0px;
}
#bottom .mint-searchbar-inner {
  border: 2px solid#c8c8c8;
}
#bottom .mint-searchbar-cancel {
  color: #c8c8c8;
}
#bottom > div:first-child {
  float: left;
  margin-right: 15px;
}
#bottom .mint-tabbar > .mint-tab-item.is-selected {
  color: cornflowerblue;
}
</style>

<script>
export default {
  data(){
    return{
      selectedTab:''
    }
  },
  name:'MyBottom',
  mounted(){
    var path=this.$route.path;
    if(path=='/'){
      this.selected=="index"
    }else{
      this.selected=path.split('/')[1];
    }
  },
  watch:{
    selectedTab(newVal){
      if(newVal=="index"){
        this.$router.push(`/`).catch((e)=>{})
      }else{
        this.$router.push(`/${newVal}`).catch((e)=>{})
      }
    }
  }
}
</script>

