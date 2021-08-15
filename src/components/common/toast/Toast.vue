<template>
  <div class="toast" v-show="isShow">
   <h4>{{message}}</h4>
  </div>
</template>

<script>
export default {
  // props:{
  //   message:{
  //     type:String,
  //     default:''
  //   },
  //   isShow:{
  //     type:Boolean,
  //     default:false
  //   }
  // }
  data(){
    return{
      message:'',
      isShow:false,
    }
  },
  methods:{
    show(message = '默认值',delay = 2000){
      // delay = delay || 2000
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow =false;
        this.message = ''
      }, delay);
    }
  }
}
</script>

<style scoped>
.toast{
  font-size: 14px;
  color: white;
  position: fixed;
  z-index: 999;
  padding:10px;
  top:50%;
  left: 50%;
  border-radius:10px;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, .7);
}
</style>