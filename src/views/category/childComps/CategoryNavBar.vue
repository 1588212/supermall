<template>
  <div class="category-nav-bar">
    <nav-bar><div slot="center" >商品分类</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
  components:{
      NavBar,
  }
}
</script>

<style scoped>
.category-nav-bar{
  background-color: #ff8998;
  color: white;
}
</style>