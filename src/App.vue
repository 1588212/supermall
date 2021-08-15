<template>
<div class="head"> 
  <keep-alive exclude="detail"><router-view/></keep-alive>
  <tab-bar-item></tab-bar-item>
</div>  
</template>

<script>
import TabBarItem from './components/content/tab-bar/TabBarItem'
export default {
  components:{
    TabBarItem,
  },
  name: 'App',
}
</script>


<style scoped>
@import './assets/css/base.css';
</style>
