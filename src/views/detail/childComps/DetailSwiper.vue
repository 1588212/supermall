<template>
  <swiper v-if="topImages" class="detail-swiper">
    <swiper-item v-for="item in topImages" >
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return[]
      } 
    }
  },
};
</script>

<style scoped>
.detail-swiper{
  height: 350px;
  overflow: hidden;
}
.detail-swiper img{
  width: 100%;
}
</style>