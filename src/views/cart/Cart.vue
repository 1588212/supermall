<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar"><div slot="center">购物车({{length}})</div></nav-bar>
    <scroll :probeType='0'
            :pullUpLoad='true'
             class="content"
             ref="scroll"
             ><cart-list class="cart-list"/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList'
import Scroll from '../../components/common/scroll/Scroll'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'
export default { 
  components:{
     NavBar,
     CartList,
     Scroll,
     CartBottomBar,
  },
  computed:{
    ...mapGetters({
      length:"cartLength",
    })
  },
  activated(){
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
#cart{
  height: 100vh;
}
.cart-nav-bar{
  background-color:#ff8198 ;
  font-size: 16px;
  color: white;
}
.content{
  height:calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>