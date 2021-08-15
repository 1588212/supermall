<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0" >
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <span>&gt;</span>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-img">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatData} from '../../../common/utils.js'
export default { 
  props:{
    commentInfo:{
     type:Object,
     default(){
       return {}
     }
    }
  },
  filters:{
    showDate(value){
    return  formatData(value);
    }
  },
}
</script>
<style scoped>
.comment-info{
  padding: 10px;
  padding-top: 20px;
  font-size: 12px;
}
.info-header{
  display: flex;
  font-weight: bold;
  font-size: 14px;
  justify-content: space-between;
  padding-bottom: 10px;
   border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.info-user{
  padding-top: 10px;
  padding-bottom: 15px;
}
.info-user img{
  width: 35px;
  border-radius: 50%;
  vertical-align: middle; 
}
.info-user span{
  padding-left: 5px;
}
.info-other{
  padding-top: 10px;
}
.date{
  padding-right: 8px;
}
.info-img {
  padding-top: 10px;
  display: flex;
}
.info-img img{
  width: 60px;
}
</style>