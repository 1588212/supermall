<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="navbar" />
    <scroll
      class="content"
      :probeType="0"
      :pullUpLoad="true"
      ref="scroll"
      @scroll="scroll"
    >  
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <!-- @imageLoad = 'imageLoad' -->
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comments" />
      <goods-list :goods="recommends" ref="recommends" />
      <!-- <toast :message ='message' :isShow ='isShow' /> -->
    </scroll>
     <detail-bottom-bar @addCart ='addToCart'></detail-bottom-bar>
     <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "../../components/content/goods/GoodsList";
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from '../../components/content/backTop/BackTop'
// import Toast from '../../components/common/toast/Toast'

import Scroll from "../../components/common/scroll/Scroll";

import { debounce } from "../../common/utils";
// import {itemListenerMixin} from '../../common/mixin'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";

import { mapActions } from 'vuex'
export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    // Toast,
    Scroll,
  },
  // mixins:[itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      isShowBackTop:false,
      // message:'',
      // isShow:false,
    };
  },
  methods: {
    // ...mapActions({
    //   addCart:'addCart'
    // }),
    ...mapActions(['addCart']),
    imageLoad() {
      // this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      // console.log(this.themeTopYs);
    },
    itemClick(index) {
      // this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 200);
    },
    scroll(position) {
      // console.log(position);
      for (let i in this.themeTopYs) {
        const positionY = -position.y + 44;
        if (positionY >= this.themeTopYs[3]) {
          this.$refs.navbar.currentindex = 3;
        } else if (positionY >= this.themeTopYs[2]) {
          this.$refs.navbar.currentindex = 2;
        } else if (positionY >= this.themeTopYs[1]) {
          this.$refs.navbar.currentindex = 1;
        } else {
          this.$refs.navbar.currentindex = 0;
        }
      }
      this.isShowBackTop = -position.y > 1000
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,20,500)
    },
    addToCart(){
      const product = {}
       product.image = this.topImages[0]
       product.title = this.goods.title
       product.desc = this.goods.desc
       product.price = this.goods.realPrice
       product.iid = this.iid
      // this.$store.commit('addCart',product)
       this.addCart(product).then(res => {
        //  console.log(res);
        //  this.$toast.show();
         this.$toast.show(res,1000);
      
        //  this.message = res;
        //  this.isShow = true;
        //  setTimeout(() => {
        //    this.isShow = false;
        //    this.message ="";
        //  },2000)
        
       })
      // this.$store.dispatch('addCart',product).then(res => {console.log(res);})
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    // 在detail.js里面加 return
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 1 获取数据
      const data = res.result;
      // 2 取出轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 3 创建商品基本信息的对象
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 4 创建店铺基本信息的对象
      this.shop = new Shop(data.shopInfo);
      // 5 取出商品的详情图片数据
      this.detailInfo = data.detailInfo;
      // 6 取出商品的参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6 取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  destroyed() {
    // this.$bus.$off("imageLoad", this.itemListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>