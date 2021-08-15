<template>
<div class="cart-list-item">
   <check-button class="button " :class="{check:product.check}"  @click.native="checkChange"/>
   <div class="cart-img"><img :src="product.image" alt=""></div>
   <div class="cart-info">
     <p class="cart-title">{{product.title}}</p>
     <p class="cart-desc">{{product.desc}}</p>
      <div class="shop-info">
        <span class="shop-price">{{ "¥" + product.price}}</span>
       <span class="shop-count">
         <button class="inbtn" @click="decrement" :disabled='product.count === 1'>-</button> {{product.count}} 
         <button class="debtn" @click="increment">+</button></span>
      </div>
   </div>
   <div class="delete-btn"><button @click="delClick(index)">删除</button></div>
</div>
</template>

<script>
import CheckButton from '../../../components/content/checkbutton/CheckButton'

export default {
  components:{
    CheckButton,
  },
  props:{
    product:{
      type:Object,
      default(){
        return{}
      }
    },
    index:{
      type:Number,
      default:0
    }
  },
  methods:{
    checkChange(){
      return this.product.check = !this.product.check
    },
    increment(){
      return this.product.count ++;
    },
    decrement(){
      return this.product.count --;
    },
    delClick(index){
      this.$store.state.cartList.splice(index,1)
    }
  }
}
</script>

<style scoped>
.cart-list-item{
  margin-top: 8px;
  padding: 5px;
  display: flex;
  font-size: 14px;
  height: 100px; 
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.button{
  margin-top: 35px;
  margin-right: 5px;
}
.check{
   background-color: #ff8198;
   border: 0;
}
.cart-img{
  padding-left: 0px;
  flex:1;
}
.cart-img img{
  width: 70px;
  height: 90px;
  border-radius: 5px;
}
.cart-info{
  padding: 10px;
  flex: 2;
}
.cart-title{
  font-weight: bold;
  font-size: 15px;
}
.cart-desc{
  font-size: 14px;
}
.cart-title,.cart-desc{
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 10px;
}
.cart-title{
  padding-top: 5px;
}
.shop-info{
  position: relative;
  display: flex;
  font-size: 16px;
}
.shop-price{
  color: red;
}
.shop-count{
  position: absolute;
  left: 110px;
 font-weight: bold; 
}
.shop-count button{
  width: 25px;
}
.inbtn{
  margin-right: 5px;
}
.debtn{
  margin-left: 5px;
}
.delete-btn{
  flex:1;
  margin-top: 35px;
}
</style>