<template>
  <div class="profile-list">
    <div class="profile-list-item">
      <img src="../../../assets/img/profile/message.png" alt=""> <span>我的消息</span>
    </div>
     <div class="profile-list-item">
      <img src="../../../assets/img/profile/pointer.png" alt=""> <span>积分商城</span>
    </div>
     <div class="profile-list-item">
      <img src="../../../assets/img/profile/vip.png" alt=""> <span>会员卡</span>
    </div>
     <div class="profile-list-item" @click="cartClick">
      <img src="../../../assets/img/profile/cart.png" alt=""> <span>我的购物车</span>
    </div>
     <div class="profile-list-item">
      <img src="../../../assets/img/profile/app.png" alt=""> <span>下载购物App</span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    cartClick(){
      this.$router.push('/cart')
    }
  }
  
}
</script>

<style scoped>
.profile-list{
  font-size:14px;
  border-top: 15px solid rgba(0, 0, 0, 0.08);
}
.profile-list-item:nth-child(4){
  border-top: 15px solid rgba(0, 0, 0, 0.08);
}
.profile-list-item{
  padding-left: 15px;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.profile-list-item img{
  margin-top: -3px;
  width: 25px;
  vertical-align: middle;
}
</style>