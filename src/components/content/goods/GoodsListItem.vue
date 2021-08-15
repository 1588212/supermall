<template>
  <div class="goodsitem" @click="imageClick">
    <img v-lazy="showImage" alt="" @load="imageLoad"/>
    <div class="goodsbottom">
      <p class="item-title">{{ goodsItem.title }}</p>
      <span class="item-price">{{ goodsItem.price }}</span>
      <span class="item-collect"><img src="../../../assets/img/common/favor.png" alt="">
      {{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    showImage(){
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img 
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('imageLoad')
    },
    imageClick(){
      this.$router.push('./detail/' + this.goodsItem.iid || this.goodsItem.item_id  )
      // this.$router.push({
      //   path:'./detail',
      //   query:{
      //       name:"chenyu",
      //      sex:'男',
      //      age:18,
      //   }
      // })
    }
  },
};
</script>
<style scoped>
.goodsitem {
  position: relative;
  width: 50%;
  font-size: 10px;
  padding-right: 8px;
  text-align: center;
  padding-bottom: 40px;
}
.goodsbottom{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
}
.goodsitem img {
  width: 100%;
  border-radius: 5px;
}
.item-title {
  margin-top: 2px;
  margin-bottom: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-price {
  color: red;
}
.item-collect img{
  margin-left: 12px;
  margin-right: -4px;
  width: 14px;
  height: 14px;
  vertical-align: bottom;
}
</style>