<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle" >
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter? "高":"低"}}</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shop:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  filters:{
    sellCountFilter(value){
      if(value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info{
  margin-top: 15px;
  padding: 10px;
}
.shop-top img{
  width: 50px;
  border:1px solid rgba(0, 0, 0, .2);
  border-radius: 50%;
  vertical-align: middle;
}
.title{
 font-size: 14px;
 padding-left: 10px;
}
.shop-middle{
  display: flex;
  font-size: 12px;
  margin-top: 20px;
}
.shop-middle-item{
  flex: 1;
}
.shop-middle-left{
  display: flex;
  
}
.info-sells,.info-goods{
  flex: 1;
  text-align: center;
  padding-top: 10px;
}
.sells-count,.goods-count{
  padding-bottom: 10px;
  font-size: 16px;
  font-weight:bold;
}
.goods-count{
   border-right: 1px solid rgba(0, 0, 0, .2);
}
.goods-text{
  border-right: 1px solid rgba(0, 0, 0, .2);
}
.shop-middle-right{
  display: flex;
  justify-content: center;
}
.shop-middle-right td{
  padding-bottom: 10px;
}
.shop-middle-right .score,.shop-middle-right .better{
  padding-left: 15px;
}
.shop-middle-right .score{
  color: greenyellow;
}
.shop-middle-right .better span{
  background-color: greenyellow;
}
.shop-middle-right .score-better{
  color: red;
}
.shop-middle-right .better-more span{
  background-color: red;
}
</style>