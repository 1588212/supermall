<template>
  <div class="recommend-view">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend-view{
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  border-bottom: 8px solid rgba(0, 0, 0, .1);
  padding-bottom: 20px;
}
.recommend-item{
  flex:1;
  text-align: center;
}
.recommend-item img{
  width:70px;
  margin-bottom: 10px;
}

</style>