<template>
  <div class="bottom-bar">
   <div class="bar-left bar-item">
     <div class="bar-left-item">
       <img src="../../../assets/img/detail/service.png" alt="">
        <div>客服</div>
     </div>
      <div class="bar-left-item">
       <img src="../../../assets/img/detail/shop.png" alt="">
        <div>店铺</div>
     </div>
      <div class="bar-left-item">
       <img src="../../../assets/img/detail/collect.png" alt="">
        <div>收藏</div>
     </div>
   </div>
   <div class="bar-right bar-item">
    <span class="bar-right-item" @click="addCart">加入购物车</span>
    <span class="bar-right-item">购买</span>
   </div>
  </div>
</template>


<script>
export default {
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
}
</script>


<style scoped>
.bottom-bar{
  position: relative;
  left: 0;
  right: 0;
  height: 49px;
  /* bottom: 49px; */
  background-color: white;
  display: flex;
  text-align: center;
}
.bar-item{
 flex: 1;
 display: flex;
}
.bar-left-item{
 flex:1;
 font-size: 12px;
 padding-top: 10px;
}
.bar-left-item img{
  width: 20px;
}
.bar-right-item{
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 15px;
}
.bar-right-item:first-child{
  background-color: yellow;
}
.bar-right-item:last-child{
  background-color:#ff8198 ;
  color: white;
}
</style>

