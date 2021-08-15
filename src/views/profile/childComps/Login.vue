<template>
  <div class="login">
    <div class="login-left">
      <div class="image-warpper"><img :src="LoginImage" alt=""></div>
    </div>
    <div class="login-center">
      <div class="login-center-text"><span>登录</span>/<span>注册</span></div>
      <div><img src="../../../assets/img/profile/phone.png" alt="">
      <span class="login-tel">暂无绑定手机号</span>
      </div>
    </div>
    <div class="login-right">
      <img src="../../../assets/img/common/arrow-right.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      LoginImage:require('../../../assets/img/profile/touxiang.jpeg')
    }
  }
  
}
</script>

<style scoped>
.login{
  color: white;
  display: flex;
  align-items: center;
  height: 75px;
  background-color: #ff9198;
}
.login-left,.login-right{
  flex: 1;
  text-align: center;
}
.login-center{
  flex: 2;
}
.image-warpper{
  margin-left: 20px;
  width: 55px;
  overflow: hidden; 
}
.login-left img{
  width: 100%;
  border-radius: 50%;
}
.login-center img{
  vertical-align: middle;
  width:30px;
}
.login-right img{
  width: 25px;
}
.login-right{
 
}
.login-center-text{
  padding-bottom: 4px;
  padding-left: 6px;
}
.login-tel{
  font-size: 12px;
}
</style>