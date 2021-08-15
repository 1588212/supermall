<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabChange="tabChange"
      class="tabcontrol"
      ref="tabcontrol1"
      v-show="isShowTabControl"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="LoadMore"
    >
      <home-swiper :banners="banners" @imgLoad="tabControlFixed"></home-swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabChange="tabChange"
        ref="tabcontrol2"
      />
      <goods-list :goods="showGoods"> </goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "../../network/home";
import {debounce} from '../../common/utils';
// import {itemListenerMixin} from '../../common/mixin'

export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isShowBackTop: false,
      isShowTabControl: false,
      saveY: 0,
    };
  },
  // mixins:[itemListenerMixin],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  mounted(){
    // const newRefresh = debounce(this.$refs.scroll.refresh,200)
    // this.itemListener = () => {newRefresh()}
    // this.$bus.$on('imageLoad',this.itemListener)
  },
  // destroyed(){
  //   console.log("hhhhh");
  // },
  activated() {
    // console.log(this.saveY);
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // this.$bus.$off('imageLoad',this.itemListener)
    this.saveY = this.$refs.scroll.scrollY();
  },
  methods: {
    //  事件监听的相关方法
    tabChange(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol2.currentindex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y >= 1000;
      this.isShowTabControl = -position.y > this.tabOffsetTop;
    },
    LoadMore() {
      this.getHomeGoods(this.currentType);
    },
    tabControlFixed() {
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    //  请求数据的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 当获取的属性的key是一个变量时 用[变量]获取；
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        // setTimeout(() =>{this.$refs.scroll.finishPullUp()},1000)
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: #ff8198;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabcontrol {
  position: relative;
  z-index: 9;
}
/* .tab-control{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>