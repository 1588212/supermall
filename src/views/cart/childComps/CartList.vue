<template>
  <div class="cart-lsit">
    <cart-list-item v-for="(item,index) in list" :product="item" :index ='index'/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem";
export default {
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters({
      list: "cartList",
    }),
  },
};
</script>

<style scoped>
.cart-list{
  padding: 5px;
}
</style>