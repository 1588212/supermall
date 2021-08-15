<template>
  <div class="navbar">
    <div class="left-item"><slot name="left"></slot></div>
    <div class="center-item"><slot name="center"></slot></div>
    <div  class="right-item"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
  .navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 2px rgba(100, 100, 100, .1);
  }
  .left-item,.right-item{
    width: 60px;
  }
  .center-item{
    flex:1
  }
</style>