<template>
  <div class="tabbaritem" @click="tabClick">
    <div v-if = '!isActive'><slot name="img-icon"></slot></div>
    <div v-else><slot name="img-active-icon"></slot></div>
    <div class="tab-text" :style='isActiveColor'><slot name="text-icon"></slot></div>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     isActive:false
  //   }
  // },
  props:{
    path:{
      type:String,
    },
    activeColor:{
      type:String,
      default:'red',
    }
  },
  methods:{
    tabClick(){
      // .catch(err => {})  如果一直点击 会出现重复路由跳转的错误  可以在跳转的后面加上这个  
      this.$router.push(this.path).catch(err => {})
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
      // return this.$route.path === this.path 
    },
    isActiveColor(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
};
</script>


<style scoped>
.tabbaritem{
  margin-top: 5px;
  flex:1;
  text-align: center;
  font-size:14px;
}
.tabbaritem img{
  width: 25px;
  vertical-align: middle;
}
</style>