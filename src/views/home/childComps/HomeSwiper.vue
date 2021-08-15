<template>
    <swiper v-if="banners">
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link"><img :src="item.image" alt="" @load="imgLoad" /></a>
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
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      imgcount:false,
    }
  },
  methods:{
    imgLoad(){
      if(!this.imgcount){this.$emit('imgLoad')}
      this.imgcount = true;
    }
  }
};
</script>

<style scoped>
</style>