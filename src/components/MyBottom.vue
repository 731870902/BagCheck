<template>
  <div id="bottom">
    <!-- 底部 -->
    <div>
      <mt-tabbar v-model="selectedTab" fixed>
        <mt-tab-item id="index">
          首页
          <img
            src="../assets/common/index_yes.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'index'"
          />
          <img
            src="../assets/common/index_no.png"
            alt=""
            slot="icon"
            v-else
          />
        </mt-tab-item>
        <mt-tab-item id="seekagent">
          找经纪人
          <img
             src="../assets/common/seekagent_yes.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'seekagent'"
          />
          <img  src="../assets/common/seekagent_no.png" alt="" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="expand">
          百科
          <img
             src="../assets/common/expand_yes.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'expand'"
          />
          <img  src="../assets/common/expand_no.png" alt="" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="mine">
          我的
          <img
            src="../assets/common/mine_yes.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'mine'"
          />
          <img  src="../assets/common/mine_no.png" alt="" slot="icon" v-else />
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
#bottom .mint-tabbar > .mint-tab-item{
  color: #cdcdcd;
}
#bottom .mint-tabbar > .mint-tab-item.is-selected {
  color:#000;
  background: #fff
}
</style>

<script>
export default {
  data(){
    return{
      selectedTab:'index'
    }
  },
  name:'MyBottom',
  mounted(){
    var path=this.$route.path;
    if(path=='/'){
      this.selectedTab=="index"
    }else{
      this.selectedTab=path.split('/')[1];
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

