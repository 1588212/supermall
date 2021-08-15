<template>
  <div id="category">
    <category-nav-bar />
    <div class="main-content">
      <category-slide class="category-slide" :categoryName="categoryName" @slideItemClick="slideItemClick"/>
      <scroll :probeType="0" :pullUpLoad="true" class="category-scroll" ref="scroll">
          <category-content class="category-content" :listItem="categoryList" @imgLoad ='imgLoad'/>
          <tab-control class="category-bar" :titles="titles" @tabChange="shopsChange" />
          <goods-list :goods="categoryGoods" class="goods-show" />
      </scroll>
    </div>
  </div>
</template>

<script>
import CategoryNavBar from "./childComps/CategoryNavBar";
import CategorySlide from "./childComps/CategorySlide";
import CategoryContent from "./childComps/CategoryContent";

import Scroll from "../../components/common/scroll/Scroll";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import {
  getCategory,
  getSubCategory,
  getCategoryDetail,
} from "../../network/category";

export default {
  components: {
    CategoryNavBar,
    CategorySlide,
    CategoryContent,
    Scroll,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      categoryName: [],
      categoryList: [],
      categoryGoods: [],
      currentindex: 0,
      titles: ["流行", "新款", "精选"],
    };
  },
  created() {
    this.getCategory();
  },
  mounted(){
    
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        // console.log(res.data);
        this.categoryName = res.data.category.list;
        // console.log(this.categoryName);
        this.getSubCategory(this.categoryName[this.currentindex].maitKey);
        this.getCategoryDetail(
        this.categoryName[this.currentindex].miniWallkey,"pop");
        // getSubCategory(this.categoryName.[0].mainKey).then(res => {console.log(res)})
      });
    },

    slideItemClick({ maitKey, index }) {
      // this.$refs.scroll.scrollTo(0,0,700)
      this.currentindex = index;
      this.getSubCategory(maitKey);
      this.getCategoryDetail(
        this.categoryName[this.currentindex].miniWallkey,
        "pop"
      );
    },

    getSubCategory(maitKey) {
      getSubCategory(maitKey).then((res) => {
        this.categoryList = res.data.list;
        // console.log(this.categoryList);
      });
    },

    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoryGoods = res;
      });
    },

    shopsChange(index) {
      const titles = ["pop", "new", "sell"];
      this.getCategoryDetail(this.categoryName[this.currentindex].miniWallkey,titles[index]);
    },  
    imgLoad(){
      this.$refs.scroll.refresh();
    }
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.main-content {
  width: 100%;
  display: flex;
}
.category-scroll{
  margin-left: 100px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  top: 44px;
  overflow: hidden;
}
.category-content {
  display: flex;
  flex-wrap: wrap;
}
.category-bar {
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  background-color: white;
  /* border-bottom: 3px solid rgba(0, 0, 0, .2); */
}
.goods-show {
  padding-top: 15px;
  width: 100%;
}
/* .category-right-scroll {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
} */
</style>