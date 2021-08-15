<template>
  <div>
    <profile-nav-bar class="profile-bar"><div slot="center">我的档案</div></profile-nav-bar>
    <login/>
    <login-money/>
    <profile-list/>
  </div>
</template>

<script>
import ProfileNavBar from './childComps/ProfileNavBar'
import Login from './childComps/Login'
import LoginMoney from  './childComps/LoginMoney'
import ProfileList from './childComps/ProfileList'
export default {
  components:{
    ProfileNavBar,
    Login,
    LoginMoney,
    ProfileList,
  },
  
}
</script>

<style scoped>
.profile-bar{
  background-color: #ff9198;
  color: white;
  border-bottom: 1px solid #ff8198;
  box-shadow: 0 0 0 transparent;
}

</style>