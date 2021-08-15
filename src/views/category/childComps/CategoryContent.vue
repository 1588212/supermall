<template>
<div v-if ="listItem.length !== 0">
  <div class="category-list" v-for="(item,index) in listItem">
    <div class="item-img" ><img :src="item.image" alt="" @load="imgLoad(index)"></div>
    <div>{{item.title}}</div>
  </div>
 
</div>
</template>

<script>

export default {
  props:{
    listItem:{
     type:Array,
     default(){
       return {}
     }
    }
  },
  methods:{
    imgLoad(index){
      if(index === this.listItem.length - 1){
        this.$emit('imgLoad')
      }
    }
  }
}
</script>

<style scoped>
.category-list{
margin-top: 20px;
 width: 35%;
 text-align: center;
 font-size: 15px;
}
.item-img img{
  width: 70%;
}

</style>