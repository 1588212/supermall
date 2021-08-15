<template>
  <div class="cart-bottom-bar">
    <div class="content-check">
       <check-button 
       class="bottom-check" 
       :class='{active:isChecked}' 
       @click.native="checkAll"/>
       <span>全选</span>
    </div>
    <div class="total-price">
      合计：{{totalPrice}}
    </div>
    <div class="total-count" @click="calcTotalPrice"><span>去计算({{checked}})</span></div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkbutton/CheckButton'
import { mapGetters } from 'vuex'
export default {
  components:{
    CheckButton,
  },
  computed:{
    ...mapGetters({
      list:'cartList'
    }),
    totalPrice(){
      return "¥" + (this.list.filter(item => item.check === true)
      .reduce((perValue,item) => perValue + item.price * item.count,0)).toFixed(2)
    },
    checked(){
       return this.list.filter(item => item.check === true)
      .reduce((perValue,item) => perValue + item.count,0)
    },
    isChecked(){
      if(this.list.length == 0) { return false}
      return !this.list.find(item => item.check === false)
    }
  },
  methods:{
    checkAll(){
      // console.log(this.list[0].check)
     if(this.isChecked){
       this.list.forEach(item => {item.check = false});
     } else{
       this.list.forEach(item => {item.check = true});
     }
    },
    calcTotalPrice(){
      if(!this.checked){
        this.$toast.show('请选择商品',2000)
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar{
  display: flex;
  background-color:rgba(0, 0, 0, .1);
  height: 40px;
  position: relative;
}
.content-check{
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
}
.content-check span{
  font-size: 18px;
}
.active{
  background-color: #ff9198;
}
.bottom-check{
  margin-right: 5px;
}
.total-price{
  font-size: 18px;
  margin-left: 10px;
  padding-top: 10px;
}
.total-count{
  position: absolute;
  right: 0;
  font-size: 14px;
  color: white;
  height: 40px;
  width: 90px;
  text-align: center;
  padding-top: 10px;
  background-color: red;
}
</style>