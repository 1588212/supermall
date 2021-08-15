<template>
  <div>
    <tab-bar>
      <tab-item path="/home" activeColor = 'pink'>
        <div slot="img-icon">
          <img src="../../../assets/img/tabbar/home.png" alt="" />
        </div>
        <div slot="img-active-icon">
          <img src="../../../assets/img/tabbar/home_active.png" alt="" />
        </div>
        <div slot="text-icon">首页</div>
      </tab-item>
      <tab-item path="/category" activeColor = 'pink'>
        <div slot="img-icon">
          <img src="../../../assets/img/tabbar/category.png" alt="" />
        </div>
        <div slot="img-active-icon">
          <img src="../../../assets/img/tabbar/category_active.png" alt="" />
        </div>
        <div slot="text-icon">分类</div>
      </tab-item>
      <tab-item path="/cart" activeColor = 'pink'>
        <div slot="img-icon">
          <img src="../../../assets/img/tabbar/cart.png" alt="" />
        </div>
        <div slot="img-active-icon">
          <img src="../../../assets/img/tabbar/cart_active.png" alt="" />
        </div>
        <div slot="text-icon">购物车</div>
      </tab-item>
      <tab-item path="/profile" activeColor = 'pink'>
        <div slot="img-icon">
          <img src="../../../assets/img/tabbar/profile.png" alt="" />
        </div>
        <div slot="img-active-icon">
          <img src="../../../assets/img/tabbar/profile_active.png" alt="" />
        </div>
        <div slot="text-icon">我的</div>
      </tab-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tab-bar/TabBar";
import TabItem from "../../common/tab-bar/TabItem";
export default {
  components: {
    TabBar,
    TabItem,
  },
};
</script>


<style scoped>
</style>