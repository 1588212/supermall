<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">---------</div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end">----------</div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
         @load="imgLoad"
        alt=""
      />
      <!--   @load="imgLoad" -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return{
      counter:0,
      imageLength:0
    }
  },
  methods:{
    imgLoad(){
      // 这里不直接写 this.detailInfo.detailImage[0].list.length 防止频繁调用imageLength
      if(++this.counter === this.imageLength ){
        this.$emit('imageLoad')
      }
    }
  },
  // watch监听属性的变化  当detailInfo 一发生变化  就把最新的长度值 赋值给this.imageLength;
  watch:{
    detailInfo(){
       this.imageLength = this.detailInfo.detailImage[0].list.length ;
    }
  }
};
</script>

<style scoped>
.goods-info{
  padding-bottom: 12px;
  border-bottom: 3px solid rgba(0, 0, 0, .1);
}
.info-desc{
  padding: 10px;
  font-size: 12px;
}
.info-key{
  padding: 10px;
}
.info-list img{
  width: 100%;
}
</style>