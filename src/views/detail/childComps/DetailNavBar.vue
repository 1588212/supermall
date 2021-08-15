<template>
   <div>
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick"><img src="../../../assets/img/common/arrow-right.png" alt=""></div>
      <div slot="center" class="title">
        <span v-for="(item,index) in titles" 
        :class="{titlesitem:currentindex === index}"
        @click = 'itemClick(index)'>{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
  components:{
    NavBar,
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentindex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentindex = index;
      this.$emit('itemClick',index);
    },
    backClick(){
      // this.$router.back()
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.nav-bar{
  background-color:#ff8198;
  color:white;
}
.nav-bar img{
  width: 25px;
  vertical-align: middle;
  transform: rotate(180deg);
}
.title{
  display: flex;
  justify-content:space-around;
  font-size: 14px;
}
.titlesitem{
  color:black;
}
</style>