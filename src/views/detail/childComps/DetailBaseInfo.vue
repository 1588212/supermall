<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info" >
    <!-- 这个也是用来判断goods这个对象加载好了没有  只有加载好了
    才进行数据展示  有了这个 其实下面的v-if="goods.columns"就可以不写 -->
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span  v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <!-- 因为goods 是异步请求的数据  goods先请求过来的是一个空对象  此时里面的columns[0]等都是没有值的 -->
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key = 'index'>
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    },
  }
}
</script>

<style scoped>
.base-info{
  padding: 10px;
  box-shadow: 0 3px 1px rgba(0, 0, 0, .1);
}
.info-title{
  color: black;
  padding-bottom: 10px;
}
.info-price{
  padding-bottom: 10px;
}
.info-other{
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}
.n-price{
  font-size: 20px;
  color: #ff8198;
}
.o-price{
  font-size: 10px;
  text-decoration: line-through;
}
.discount{
  position: absolute;
  background-color:#ff8198;
  color: white;
  font-size: 12px;
  border-radius: 6px;
  padding: 2px;
  text-align: center;
}
.info-service{
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  padding-bottom: 15px;
 
}
.info-service-item img{
  width: 12px;
}
</style>