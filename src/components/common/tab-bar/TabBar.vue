<template>
   <div class="tabbar">
   <slot></slot>
    </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  background-color:#f6f6f6;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, .1);
}
</style>
