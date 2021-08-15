<template>
  <div class="login-money">
    <div class="login-money-item">
      <div> <span>0.00</span> 元</div>
      <div>我的余额</div>
    </div>
    <div class="login-money-item">
      <div><span>0</span>个</div>
      <div>我的优惠</div>
    </div>
    <div class="login-money-item">
        <div><span>0</span>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-money{
  display: flex;
  overflow: hidden;
  height: 75px;
  
}
.login-money-item{
  padding-top: 20px;
  margin-right: -1px;
  flex: 1;
  text-align: center;
  font-size: 14px;
  border-right: 1px solid rgba(0, 0, 0, .2);
}
.login-money-item div:first-child span{
  color: #ff9198;
  font-size: 22px;
}
</style>