<template>
  <div class="goodslist">
    <goods-list-item :goodsItem = "item" v-for="item in goods" :key = 'item.index'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from '../goods/GoodsListItem'
export default {
  components:{
    GoodsListItem,
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 5px solid rgba(0, 0, 0, .1);
  padding-left: 8px;
  padding-top: 8px;
}
</style>